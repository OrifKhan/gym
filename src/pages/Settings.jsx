import { useRef, useState } from 'react'
import { Download, Upload, Trash2, Save, Calculator } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Input, Select } from '../components/ui/Input'
import Toggle from '../components/ui/Toggle'
import ConfirmDialog from '../components/ui/ConfirmDialog'
import Badge from '../components/ui/Badge'
import { useAppData } from '../context/AppDataProvider'
import { GOALS, ACTIVITY_LEVELS } from '../data/constants'
import { exportBackup, importBackup } from '../lib/exportImport'
import { calculateNutritionTargets } from '../lib/nutritionEngine'
import SafetyGuide from '../components/SafetyGuide'

export default function Settings() {
  const { profile, updateProfile, nutritionTargets, setNutritionTargets, settings, setSettings, resetAllData } = useAppData()
  const [draft, setDraft] = useState(profile)
  const [confirmReset, setConfirmReset] = useState(false)
  const [importMsg, setImportMsg] = useState('')
  const [recalcMsg, setRecalcMsg] = useState('')
  const fileInputRef = useRef(null)

  const toggleListItem = (key, value) => {
    setDraft((d) => {
      const list = d[key] || []
      return { ...d, [key]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value] }
    })
  }

  const normalizedProfile = () => ({
    ...draft,
    heightCm: parseFloat(draft.heightCm) || 0,
    weightKg: parseFloat(draft.weightKg) || 0,
    targetWeightKg: parseFloat(draft.targetWeightKg) || 0,
    frequency: parseInt(draft.frequency, 10) || 4,
    age: parseInt(draft.age, 10) || 0,
    dailySteps: parseInt(draft.dailySteps, 10) || 0,
  })

  const save = () => {
    updateProfile(normalizedProfile())
  }

  const recalcNutrition = () => {
    const updated = normalizedProfile()
    updateProfile(updated)
    const targets = calculateNutritionTargets(updated)
    setNutritionTargets(targets)
    setRecalcMsg(
      `Updated: ${targets.calories} kcal/day (maintenance ≈ ${targets.estimatedMaintenance} kcal), ${targets.proteinG}g protein, ${targets.carbsG}g carbs, ${targets.fatG}g fat.`,
    )
  }

  const handleImport = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      await importBackup(file)
      setImportMsg('Backup restored successfully. Reloading...')
      setTimeout(() => window.location.reload(), 1200)
    } catch (err) {
      setImportMsg(`Import failed: ${err.message}`)
    }
    e.target.value = ''
  }

  return (
    <PageShell title="Settings" subtitle="Manage your profile, preferences, and data">
      <div className="space-y-6 max-w-3xl">
        <Card>
          <h3 className="font-semibold text-base-100 mb-4">Profile</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            <Input label="Name" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            <Input label="Height (cm)" type="number" value={draft.heightCm} onChange={(e) => setDraft({ ...draft, heightCm: e.target.value })} />
            <Input label="Weight (kg)" type="number" value={draft.weightKg} onChange={(e) => setDraft({ ...draft, weightKg: e.target.value })} />
            <Input label="Target Weight (kg)" type="number" value={draft.targetWeightKg} onChange={(e) => setDraft({ ...draft, targetWeightKg: e.target.value })} />
            <Select label="Experience" value={draft.experience} onChange={(e) => setDraft({ ...draft, experience: e.target.value })}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Select>
            <Input
              label="Training Days / Week"
              type="number"
              min={1}
              max={7}
              value={draft.frequency}
              onChange={(e) => setDraft({ ...draft, frequency: e.target.value })}
            />
          </div>

          <div className="text-xs font-medium text-base-300 mb-2">Nutrition Profile (used to estimate your calorie/macro targets)</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <Input label="Age" type="number" value={draft.age} onChange={(e) => setDraft({ ...draft, age: e.target.value })} />
            <Select label="Sex" value={draft.sex} onChange={(e) => setDraft({ ...draft, sex: e.target.value })}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            <Select
              label="Activity Level"
              value={draft.activityLevel}
              onChange={(e) => setDraft({ ...draft, activityLevel: e.target.value })}
              className="col-span-2 sm:col-span-1"
            >
              {ACTIVITY_LEVELS.map((a) => (
                <option key={a.key} value={a.key}>
                  {a.label}
                </option>
              ))}
            </Select>
            <Input
              label="Daily Steps (approx.)"
              type="number"
              value={draft.dailySteps}
              onChange={(e) => setDraft({ ...draft, dailySteps: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <div className="text-xs font-medium text-base-300 mb-2">Goals</div>
            <div className="flex flex-wrap gap-2">
              {GOALS.map((g) => (
                <button key={g} onClick={() => toggleListItem('goals', g)}>
                  <Badge color={draft.goals.includes(g) ? 'accent' : 'default'}>{g}</Badge>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="text-xs font-medium text-base-300 mb-2">Available Equipment</div>
            <div className="flex flex-wrap gap-2">
              {['Fully equipped gym', 'MMA training area', 'Free weights', 'Weight machines', 'Kettlebells', 'Battle ropes', 'Boxing bags', 'Functional training equipment'].map(
                (eq) => (
                  <button key={eq} onClick={() => toggleListItem('equipment', eq)}>
                    <Badge color={draft.equipment.includes(eq) ? 'accent' : 'default'}>{eq}</Badge>
                  </button>
                ),
              )}
            </div>
          </div>

          <Button onClick={save}>
            <Save size={16} /> Save Profile
          </Button>
        </Card>

        <Card>
          <h3 className="font-semibold text-base-100 mb-2 flex items-center gap-1.5">
            <Calculator size={16} className="text-accent" /> Nutrition Calculation
          </h3>
          <p className="text-sm text-base-400 mb-3">
            Current targets: <span className="text-base-100 font-medium">{nutritionTargets.calories} kcal</span>,{' '}
            {nutritionTargets.proteinG}g protein, {nutritionTargets.carbsG}g carbs, {nutritionTargets.fatG}g fat
            {nutritionTargets.estimatedMaintenance ? ` (estimated maintenance ≈ ${nutritionTargets.estimatedMaintenance} kcal)` : ''}.
          </p>
          <p className="text-xs text-base-500 mb-3">
            Recalculating uses the Mifflin-St Jeor formula from your age/sex/weight/height/activity level above, plus an estimate for
            your 4 weekly training sessions, then adds a conservative +250 kcal lean-gain surplus. This overwrites your current targets
            with the new estimate — edit them manually afterward if you want something different.
          </p>
          <Button variant="secondary" onClick={recalcNutrition}>
            <Calculator size={16} /> Recalculate From Profile
          </Button>
          {recalcMsg && <p className="text-sm text-accent mt-3">{recalcMsg}</p>}
        </Card>

        <Card>
          <h3 className="font-semibold text-base-100 mb-4">Preferences</h3>
          <div className="space-y-3">
            <Toggle
              label="Sound effects (timers & alerts)"
              checked={settings.soundEnabled !== false}
              onChange={(v) => setSettings({ ...settings, soundEnabled: v })}
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-base-100 mb-2">Backup & Restore</h3>
          <p className="text-sm text-base-400 mb-4">
            Export all your data (profile, workouts, nutrition, measurements, photos) to a JSON file, or restore from a previous backup.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="secondary" onClick={() => exportBackup()}>
              <Download size={16} /> Export Backup
            </Button>
            <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>
              <Upload size={16} /> Import Backup
            </Button>
            <input ref={fileInputRef} type="file" accept="application/json" className="hidden" onChange={handleImport} />
          </div>
          {importMsg && <p className="text-sm text-base-300 mt-3">{importMsg}</p>}
        </Card>

        <Card>
          <h3 className="font-semibold text-base-100 mb-2">About Exercise Media</h3>
          <p className="text-sm text-base-400">
            60 of the 89 exercises in the library include a real demonstration GIF sourced from the free, open{' '}
            <a href="https://oss.exercisedb.dev" target="_blank" rel="noreferrer" className="text-accent hover:underline">
              ExerciseDB (oss.exercisedb.dev)
            </a>{' '}
            dataset. Exercises without a confident real-world match — mainly MMA, boxing, and wrestling techniques — use an original
            pose-diagram illustration instead, clearly labeled as such.
          </p>
        </Card>

        <SafetyGuide />

        <Card className="border-danger/30">
          <h3 className="font-semibold text-base-100 mb-2">Danger Zone</h3>
          <p className="text-sm text-base-400 mb-4">Permanently erase all local data and reset the app to defaults. This cannot be undone.</p>
          <Button variant="danger" onClick={() => setConfirmReset(true)}>
            <Trash2 size={16} /> Reset All Data
          </Button>
        </Card>
      </div>

      <ConfirmDialog
        open={confirmReset}
        onClose={() => setConfirmReset(false)}
        onConfirm={resetAllData}
        title="Reset All Data"
        description="This will permanently delete your profile, workout history, nutrition logs, and measurements from this browser."
        confirmLabel="Reset Everything"
        danger
      />
    </PageShell>
  )
}
