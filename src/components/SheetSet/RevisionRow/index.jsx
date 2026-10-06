/* eslint-disable react/prop-types */
import './index.scss'
import { RevTriangle } from '../RevTriangle'

export function RevisionRow({ revision }) {
  const { rev, date, title, description, current, dashed } = revision
  return (
    <li className={`revision-row${current ? ' current' : ''}`}>
      <RevTriangle dashed={dashed} current={current}>
        {rev}
      </RevTriangle>
      <span className="revision-row-date">{date}</span>
      <div className="revision-row-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}
