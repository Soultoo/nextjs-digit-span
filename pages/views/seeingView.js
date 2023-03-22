import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Store";
import { stringRegen } from "../numberGenerator";
//import styles from "../styles.css";

export default function SeeingView() {
  var msMultiplier = 0.001;
  const [state, setState] = useContext(Context);
  const [currentNumber, setCurrentNumber] = useState("");
  const [currentMessage, setCurrentMessage] = useState(" ");
  //console.log("testString" + state.settingNumber + state.trialNumber);
  var generatedString =
    state.oldStringRegenMode === true
      ? stringRegen(state.stringLength)
      : state["testString" + state.settingNumber + state.trialNumber];
  var currentElementIndex = 0;
  var ranEffect = false;

  function finalItFunc(assignString) {
    setState({
      ...state,
      generatedString: assignString,
      currentTestStage: "inputting",
    });
  }

  function prepareMessage() {
    setCurrentMessage(state.settingNumber === 0 ? "X" : "X");
    setCurrentNumber(" ");
    setTimeout(preFirstStimulus, 2000 * msMultiplier);
  }

  function preFirstStimulus() {
    setCurrentMessage(" ");
    setTimeout(iterator, 250 * msMultiplier);
  }

  function iterator() {
    console.log("in iterator");
    setCurrentNumber(" ");
    setTimeout(betweenStimuli, 500 * msMultiplier);
  }

  function betweenStimuli() {
    console.log("no stimuli");
    if (currentElementIndex < generatedString.length) {
      setCurrentNumber(generatedString[currentElementIndex]);
      currentElementIndex += 1;
      setTimeout(iterator, 500 * msMultiplier);
    } else {
      //console.log(finalItFunc);
      finalItFunc(generatedString);
    }
  }

  useEffect(() => {
    //currentElementIndex = 0
    if (!ranEffect) {
      ranEffect = true;
      //console.log("we are in effect");

      prepareMessage();
    }
  }, []);
  return (
    <div className="seeingView">
      <div className="prepareMessage">{currentMessage}</div>
      <p className="currentNumber">{currentNumber}</p>
    </div>
  );
}
