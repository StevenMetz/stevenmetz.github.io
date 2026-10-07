// Turns a raw markdown file into a note. The file starts with a small header:
//
//   ---
//   title: Why two Shopify apps fight over the same cart
//   date: 2026-10-06
//   ---
//
// Add "draft: true" to keep a note off the site while you work on it.
export function parseNote(path, raw) {
  const slug = path.split('/').pop().replace(/\.md$/, '')
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  const meta = {}
  if (match) {
    match[1].split(/\r?\n/).forEach((line) => {
      const colon = line.indexOf(':')
      if (colon > 0) {
        meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
      }
    })
  }
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || '',
    draft: meta.draft === 'true',
    body: (match ? match[2] : raw).trim(),
  }
}

// Newest first. RFI numbers follow publish order, so the oldest is RFI-001.
export function sortNotes(notes) {
  const published = notes
    .filter((note) => !note.draft)
    .sort(
      (a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug)
    )
  return published
    .map((note, i) => ({
      ...note,
      rfi: `RFI-${String(i + 1).padStart(3, '0')}`,
    }))
    .reverse()
}

export function formatNoteDate(date) {
  return date.replace(/-/g, '.')
}
