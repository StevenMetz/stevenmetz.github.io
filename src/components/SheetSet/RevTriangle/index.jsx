/* eslint-disable react/prop-types */
import './index.scss'

export function RevTriangle({ children, dashed = false, current = false }) {
  return (
    <span className={`rev-triangle${current ? ' current' : ''}`}>
      <svg
        width="40"
        height="36"
        viewBox="0 0 40 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray={dashed ? '3 3' : undefined}
        aria-hidden="true"
      >
        <path d="M20 2 L38 34 L2 34 Z" />
      </svg>
      <span className="rev-triangle-label">{children}</span>
    </span>
  )
}
