/* eslint-disable react/prop-types */
import './index.scss'

export function DimensionLine({ label, segments }) {
  const last = segments.length - 1
  return (
    <div className="dimension-line" role="img" aria-label={label}>
      {segments.map((segment, i) => (
        <div
          key={segment.label}
          className={`dimension-line-segment${segment.accent ? ' accent' : ''}`}
          style={{ flex: `${segment.ratio} 1 0` }}
        >
          <div className="dimension-line-marks">
            <span className="tick" />
            {i === 0 && <span className="slash start" />}
            <span className="rule" />
            <span className="slash end" />
            {i === last && <span className="tick end" />}
          </div>
          <span className="dimension-line-label">{segment.label}</span>
        </div>
      ))}
    </div>
  )
}
