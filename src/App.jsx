import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if (buttonText==='c'){
      setCalVal("");
    }else if(buttonText==='='){
      const result=eval(calVal);
      setCalVal(result);

    }else{
      const newDisplayValue=calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return (
    <div class={styles.calculator}>
    <Display displayValue={calVal}></Display>
    <ButtonContainer 
    onButtonClick={onButtonClick}/>
    </div>
    
  )
  
  
}
export default App
