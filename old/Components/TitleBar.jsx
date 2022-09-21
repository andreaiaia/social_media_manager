import React from 'react';
import style from './TitleBar.module.css';
import profilePic from '../Assets/profilePic.svg'

const TitleBar = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <h3 className={style.greetingTitle}>
          Welcome back, Guest
        </h3>
        <p className={style.greetingText}>
          Here's what you missed...
        </p>
      </div>
      <div className={style.iconWrapper}>
        <img src={profilePic} alt="" />
      </div>
    </div>
  )
}

export default TitleBar
