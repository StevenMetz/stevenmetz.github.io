import { parseNote, sortNotes } from './parseNote'

// Every .md file in this folder is a Field Note. The file name is its URL:
// app-conflict.md is served at /notes/app-conflict.
const files = import.meta.glob('./*.md', { as: 'raw', eager: true })

export const notes = sortNotes(
  Object.entries(files).map(([path, raw]) => parseNote(path, raw))
)
