import { useMemo, useState } from 'react'
import { Plus, Trash2, Droplet, Pill, Settings2 } from 'lucide-react'
import PageShell from '../components/layout/PageShell'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import ProgressBar from '../components/ui/ProgressBar'
import Modal from '../components/ui/Modal'
import { Input, Select } from '../components/ui/Input'
import { useAppData } from '../context/AppDataProvider'
import { MEAL_SLOTS, FOOD_LIBRARY, SAMPLE_MEAL_PLAN } from '../data/nutrition'
import { toISODate, formatDateLong } from '../lib/dateUtils'

const EMPTY_DAY = { meals: {}, waterMl: 0, creatineG: 0 }

function sumMacros(day) {
  const totals = { calories: 0, proteinG: 0, carbsG: 0, fatG: 0 }
  MEAL_SLOTS.forEach(({ key }) => {
    (day.meals?.[key] || []).forEach((item) => {
      totals.calories += item.calories || 0
      totals.proteinG += item.proteinG || 0
      totals.carbsG += item.carbsG || 0
      totals.fatG += item.fatG || 0
    })
  })
  return totals
}

function AddFoodForm({ onAdd, onClose }) {
  const [mode, setMode] = useState('quick')
  const [selected, setSelected] = useState(FOOD_LIBRARY[0].name)
  const [custom, setCustom] = useState({ name: '', calories: '', proteinG: '', carbsG: '', fatG: '' })

  const submit = () => {
    if (mode === 'quick') {
      const food = FOOD_LIBRARY.find((f) => f.name === selected)
      onAdd(food)
    } else {
      if (!custom.name.trim()) return
      onAdd({
        name: custom.name,
        calories: parseFloat(custom.calories) || 0,
        proteinG: parseFloat(custom.proteinG) || 0,
        carbsG: parseFloat(custom.carbsG) || 0,
        fatG: parseFloat(custom.fatG) || 0,
      })
    }
    onClose()
  }

  return (
    <div className="bg-base-800 rounded-xl p-3 mt-2 space-y-2.5">
      <div className="flex gap-2">
        <Button size="sm" variant={mode === 'quick' ? 'primary' : 'secondary'} onClick={() => setMode('quick')}>
          Quick Add
        </Button>
        <Button size="sm" variant={mode === 'custom' ? 'primary' : 'secondary'} onClick={() => setMode('custom')}>
          Custom
        </Button>
      </div>
      {mode === 'quick' ? (
        <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {FOOD_LIBRARY.map((f) => (
            <option key={f.name} value={f.name}>
              {f.name} — {f.calories} kcal
            </option>
          ))}
        </Select>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="Food name" value={custom.name} onChange={(e) => setCustom({ ...custom, name: e.target.value })} className="col-span-2" />
          <Input placeholder="Calories" type="number" value={custom.calories} onChange={(e) => setCustom({ ...custom, calories: e.target.value })} />
          <Input placeholder="Protein g" type="number" value={custom.proteinG} onChange={(e) => setCustom({ ...custom, proteinG: e.target.value })} />
          <Input placeholder="Carbs g" type="number" value={custom.carbsG} onChange={(e) => setCustom({ ...custom, carbsG: e.target.value })} />
          <Input placeholder="Fat g" type="number" value={custom.fatG} onChange={(e) => setCustom({ ...custom, fatG: e.target.value })} />
        </div>
      )}
      <div className="flex justify-end gap-2">
        <Button size="sm" variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button size="sm" onClick={submit}>
          Add
        </Button>
      </div>
    </div>
  )
}

export default function Nutrition() {
  const { nutritionLog, upsertNutritionDay, nutritionTargets, setNutritionTargets } = useAppData()
  const [date] = useState(toISODate(new Date()))
  const [openSlot, setOpenSlot] = useState(null)
  const [editingTargets, setEditingTargets] = useState(false)
  const [targetDraft, setTargetDraft] = useState(nutritionTargets)

  const day = nutritionLog[date] || EMPTY_DAY
  const totals = useMemo(() => sumMacros(day), [day])

  const addFood = (slotKey, food) => {
    const meals = { ...(day.meals || {}) }
    meals[slotKey] = [...(meals[slotKey] || []), food]
    upsertNutritionDay(date, { meals })
  }

  const removeFood = (slotKey, idx) => {
    const meals = { ...(day.meals || {}) }
    meals[slotKey] = meals[slotKey].filter((_, i) => i !== idx)
    upsertNutritionDay(date, { meals })
  }

  const addWater = (ml) => upsertNutritionDay(date, { waterMl: Math.max(0, (day.waterMl || 0) + ml) })
  const addCreatine = (g) => upsertNutritionDay(date, { creatineG: Math.max(0, (day.creatineG || 0) + g) })

  const saveTargets = () => {
    setNutritionTargets({
      calories: parseFloat(targetDraft.calories) || 0,
      proteinG: parseFloat(targetDraft.proteinG) || 0,
      carbsG: parseFloat(targetDraft.carbsG) || 0,
      fatG: parseFloat(targetDraft.fatG) || 0,
      waterMl: parseFloat(targetDraft.waterMl) || 0,
      creatineG: parseFloat(targetDraft.creatineG) || 0,
    })
    setEditingTargets(false)
  }

  return (
    <PageShell
      title="Nutrition"
      subtitle={formatDateLong(date)}
      actions={
        <Button
          variant="secondary"
          onClick={() => {
            setTargetDraft(nutritionTargets)
            setEditingTargets(true)
          }}
        >
          <Settings2 size={16} /> Edit Targets
        </Button>
      }
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <Card>
          <div className="text-xs text-base-400 mb-1">Calories</div>
          <div className="text-xl font-bold text-base-100">{Math.round(totals.calories)}</div>
          <ProgressBar value={totals.calories} max={nutritionTargets.calories} className="mt-2" />
          <div className="text-[11px] text-base-500 mt-1">of {nutritionTargets.calories} kcal</div>
        </Card>
        <Card>
          <div className="text-xs text-base-400 mb-1">Protein</div>
          <div className="text-xl font-bold text-accent">{Math.round(totals.proteinG)}g</div>
          <ProgressBar value={totals.proteinG} max={nutritionTargets.proteinG} className="mt-2" />
          <div className="text-[11px] text-base-500 mt-1">of {nutritionTargets.proteinG}g</div>
        </Card>
        <Card>
          <div className="text-xs text-base-400 mb-1">Carbs</div>
          <div className="text-xl font-bold text-base-100">{Math.round(totals.carbsG)}g</div>
          <ProgressBar value={totals.carbsG} max={nutritionTargets.carbsG} className="mt-2" />
          <div className="text-[11px] text-base-500 mt-1">of {nutritionTargets.carbsG}g</div>
        </Card>
        <Card>
          <div className="text-xs text-base-400 mb-1">Fat</div>
          <div className="text-xl font-bold text-base-100">{Math.round(totals.fatG)}g</div>
          <ProgressBar value={totals.fatG} max={nutritionTargets.fatG} className="mt-2" />
          <div className="text-[11px] text-base-500 mt-1">of {nutritionTargets.fatG}g</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Card>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-base-100 flex items-center gap-1.5">
              <Droplet size={15} className="text-accent" /> Water Intake
            </h3>
            <span className="text-sm text-base-300">
              {day.waterMl || 0} / {nutritionTargets.waterMl} ml
            </span>
          </div>
          <ProgressBar value={day.waterMl || 0} max={nutritionTargets.waterMl} />
          <div className="flex gap-2 mt-3">
            <Button size="sm" variant="secondary" onClick={() => addWater(250)}>
              +250ml
            </Button>
            <Button size="sm" variant="secondary" onClick={() => addWater(500)}>
              +500ml
            </Button>
            <Button size="sm" variant="ghost" onClick={() => addWater(-250)}>
              -250ml
            </Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-base-100 flex items-center gap-1.5">
              <Pill size={15} className="text-accent" /> Creatine
            </h3>
            <span className="text-sm text-base-300">
              {day.creatineG || 0} / {nutritionTargets.creatineG} g
            </span>
          </div>
          <ProgressBar value={day.creatineG || 0} max={nutritionTargets.creatineG} />
          <div className="flex gap-2 mt-3">
            <Button size="sm" variant="secondary" onClick={() => addCreatine(1)}>
              +1g
            </Button>
            <Button size="sm" variant="secondary" onClick={() => addCreatine(5)}>
              +5g
            </Button>
            <Button size="sm" variant="ghost" onClick={() => addCreatine(-1)}>
              -1g
            </Button>
          </div>
        </Card>
      </div>

      <h2 className="text-lg font-bold text-base-100 mb-3">Today's Meal Log</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {MEAL_SLOTS.map(({ key, label }) => {
          const items = day.meals?.[key] || []
          return (
            <Card key={key}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-base-100">{label}</h3>
                <Button size="sm" variant="ghost" onClick={() => setOpenSlot(openSlot === key ? null : key)}>
                  <Plus size={14} /> Add
                </Button>
              </div>
              {items.length === 0 ? (
                <p className="text-xs text-base-500">No items logged yet.</p>
              ) : (
                <ul className="space-y-1.5">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-sm text-base-300">
                      <span>
                        {item.name} <span className="text-base-500 text-xs">({item.calories} kcal)</span>
                      </span>
                      <button onClick={() => removeFood(key, i)} className="text-base-500 hover:text-danger">
                        <Trash2 size={13} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {openSlot === key && <AddFoodForm onAdd={(food) => addFood(key, food)} onClose={() => setOpenSlot(null)} />}
            </Card>
          )
        })}
      </div>

      <h2 className="text-lg font-bold text-base-100 mb-3">Sample Muscle-Building Meal Plan</h2>
      <p className="text-sm text-base-400 mb-4">A reference day you can follow or adapt — logged meals above are tracked separately.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MEAL_SLOTS.map(({ key, label }) => {
          const plan = SAMPLE_MEAL_PLAN[key]
          return (
            <Card key={key}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-base-100">{label}</h3>
                <Badge color="accent">{plan.macros.calories} kcal</Badge>
              </div>
              <ul className="text-sm text-base-300 space-y-1 mb-3">
                {plan.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <div className="text-xs text-base-400">
                P {plan.macros.proteinG}g · C {plan.macros.carbsG}g · F {plan.macros.fatG}g
              </div>
            </Card>
          )
        })}
      </div>

      <Modal open={editingTargets} onClose={() => setEditingTargets(false)} title="Edit Nutrition Targets">
        <div className="grid grid-cols-2 gap-3">
          <Input label="Calories (kcal)" type="number" value={targetDraft.calories} onChange={(e) => setTargetDraft({ ...targetDraft, calories: e.target.value })} />
          <Input label="Protein (g)" type="number" value={targetDraft.proteinG} onChange={(e) => setTargetDraft({ ...targetDraft, proteinG: e.target.value })} />
          <Input label="Carbs (g)" type="number" value={targetDraft.carbsG} onChange={(e) => setTargetDraft({ ...targetDraft, carbsG: e.target.value })} />
          <Input label="Fat (g)" type="number" value={targetDraft.fatG} onChange={(e) => setTargetDraft({ ...targetDraft, fatG: e.target.value })} />
          <Input label="Water (ml)" type="number" value={targetDraft.waterMl} onChange={(e) => setTargetDraft({ ...targetDraft, waterMl: e.target.value })} />
          <Input label="Creatine (g)" type="number" value={targetDraft.creatineG} onChange={(e) => setTargetDraft({ ...targetDraft, creatineG: e.target.value })} />
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <Button variant="ghost" onClick={() => setEditingTargets(false)}>
            Cancel
          </Button>
          <Button onClick={saveTargets}>Save Targets</Button>
        </div>
      </Modal>
    </PageShell>
  )
}
