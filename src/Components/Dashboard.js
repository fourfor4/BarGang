import React from 'react'
import Clock from './Clock';
import BGImage from './slider';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <BGImage src = {"section.jpg"}>
        <Clock />
      </BGImage>
    </div>
  )
}
