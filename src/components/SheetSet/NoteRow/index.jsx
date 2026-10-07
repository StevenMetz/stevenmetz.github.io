/* eslint-disable react/prop-types */
import './index.scss'
import { Link } from 'react-router-dom'
import { formatNoteDate } from '../../../Data/notes/parseNote'

export function NoteRow({ note }) {
  const { rfi, title, date, slug } = note
  return (
    <Link className="note-row" to={`/notes/${slug}`}>
      <span className="note-row-rfi">{rfi}</span>
      <span className="note-row-title">{title}</span>
      <span className="note-row-date">{formatNoteDate(date)}</span>
    </Link>
  )
}
