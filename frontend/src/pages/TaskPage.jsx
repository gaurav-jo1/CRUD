import React from 'react'
import { useParams,Link } from 'react-router-dom'
import {GiCrossMark} from "react-icons/gi"
import "../styling/TaskPage.scss"

const TaskPage = () => {
  let {ProfileTask} = useParams()
  return (
    <div className="TaskPage_container">
      <div className='TaskPage_goback'>
        <p> <Link to="/"><GiCrossMark /></Link> </p>
      </div>
      <div className="TaskPage_detail-container">
        <div className="TaskPage_title-container">
          <h1>Title</h1>
          <input type="text" value={`This is ${ProfileTask}`} />
        </div>
        <div className="TaskPage_desc-container">
          <h2>Descripition</h2>
          <textarea cols="30" rows="5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, temporibus?</textarea>
        </div>
        <div className="Taskpage_action-buttons">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TaskPage