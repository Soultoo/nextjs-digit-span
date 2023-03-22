import React, { useContext, useState } from "react";
import { Context } from "../Store";
//import styles from "../styles.css";

export default function PreTestSettingsView() {
  const [state, setState] = useContext(Context);
  return (
    <div className="preTestSettingsView">
      <p>
        <input
          className="orderInput"
          autoFocus={true}
          pattern="[0-9]*"
          autocomplete="off"
          value={state.testingOrder}
          onChange={(e) => setState({ ...state, testingOrder: e.target.value })}
          type="text"
          size="4"
          maxlength="4"
        ></input>
      </p>
      <p>
        <button
          onClick={() => setState({ ...state, currentView: "startView" })}
        >
          Låt testdeltagare ta över
        </button>
        <p>HEEJJJJ</p>
      </p>
    </div>
  );
}
