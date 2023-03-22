import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Store.js";

import StartView from "./views/startView.js";
import InstructionsView from "./views/instructionsView.js";
import TestView from "./views/testView.js";
import ResultsView from "./views/resultsView.js";
import PreTestSettingsView from "./views/preTestSettingsView";

//import styles from "./styles.css";

export default function MainDisplay() {
  const [state, setState] = useContext(Context);
  return (
    <div className="mainDisplay">
      {state.currentView === "preTestSettingsView" ? <PreTestSettingsView /> : ""}
      {state.currentView === "startView" ? <StartView /> : ""}
      {state.currentView === "instructionsView" ? <InstructionsView /> : ""}
      {state.currentView === "testView" ? <TestView /> : ""}
      {state.currentView === "resultsView" ? <ResultsView /> : ""}
      <div
        className="coverEverything"
        style={{
          cursor:
            state.currentView === "testView" &&
            state.currentTestStage === "seeing"
              ? "none"
              : "",
        }}
      ></div>
    </div>
  );
  if (state.currentView === "startView") {
  } else if (state.currentView === "instructionsView") {
    return (
      <div>
        <p>
          Du kommer nu få göra ett siffertest! Först en provomgång så du hänger
          med:
        </p>
        <p>
          <button onClick={setState({ ...state, currentView: "testView" })}>
            Starta provomgång
          </button>
        </p>
      </div>
    );
  } else {
    return <div>noView</div>;
  }
}
