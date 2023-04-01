import React, {useState} from 'react';
import style from './App.module.css';
import NavBar, {PropsType} from "./Component/NavBar/NavBar";
import HomePage from "./Component/HomePage/HomePage";


function App(): JSX.Element {
  const [isActive, setActive] = useState<boolean>(true);
  function btnMenuActive(){
      setActive(!isActive)
  }
  return (
    <div className={style.wrapper}>
        <NavBar isActive={isActive} btnMenuActive={btnMenuActive}/>
        <div className={isActive? style.allPage : style.allPageActive}>
        <HomePage/>
        </div>
    </div>
  );
};

export default App;
