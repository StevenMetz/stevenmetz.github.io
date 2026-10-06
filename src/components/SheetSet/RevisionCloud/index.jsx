/* eslint-disable react/prop-types */
import './index.scss'

const CLOUD_PATH =
  'M8 8 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a7 7 0 0 1 0 14 a7 7 0 0 1 0 14 a8 8 0 0 1 -16 0 a8 8 0 0 1 -16 0 a8 8 0 0 1 -16 0 a8 8 0 0 1 -16 0 a8 8 0 0 1 -16 0 a8 8 0 0 1 -16 0 a8 8 0 0 1 -16 0 a8 8 0 0 1 -16 0 a8 8 0 0 1 -16 0 a7 7 0 0 1 0 -14 a7 7 0 0 1 0 -14 Z'

export function RevisionCloud({ children }) {
  return (
    <span className="revision-cloud">
      <svg
        width="160"
        height="44"
        viewBox="0 0 160 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d={CLOUD_PATH} />
      </svg>
      <span className="revision-cloud-label">{children}</span>
    </span>
  )
}
