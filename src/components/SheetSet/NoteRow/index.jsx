/* eslint-disable react/prop-types */
import './index.scss'

export function NoteRow({ note }) {
  const { rfi, title, date, href } = note
  return (
    <a className="note-row" href={href}>
      <span className="note-row-rfi">{rfi}</span>
      <span className="note-row-title">{title}</span>
      <span className="note-row-date">{date}</span>
    </a>
  )
}
