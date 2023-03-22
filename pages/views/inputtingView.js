import React, { useContext, useEffect, useState, useRef } from "react";
import Store, { Context } from "../Store";
import NumPad from "../numPad";
//import styles from "../styles.css";

export default function InputtingView() {
  var ranEffect = false;
  //var generatedString = "";

  const handleFocus = (event) => event.target.select();

  const ref_input1 = useRef();
  const [no1, setNo1] = useState();
  const handleChange1 = (e) => {
    const value = e.target.value.replace(/\D|0/g, "");
    if (e.target.value <= 9 && e.target.value >= 1) {
      ref_input2.current.focus();
    }
    setNo1(value);
    console.log(e.target.value);
  };

  const ref_input2 = useRef();
  const [no2, setNo2] = useState();
  const handleChange2 = (e) => {
    const value = e.target.value.replace(/\D|0/g, "");
    if (e.target.value <= 9 && e.target.value >= 1) {
      ref_input3.current.focus();
    }
    setNo2(value);
    console.log(e.target.value);
  };

  const ref_input3 = useRef();
  const [no3, setNo3] = useState();
  const handleChange3 = (e) => {
    const value = e.target.value.replace(/\D|0/g, "");
    if (e.target.value <= 9 && e.target.value >= 1) {
      ref_input4.current.focus();
    }
    setNo3(value);
    console.log(e.target.value);
  };

  const ref_input4 = useRef();
  const [no4, setNo4] = useState();
  const handleChange4 = (e) => {
    const value = e.target.value.replace(/\D|0/g, "");
    if (e.target.value <= 9 && e.target.value >= 1) {
      ref_input5.current.focus();
    }
    setNo4(value);
    console.log(e.target.value);
  };

  const ref_input5 = useRef();
  const [no5, setNo5] = useState();
  const handleChange5 = (e) => {
    const value = e.target.value.replace(/\D|0/g, "");
    if (e.target.value <= 9 && e.target.value >= 1) {
      ref_input6.current.focus();
    }
    setNo5(value);
    console.log(e.target.value);
  };

  const ref_input6 = useRef();
  const [no6, setNo6] = useState();
  const handleChange6 = (e) => {
    const value = e.target.value.replace(/\D|0/g, "");
    if (e.target.value <= 9 && e.target.value >= 1) {
      ref_input7.current.focus();
    }
    setNo6(value);
    console.log(e.target.value);
  };

  const ref_input7 = useRef();
  const [no7, setNo7] = useState();
  const handleChange7 = (e) => {
    const value = e.target.value.replace(/\D|0/g, "");
    if (e.target.value <= 9 && e.target.value >= 1) {
      ref_input8.current.focus();
    }
    setNo7(value);
    console.log(e.target.value);
  };

  const ref_input8 = useRef();
  const [no8, setNo8] = useState();
  const handleChange8 = (e) => {
    const value = e.target.value.replace(/\D|0/g, "");
    //if (e.target.value <= 9 && e.target.value >= 1) {
    //  ref_input9.current.focus();
    //}
    ref_input8.current.blur();
    setNo8(value);
    console.log(e.target.value);
  };

  const [state, setState] = useContext(Context);

  function handleSubmit() {
    console.log("in handleSubmit");
    var localInputString = "";
    localInputString = no1 + no2 + no3 + no4 + no5 + no6 + no7 + no8;
    console.log(localInputString);
    console.log(localInputString.length);
    if (localInputString.length === state.stringLength) {
      console.log("correct length");

      console.log(state.generatedString);
      console.log(state.generatedString[0]);
      var addPointTo1 = false;
      var addPointTo2 = false;
      var addPointTo3 = false;
      var addPointTo4 = false;
      var addPointTo5 = false;
      var addPointTo6 = false;
      var addPointTo7 = false;
      var addPointTo8 = false;
      for (var i = 0; i < state.stringLength; i++) {
        if (localInputString[i] === state.generatedString[i]) {
          console.log("matchning");
          // Denna triggas aldrig!!
          switch (i + 1) {
            case 1:
              addPointTo1 = true;
              console.log("set pos 1 to true");
              break;
            case 2:
              addPointTo2 = true;
              break;
            case 3:
              addPointTo3 = true;
              break;
            case 4:
              addPointTo4 = true;
              break;
            case 5:
              addPointTo5 = true;
              break;
            case 6:
              addPointTo6 = true;
              break;
            case 7:
              addPointTo7 = true;
              break;
            case 8:
              addPointTo8 = true;
              break;
          }
        }
      }
      

      setState({
        ...state,
        ["pos1Sum" + state.settingNumber]: addPointTo1
          ? state["pos1Sum" + state.settingNumber] + 1
          : state["pos1Sum" + state.settingNumber],
        ["pos2Sum" + state.settingNumber]: addPointTo2
          ? state["pos2Sum" + state.settingNumber] + 1
          : state["pos2Sum" + state.settingNumber],
        ["pos3Sum" + state.settingNumber]: addPointTo3
          ? state["pos3Sum" + state.settingNumber] + 1
          : state["pos3Sum" + state.settingNumber],
        ["pos4Sum" + state.settingNumber]: addPointTo4
          ? state["pos4Sum" + state.settingNumber] + 1
          : state["pos4Sum" + state.settingNumber],
        ["pos5Sum" + state.settingNumber]: addPointTo5
          ? state["pos5Sum" + state.settingNumber] + 1
          : state["pos5Sum" + state.settingNumber],
        ["pos6Sum" + state.settingNumber]: addPointTo6
          ? state["pos6Sum" + state.settingNumber] + 1
          : state["pos6Sum" + state.settingNumber],
        ["pos7Sum" + state.settingNumber]: addPointTo7
          ? state["pos7Sum" + state.settingNumber] + 1
          : state["pos7Sum" + state.settingNumber],
        ["pos8Sum" + state.settingNumber]: addPointTo8
          ? state["pos8Sum" + state.settingNumber] + 1
          : state["pos8Sum" + state.settingNumber],
        inputNumberString: "",
        generatedString: "",
        currentTestStage: (state.trialNumber === 8 || state.generatedString === "14632857") ? "startingAudio" : "seeing",
        testingOrderIndex:
          state.trialNumber === 8 || state.generatedString === "14632857"
            ? state.testingOrderIndex + 1
            : state.testingOrderIndex,
        settingNumber:
          state.trialNumber === 8 || state.generatedString === "14632857"
            ? state.testingOrder[state.testingOrderIndex]
            : state.settingNumber,
        trialNumber:
          state.trialNumber === 8 || state.generatedString === "14632857"
            ? 1
            : state.trialNumber + 1,
        currentView:
          state.trialNumber === 8 && state.testingOrderIndex === 4
            ? "resultsView"
            : state.generatedString === "14632857"
            ? "instructionsView"
            : state.currentView,
        playingSound1: (state.settingNumber === "2" && state.trialNumber === 8) ? false : state.playingSound1,
        playingSound2: (state.settingNumber === "3" && state.trialNumber === 8) ? false : state.playingSound2,
        playingSound3: (state.settingNumber === "4" && state.trialNumber === 8) ? false : state.playingSound3,
      });
    }
  }

  //const handleEnterPress = (e) => {
  //    if (e.key === "Enter") {
  //      console.log("Vi klickade på Enter");
  //      handleSubmit();
  //    }
  //  }

  //document.removeEventListener("keydown", handleEnterPress);
  //document.addEventListener('keydown', handleEnterPress);

  useEffect(() => {
    console.log("effect i input!!");
    if (!ranEffect) {
      var newPointsSum = 0;
      var newClearedLocalTrials = 0;
      if (state.inputNumberString.length === state.stringLength) {
        if (state.oldCountingMode) {
          if (state.inputNumberString === state.generatedString) {
            newPointsSum = state.pointsSum + 1;
            newClearedLocalTrials = state.clearedLocalTrials + 1;
            console.log("Du klarade det! Du är bäst!!!");
            //var newPointsSum = JSON.parse(JSON.stringify(state.pointsSum));
            //console.log(newPointsSum);
            //newPointsSum += 1;
          } else {
            console.log("you fucken suck!!");
            newPointsSum = state.pointsSum;
            newClearedLocalTrials = state.clearedLocalTrials;
          }
          if (state.firstOrSecond === 1) {
            setState({
              ...state,
              firstOrSecond: 2,
              inputNumberString: "",
              generatedString: "",
              currentTestStage: "seeing",
              pointsSum: newPointsSum,
              clearedLocalTrials: newClearedLocalTrials,
            });
          } else {
            if (newClearedLocalTrials === 0) {
              console.log("You loooost-uh!");
              setState({ ...state, currentView: "noView" });
            } else {
              setState({
                ...state,
                firstOrSecond: 1,
                inputNumberString: "",
                generatedString: "",
                currentTestStage: "seeing",
                stringLength: state.stringLength + 1,
                pointsSum: newPointsSum,
                clearedLocalTrials: 0,
              });
            }
          }
        }

        if (!state.oldCountingMode) {
          console.log(state.generatedString);
          console.log(state.generatedString[0]);
          var addPointTo1 = false;
          var addPointTo2 = false;
          var addPointTo3 = false;
          var addPointTo4 = false;
          var addPointTo5 = false;
          var addPointTo6 = false;
          var addPointTo7 = false;
          var addPointTo8 = false;
          for (var i = 0; i < state.stringLength; i++) {
            if (state.inputNumberString[i] === state.generatedString[i]) {
              console.log("matchning");
              // Denna triggas aldrig!!
              switch (i + 1) {
                case 1:
                  addPointTo1 = true;
                  console.log("set pos 1 to true");
                  break;
                case 2:
                  addPointTo2 = true;
                  break;
                case 3:
                  addPointTo3 = true;
                  break;
                case 4:
                  addPointTo4 = true;
                  break;
                case 5:
                  addPointTo5 = true;
                  break;
                case 6:
                  addPointTo6 = true;
                  break;
                case 7:
                  addPointTo7 = true;
                  break;
                case 8:
                  addPointTo8 = true;
                  break;
              }
            }
          }
          setState({
            ...state,
            pos1Sum: addPointTo1 ? state.pos1Sum + 1 : state.pos1Sum,
            pos2Sum: addPointTo2 ? state.pos2Sum + 1 : state.pos2Sum,
            pos3Sum: addPointTo3 ? state.pos3Sum + 1 : state.pos3Sum,
            pos4Sum: addPointTo4 ? state.pos4Sum + 1 : state.pos4Sum,
            pos5Sum: addPointTo5 ? state.pos5Sum + 1 : state.pos5Sum,
            pos6Sum: addPointTo6 ? state.pos6Sum + 1 : state.pos6Sum,
            pos7Sum: addPointTo7 ? state.pos7Sum + 1 : state.pos7Sum,
            pos8Sum: addPointTo8 ? state.pos8Sum + 1 : state.pos8Sum,
            inputNumberString: "",
            generatedString: "",
            currentTestStage: "seeing",
            trialNumber: state.trialNumber + 1,
            currentView:
              state.trialNumber === 8 ? "resultsView" : state.currentView,
          });
        }
      }
    }
  }, [state.inputNumberString]);
  return (
    <div className="inputtingView">
      {/*<p><NumPad/></p>*/}
      {state.generatedString === "54721836" ? (
        <p className="instructionsViewParagraphInputting">
          Fyll i följden du just såg i rutorna nedan med hjälp av tangentbordet.
          Du måste stoppa i en siffra i varje ruta. Du kan ändra en siffra i en
          ruta genom att klicka på rutan. <br></br>
          <br></br>
          Tänk inte för länge på vilken siffra du stoppar i varje ruta. Om du
          har glömt vilken som ska vara där, gissa. <br></br>
          <br></br>
          Klicka på &quot;fortsätt&quot; för att gå vidare till nästa talföljd.{" "}
        </p>
      ) : (
        ""
      )}
      <p className="numbersBoxes">
        <input
          className="numbersBox"
          autoFocus={true}
          pattern="[0-9]*"
          autocomplete="off"
          onFocus={handleFocus}
          value={no1}
          onChange={handleChange1}
          id="no1"
          type="text"
          size="1"
          maxlength="1"
          ref={ref_input1}
        ></input>

        <input
          className="numbersBox"
          onFocus={handleFocus}
          pattern="[0-9]*"
          autocomplete="off"
          value={no2}
          onChange={handleChange2}
          id="no2"
          type="text"
          size="1"
          maxlength="1"
          ref={ref_input2}
        ></input>

        <input
          className="numbersBox"
          onFocus={handleFocus}
          pattern="[0-9]*"
          autocomplete="off"
          value={no3}
          onChange={handleChange3}
          id="no3"
          type="text"
          size="1"
          maxlength="1"
          ref={ref_input3}
        ></input>

        <input
          className="numbersBox"
          onFocus={handleFocus}
          pattern="[0-9]*"
          autocomplete="off"
          value={no4}
          onChange={handleChange4}
          id="no4"
          type="text"
          size="1"
          maxlength="1"
          ref={ref_input4}
        ></input>

        <input
          className="numbersBox"
          onFocus={handleFocus}
          pattern="[0-9]*"
          autocomplete="off"
          value={no5}
          onChange={handleChange5}
          id="no5"
          type="text"
          size="1"
          maxlength="1"
          ref={ref_input5}
        ></input>

        <input
          className="numbersBox"
          onFocus={handleFocus}
          pattern="[0-9]*"
          autocomplete="off"
          value={no6}
          onChange={handleChange6}
          id="no6"
          type="text"
          size="1"
          maxlength="1"
          ref={ref_input6}
        ></input>

        <input
          className="numbersBox"
          onFocus={handleFocus}
          pattern="[0-9]*"
          autocomplete="off"
          value={no7}
          onChange={handleChange7}
          id="no7"
          type="text"
          size="1"
          maxlength="1"
          ref={ref_input7}
        ></input>

        <input
          className="numbersBox"
          onFocus={handleFocus}
          pattern="[0-9]*"
          autocomplete="off"
          value={no8}
          onChange={handleChange8}
          id="no8"
          type="text"
          size="1"
          maxlength="1"
          ref={ref_input8}
        ></input>
      </p>
      <p>
        <button className="submitNumbersButton" onClick={handleSubmit}>
          Fortsätt
        </button>
      </p>
      {/*
      <p>{state.pos1Sum}</p>
      <p>{state.pos2Sum}</p>
      <p>{state.pos3Sum}</p>
      <p>{state.pos4Sum}</p>
      <p>{state.pos5Sum}</p>
      <p>{state.pos6Sum}</p>
      <p>{state.pos7Sum}</p>
      <p>{state.pos8Sum}</p>    
      */}
    </div>
  );
}
