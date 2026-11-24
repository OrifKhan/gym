import { useEffect, useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Plus, Trash2, Camera, Scale, Ruler } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Input, Select } from '../components/ui/Input'
import EmptyState from '../components/ui/EmptyState'
import ConfirmDialog from '../components/ui/ConfirmDialog'
import { useAppData } from '../context/AppDataProvider'
import { EXERCISES } from '../data/exercises'
import { savePhotoBlob, getPhotoBlob, deletePhotoBlob } from '../lib/db'
import { toISODate, formatDateShort } from '../lib/dateUtils'

function ChartTooltip({ active, payload, label, unit }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-base-800 border border-base-600 rounded-lg px-3 py-2 text-xs">
      <div className="text-base-400">{label}</div>
      <div className="text-base-100 font-semibold">
        {payload[0].value} {unit}
      </div>
    </div>
  )
}

function MeasurementForm({ onSave }) {
  const [form, setForm] = useState({ weightKg: '', chestCm: '', waistCm: '', shoulderCm: '', armCm: '', legCm: '', calfCm: '' })

  const submit = () => {
    if (!form.weightKg) return
    onSave({
      id: `${Date.now()}`,
      date: toISODate(new Date()),
      weightKg: parseFloat(form.weightKg),
      chestCm: form.chestCm ? parseFloat(form.chestCm) : null,
      waistCm: form.waistCm ? parseFloat(form.waistCm) : null,
      shoulderCm: form.shoulderCm ? parseFloat(form.shoulderCm) : null,
      armCm: form.armCm ? parseFloat(form.armCm) : null,
      legCm: form.legCm ? parseFloat(form.legCm) : null,
      calfCm: form.calfCm ? parseFloat(form.calfCm) : null,
    })
    setForm({ weightKg: '', chestCm: '', waistCm: '', shoulderCm: '', armCm: '', legCm: '', calfCm: '' })
  }

  return (
    <Card>
      <h3 className="font-semibold text-base-100 mb-3 flex items-center gap-1.5">
        <Ruler size={15} className="text-accent" /> Log Weekly Measurements
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
        <Input label="Weight (kg)" type="number" value={form.weightKg} onChange={(e) => setForm({ ...form, weightKg: e.target.value })} />
        <Input label="Chest (cm)" type="number" value={form.chestCm} onChange={(e) => setForm({ ...form, chestCm: e.target.value })} />
        <Input label="Waist (cm)" type="number" value={form.waistCm} onChange={(e) => setForm({ ...form, waistCm: e.target.value })} />
        <Input label="Shoulders (cm)" type="number" value={form.shoulderCm} onChange={(e) => setForm({ ...form, shoulderCm: e.target.value })} />
        <Input label="Arm (cm)" type="number" value={form.armCm} onChange={(e) => setForm({ ...form, armCm: e.target.value })} />
        <Input label="Thigh (cm)" type="number" value={form.legCm} onChange={(e) => setForm({ ...form, legCm: e.target.value })} />
        <Input label="Calf (cm)" type="number" value={form.calfCm} onChange={(e) => setForm({ ...form, calfCm: e.target.value })} />
      </div>
      <Button onClick={submit}>
        <Plus size={14} /> Save Entry
      </Button>
    </Card>
  )
}

function PhotoThumb({ meta, onDelete }) {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    let active = true
    let objectUrl = null
    getPhotoBlob(meta.id).then((blob) => {
      if (blob && active) {
        objectUrl = URL.createObjectURL(blob)
        setUrl(objectUrl)
      }
    })
    return () => {
      active = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [meta.id])

  return (
    <div className="relative rounded-xl overflow-hidden bg-base-800 border border-base-700 aspect-[3/4] group">
      {url ? <img src={url} alt={meta.note || 'Progress photo'} className="w-full h-full object-cover" /> : <div className="w-full h-full animate-pulse" />}
      <div className="absolute inset-x-0 bottom-0 bg-black/60 px-2 py-1 text-[11px] text-base-100">{formatDateShort(meta.date)}</div>
      <button
        onClick={() => onDelete(meta.id)}
        className="absolute top-1.5 right-1.5 bg-black/60 rounded-full p-1 text-base-200 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 size={13} />
      </button>
    </div>
  )
}

export default function BodyProgress() {
  const { bodyMetrics, addBodyMetric, deleteBodyMetric, photoIndex, addPhotoMeta, deletePhotoMeta, workoutHistory } = useAppData()
  const [confirmId, setConfirmId] = useState(null)
  const [selectedExercise, setSelectedExercise] = useState('barbell-squat')

  const weightData = bodyMetrics.map((m) => ({ date: formatDateShort(m.date), value: m.weightKg }))

  const strengthExerciseOptions = useMemo(() => {
    const ids = new Set()
    workoutHistory.forEach((w) => w.exercises?.forEach((e) => ids.add(e.exerciseId)))
    return EXERCISES.filter((e) => ids.has(e.id))
  }, [workoutHistory])

  const strengthData = useMemo(() => {
    return workoutHistory
      .filter((w) => w.completedAt)
      .map((session) => {
        const entry = session.exercises?.find((e) => e.exerciseId === selectedExercise)
        const best = entry?.sets?.filter((s) => s.completed && s.weight != null).sort((a, b) => b.weight - a.weight)[0]
        return best ? { date: formatDateShort(session.date), value: best.weight } : null
      })
      .filter(Boolean)
  }, [workoutHistory, selectedExercise])

  const handlePhotoUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const id = `${Date.now()}`
    await savePhotoBlob(id, file)
    addPhotoMeta({ id, date: toISODate(new Date()) })
    e.target.value = ''
  }

  const handleDeletePhoto = async (id) => {
    await deletePhotoBlob(id)
    deletePhotoMeta(id)
  }

  const sortedPhotos = [...photoIndex].sort((a, b) => a.date.localeCompare(b.date))
  const beforePhoto = sortedPhotos[0]
  const afterPhoto = sortedPhotos[sortedPhotos.length - 1]

  return (
    <PageShell title="Body Progress" subtitle="Measurements, strength trends, and progress photos">
      <div className="space-y-6">
        <MeasurementForm onSave={addBodyMetric} />

        <Card>
          <h3 className="font-semibold text-base-100 mb-3 flex items-center gap-1.5">
            <Scale size={15} className="text-accent" /> Body Weight Progress
          </h3>
          {weightData.length === 0 ? (
            <EmptyState title="No measurements yet" description="Log your first weekly measurement above to start tracking your weight trend." />
          ) : (
            <div style={{ height: 240 }}>
              <ResponsiveContainer>
                <LineChart data={weightData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#242424" vertical={false} />
                  <XAxis dataKey="date" stroke="#5c5c5c" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#5c5c5c" fontSize={11} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                  <Tooltip content={<ChartTooltip unit="kg" />} />
                  <Line type="monotone" dataKey="value" stroke="#39FF6E" strokeWidth={2} dot={{ r: 4, fill: '#39FF6E' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <h3 className="font-semibold text-base-100">Strength Progress</h3>
            {strengthExerciseOptions.length > 0 && (
              <Select value={selectedExercise} onChange={(e) => setSelectedExercise(e.target.value)} className="w-56">
                {strengthExerciseOptions.map((ex) => (
                  <option key={ex.id} value={ex.id}>
                    {ex.nameEn}
                  </option>
                ))}
              </Select>
            )}
          </div>
          {strengthData.length === 0 ? (
            <EmptyState
              title="No tracked sets yet"
              description="Complete a workout with logged weights to see strength progression here."
            />
          ) : (
            <div style={{ height: 240 }}>
              <ResponsiveContainer>
                <LineChart data={strengthData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#242424" vertical={false} />
                  <XAxis dataKey="date" stroke="#5c5c5c" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#5c5c5c" fontSize={11} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                  <Tooltip content={<ChartTooltip unit="kg" />} />
                  <Line type="monotone" dataKey="value" stroke="#39FF6E" strokeWidth={2} dot={{ r: 4, fill: '#39FF6E' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>

        <Card>
          <h3 className="font-semibold text-base-100 mb-2">Measurement History</h3>
          {bodyMetrics.length === 0 ? (
            <p className="text-sm text-base-400">No entries yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-base-400 text-xs">
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2 pr-4">Weight</th>
                    <th className="py-2 pr-4">Chest</th>
                    <th className="py-2 pr-4">Waist</th>
                    <th className="py-2 pr-4">Shoulders</th>
                    <th className="py-2 pr-4">Arm</th>
                    <th className="py-2 pr-4">Thigh</th>
                    <th className="py-2 pr-4">Calf</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {[...bodyMetrics].reverse().map((m) => (
                    <tr key={m.id} className="border-t border-base-700 text-base-200">
                      <td className="py-2 pr-4">{formatDateShort(m.date)}</td>
                      <td className="py-2 pr-4">{m.weightKg} kg</td>
                      <td className="py-2 pr-4">{m.chestCm ?? '—'}</td>
                      <td className="py-2 pr-4">{m.waistCm ?? '—'}</td>
                      <td className="py-2 pr-4">{m.shoulderCm ?? '—'}</td>
                      <td className="py-2 pr-4">{m.armCm ?? '—'}</td>
                      <td className="py-2 pr-4">{m.legCm ?? '—'}</td>
                      <td className="py-2 pr-4">{m.calfCm ?? '—'}</td>
                      <td className="py-2 text-right">
                        <button onClick={() => setConfirmId(m.id)} className="text-base-500 hover:text-danger">
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-base-100 flex items-center gap-1.5">
              <Camera size={15} className="text-accent" /> Progress Photos
            </h3>
            <label>
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
              <Button as="span" variant="secondary" size="sm" className="cursor-pointer">
                <Plus size={14} /> Upload Photo
              </Button>
            </label>
          </div>

          {sortedPhotos.length === 0 ? (
            <EmptyState title="No photos yet" description="Upload progress photos from your computer. They are stored locally in this browser." />
          ) : (
            <>
              {sortedPhotos.length >= 2 && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <div className="text-xs text-base-400 mb-1.5">Before</div>
                    <PhotoThumb meta={beforePhoto} onDelete={handleDeletePhoto} />
                  </div>
                  <div>
                    <div className="text-xs text-base-400 mb-1.5">After (latest)</div>
                    <PhotoThumb meta={afterPhoto} onDelete={handleDeletePhoto} />
                  </div>
                </div>
              )}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {sortedPhotos.map((meta) => (
                  <PhotoThumb key={meta.id} meta={meta} onDelete={handleDeletePhoto} />
                ))}
              </div>
            </>
          )}
        </Card>
      </div>

      <ConfirmDialog
        open={!!confirmId}
        onClose={() => setConfirmId(null)}
        onConfirm={() => deleteBodyMetric(confirmId)}
        title="Delete Measurement"
        description="This measurement entry will be permanently removed."
        confirmLabel="Delete"
        danger
      />
    </PageShell>
  )
}
