import styles from './App.module.css';
import Display from './component/Display.jsx';
import ButtonContainer from './component/ButtonContainer.jsx';
import { useState } from 'react';
function App() {
  let sound=new Audio('./sounds/s2.wav');
  let soundc=new Audio('./sounds/s1.wav');
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='c'){
      soundc.play();
      setCalVal("");
  }
    else if(buttonText==='='){
      sound.play();
      setCalVal(eval(calVal));
    }
        else{
          sound.play();
          setCalVal(calVal+buttonText);
        }
};
  return (
    <><center>
      <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
      </center>
    </>
  );
};

export default App;
