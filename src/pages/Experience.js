import React from 'react';

import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistory from "@mui/icons-material/WorkHistory";


import '../styles/Experience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 "
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >

          <h3 className='vertical-timeline-element-title'> Chiranjiv Bharti School, Gurugram</h3>
          <p>CBSE Class 12th </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >

          <h3 className='vertical-timeline-element-title'> UIET Kurukshetra, Kurukshetra</h3>
          <p>Bachelors of Technology, Electronics and Communication</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 August - 2022 December"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkHistory />}
        >

          <h3 className='vertical-timeline-element-title'> Accenture</h3>
          <h4 className='vertical-timeline-element-subtitle'>Gurugram</h4>
          <p>Full Stack Engineering Analyst</p>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience