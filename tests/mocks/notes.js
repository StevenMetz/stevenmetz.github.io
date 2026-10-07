import { parseNote, sortNotes } from '../../src/Data/notes/parseNote'

export const notes = sortNotes([
  parseNote(
    './first-note.md',
    '---\ntitle: First note\ndate: 2026-01-05\n---\nBody of the first note.'
  ),
  parseNote(
    './second-note.md',
    '---\ntitle: Second note\ndate: 2026-02-10\n---\nBody of the second note.'
  ),
  parseNote(
    './unfinished.md',
    '---\ntitle: Unfinished note\ndate: 2026-03-01\ndraft: true\n---\nNot ready.'
  ),
])
