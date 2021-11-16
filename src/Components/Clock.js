import React, {useEffect, useState} from 'react';
import { ListGroup } from 'react-bootstrap';
import moment from 'moment'

export default function Clock() {
  const [launchTime, setLanuchTime] = useState(new moment('2021-10-25'));
  const [today, setToday] = useState(new moment());
  const [days, setDays] = useState(today.diff(launchTime, 'd'));
  const [hours, setHours] = useState(today.diff(launchTime, 'h') % 24);
  const [minutes, setMinutes] = useState(today.diff(launchTime, 'm') % 60);
  const [seconds, setSeconds] = useState(today.diff(launchTime, 's') % 60);

  useEffect(() => {
    setTimeout(() => {
      setToday(moment());
      setDays(today.diff(launchTime, 'd'));
      setHours(today.diff(launchTime, 'h') % 24);
      setMinutes(today.diff(launchTime, 'm') % 60);
      setSeconds(today.diff(launchTime, 's') % 60);
    }, 1000);
  }, [today])

  return (
    <div className="launch-board">
      <h3 className="mt-3">Lanching on December 15<span className="right-top">th</span></h3>
      <ListGroup className="clock-listgroup" horizontal>
        <ListGroup.Item className="clock-listgroupitem">
          <p className="number">{days}</p>
          <p className="unit">DAYS</p>
        </ListGroup.Item>
        <ListGroup.Item className="clock-listgroupitem">
          <p className="number">{hours}</p>
          <p className="unit">HOURS</p>
        </ListGroup.Item>
        <ListGroup.Item className="clock-listgroupitem">
          <p className="number">{minutes}</p>
          <p className="unit">MINUTES</p>
        </ListGroup.Item>
        <ListGroup.Item className="clock-listgroupitem">
          <p className="number">{seconds}</p>
          <p className="unit">SECOND</p>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}
