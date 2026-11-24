import { loadJSON, saveJSON, STORAGE_KEYS } from './storage'
import { getAllPhotoIds, getPhotoBlob, savePhotoBlob } from './db'

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

async function base64ToBlob(dataUrl) {
  const res = await fetch(dataUrl)
  return res.blob()
}

export async function exportBackup() {
  const data = {}
  Object.values(STORAGE_KEYS).forEach((key) => {
    data[key] = loadJSON(key, null)
  })

  const photoIds = await getAllPhotoIds()
  const photos = {}
  for (const id of photoIds) {
    const blob = await getPhotoBlob(id)
    if (blob) photos[id] = await blobToBase64(blob)
  }

  const backup = {
    app: 'athlete-os',
    version: 1,
    exportedAt: new Date().toISOString(),
    data,
    photos,
  }

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `athlete-os-backup-${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export async function importBackup(file) {
  const text = await file.text()
  const backup = JSON.parse(text)
  if (backup.app !== 'athlete-os' || !backup.data) {
    throw new Error('This file is not a valid Athlete OS backup.')
  }

  Object.entries(backup.data).forEach(([key, value]) => {
    if (value !== null && value !== undefined) saveJSON(key, value)
  })

  if (backup.photos) {
    for (const [id, dataUrl] of Object.entries(backup.photos)) {
      const blob = await base64ToBlob(dataUrl)
      await savePhotoBlob(id, blob)
    }
  }

  return true
}
