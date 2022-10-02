import style from './TitleBar.module.css';
import profilePic from '../../Assets/profilePic.svg'

const TitleBar = () => {
  return (
    <div class={style.wrapper}>
      <div>
        <h3 class={style.greetingTitle}>
          Welcome back, Guest
        </h3>
        <p class={style.greetingText}>
          Here's what you missed...
        </p>
      </div>
      <div class={style.iconWrapper}>
        <img src={profilePic} alt="" />
      </div>
    </div>
  )
}

export default TitleBar
