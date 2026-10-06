/* eslint-disable react/prop-types */
import './index.scss'

export function SectionHeader({ number, sheet, title, subtitle, label }) {
  return (
    <div className="section-header">
      <div className="section-header-bubble" aria-hidden="true">
        <span className="section-header-number">{number}</span>
        <span className="section-header-rule" />
        <span className="section-header-sheet">{sheet}</span>
      </div>
      <div className="section-header-text">
        <h2>{title}</h2>
        <div
          className={`section-header-sub${subtitle ? '' : ' label-only'}`}
        >
          {subtitle && (
            <span className="section-header-subtitle">{subtitle}</span>
          )}
          {label && <span className="section-header-label">{label}</span>}
        </div>
      </div>
    </div>
  )
}
