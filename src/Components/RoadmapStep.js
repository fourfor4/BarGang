import React, {useState} from 'react'
import StrokeProgressRing from './StrokeProgressRing'

export default function RoadmapStep(props) {
  const [progress, setProgress] = useState(props.progress);
  const [percent, setPercent] = useState(props.percent);
  const [title, setTitle] = useState(props.title);
  const [detail, setDetail] = useState(props.detail);

  return (
    <div className="mt-1 mb-2 d-flex align-items-center justify-content-left">
      <StrokeProgressRing radius={100} stroke={10} progress={progress} text={percent}/>
      <div className = "roadmap-text">
        <h4 className="text-white">{title}</h4>
        <span className="left-align-divider"></span>
        <p className="text-white" dangerouslySetInnerHTML={{__html: detail}}></p>
      </div>
    </div>
  )
}
