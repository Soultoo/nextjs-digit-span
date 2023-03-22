import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Store";
//import styles from "../styles.css";

export default function AudioStartView() {
  var msMultiplier = 0.001;
  const [state, setState] = useContext(Context);
  //console.log("testString" + state.settingNumber + state.trialNumber);
  
  var ranEffect = false;

  function finalItFunc(assignString) {
    
  }

  function enteredAudioStartView() {
    setTimeout(exitAudioStartView, 2000 * msMultiplier);
  }

  function exitAudioStartView() {
    setState({
      ...state,
      currentTestStage: "seeing",
      playingSound1: (state.settingNumber === "2" && state.trialNumber === 1) ? true : state.playingSound1,
      playingSound2: (state.settingNumber === "3" && state.trialNumber === 1) ? true : state.playingSound2,
      playingSound3: (state.settingNumber === "4" && state.trialNumber === 1) ? true : state.playingSound3,
    });
  }

  useEffect(() => {
    //currentElementIndex = 0
    if (!ranEffect) {
      ranEffect = true;
      console.log("I effect seeingView");
      console.log("SettingNumber:");
      console.log(state.settingNumber);
      console.log("TrialNumber:");
      console.log(state.trialNumber);


      //console.log("we are in effect");
      
      enteredAudioStartView();
    }
  }, []);
  return (
    <div className="audioStartView">
      
    </div>
  );
}
