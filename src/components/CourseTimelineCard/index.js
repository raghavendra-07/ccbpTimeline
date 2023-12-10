// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div className="courseTimelineCardContainer">
      <div className="courseTitleAndDurationContainer">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <div className="description-con">
        <p className="description">{description}</p>
      </div>
      <div className="each-tag-list-con">
        {tagsList.map(eachTag => (
          <li className="each-tag-container" key={eachTag.id}>
            <p className="each-tag">{eachTag.name}</p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
