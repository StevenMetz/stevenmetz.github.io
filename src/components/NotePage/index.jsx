import './index.scss'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { notes } from '../../Data/notes'
import { SheetFrame } from '../SheetSet/SheetFrame'
import { formatNoteDate } from '../../Data/notes/parseNote'

export function NotePage() {
  const { slug } = useParams()
  const note = notes.find((entry) => entry.slug === slug)

  useEffect(() => {
    const previous = document.title
    if (note) document.title = `${note.title} - Steven Metz`
    window.scrollTo(0, 0)
    return () => {
      document.title = previous
    }
  }, [note])

  return (
    <SheetFrame>
      <article className="note-page">
        <div className="note-page-meta">
          <span>A-401 · FIELD NOTES</span>
          {note && <span>{formatNoteDate(note.date)}</span>}
        </div>
        {note ? (
          <>
            <header className="note-page-header">
              <span className="note-page-rfi">{note.rfi}</span>
              <h1>{note.title}</h1>
            </header>
            <div className="note-page-body">
              <Markdown>{note.body}</Markdown>
            </div>
          </>
        ) : (
          <header className="note-page-header">
            <h1>No note here.</h1>
          </header>
        )}
        <Link to="/" className="note-page-back">
          BACK TO THE SHEET SET
        </Link>
      </article>
    </SheetFrame>
  )
}
