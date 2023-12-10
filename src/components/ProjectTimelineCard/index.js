// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    duration,
    projectTitle,
    description,
    projectUrl,
  } = projectDetails
  return (
    <div className="projectTimelineCardContainer">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="projectTitleAndDurationContainer">
        <h1 className="projectTitle">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="projectDescription">{description}</p>
      <a className="visitLink" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
