/* eslint-disable react/prop-types */
import './index.scss'
import { RevisionCloud } from '../RevisionCloud'

function Tags({ tags }) {
  return (
    <div className="project-card-tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  )
}

export function ProjectCard({ project, detail }) {
  const { kind, title, description, tags, callout, inProgress, featured } =
    project
  const meta = (
    <div className="project-card-meta">
      <span className="project-card-detail">
        {`DETAIL ${detail} · ${kind}`}
      </span>
      {inProgress && <RevisionCloud>IN PROGRESS</RevisionCloud>}
    </div>
  )

  if (featured) {
    return (
      <article className="project-card featured">
        <div className="project-card-hatch" aria-hidden="true" />
        <div className="project-card-body">
          <div className="project-card-main">
            {meta}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          {tags && <Tags tags={tags} />}
        </div>
      </article>
    )
  }

  return (
    <article className="project-card">
      {meta}
      <h3>{title}</h3>
      <p>{description}</p>
      {callout && (
        <div className="project-card-callout">
          <span className="project-card-callout-rule" />
          <span>{callout}</span>
        </div>
      )}
      {tags && <Tags tags={tags} />}
    </article>
  )
}
