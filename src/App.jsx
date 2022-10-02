import { Router } from 'solid-app-router';

import style from './App.module.css';
import TitleBar from './Components/TitleBar/TitleBar';
import NavBar from './Components/NavBar/NavBar'

const App = () => {
  return (
    <div class={style.app}>
      <header class={style.header}>
        <TitleBar />
      </header>

      <NavBar />
    </div>
  );
}

export default App;
