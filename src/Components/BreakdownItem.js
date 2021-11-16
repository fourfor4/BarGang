import React, { useState} from 'react'

export default function BreakdownItem(props) {
  const [title, setTitle] = useState(props.title);
  const [detail, setDetail] = useState(props.detail);
  const [cls, setCls] = useState(props.cls);
  return (
    <div className="item">
      <img src="breakdownback1.png" style={{width: '100%'}} />
      <span className={"breakdown-title " + cls}>
        {title}
      </span>
      <span className="breakdown-detail">
        {detail}
      </span>
    </div>
  )
}
