import React, { useContext,useEffect, useState } from "react";
import { Context } from "../Store";
import { stringRegen } from "../numberGenerator";
import SeeingView from "./seeingView";
import InputtingView from "./inputtingView";
import AudioStartView from "./audioStartView";
//import styles from "../styles.css";

export default function TestView() {
  const styles = {
    boxes:{
      margin:'auto'
    }
  }
  //var generatedString = "";
  
  const [state, setState] = useContext(Context);
  useEffect(()=>{

  }, []);
  return (
    <div style={styles.boxes} className="testView">
      {state.currentTestStage === "startingAudio" ? <AudioStartView /> : "" }
      {state.currentTestStage === "seeing" ? <SeeingView /> : "" }
      {state.currentTestStage === "inputting" ? <InputtingView /> : "" }
    </div>
  )
}

