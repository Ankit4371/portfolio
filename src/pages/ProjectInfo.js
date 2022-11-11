import React from 'react'
import {useParams} from "react-router-dom"; 
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectInfo() {
    const {id} = useParams();
    const project = ProjectList[id];

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="Project Display"/>
        <p>
            Skills: <b>{project.skill}</b>
        </p>
        <GitHubIcon></GitHubIcon>
    </div>
  )
}

export default ProjectInfo