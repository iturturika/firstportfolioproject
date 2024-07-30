import React from 'react';
import './Course.scss';
import courseImg from '../../images/img.jpg';
import timerIcon from '../../images/timer.svg';

export function Course({ isDark }) {
  return (
    <div className="course">
      <div className="course-img-wrap">
        <img src={courseImg} alt="courseImg" />
        <span className="course-img-topic">Development</span>
      </div>
      <h4 style={isDark ? { color: '#fff' } : {}}>Frontend Development with JavaScript</h4>
      <p style={isDark ? { color: '#fff' } : {}}>By Cristian Muñoz</p>
      <span className="course-duration">
        <img src={timerIcon} alt="timerIcon" width={'20px'} />
        <p style={isDark ? { color: '#fff' } : {}}>Duration: 7 weeks</p>
      </span>
      <p style={isDark ? { color: '#fff' } : {}}>$80.00 USD 80% discount</p>
      <button className="course-button"> Buy now $14.00 USD</button>
    </div>
  );
}
