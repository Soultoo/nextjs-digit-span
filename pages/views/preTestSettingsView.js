import React, { useContext, useState } from "react";
import { Context } from "../Store";
//import styles from "../styles.css";
import useSound from "use-sound";

export default function PreTestSettingsView() {
  const [playTest, { stop : stopTest }] = useSound('/audio/noReverbFadeOut.mp3');

  const [state, setState] = useContext(Context);

  const [isPlayingTestSound, setIsPlayingTestSound] = useState(false);

  return (
    <div className="preTestSettingsView">
      <p>
        <input
          className="orderInput"
          autoFocus={true}
          pattern="[0-9]*"
          autocomplete="off"
          value={state.testingOrder}
          onChange={(e) => {
            setState({ ...state, testingOrder: e.target.value });
          }}
          type="text"
          size="4"
          maxlength="4"
        ></input>
        <input
          className="testSpeedFactorInput"
          autocomplete="off"
          value={state.testSpeedFactor}
          onChange={(e) => {
            setState({ ...state, testSpeedFactor: e.target.value });
          }}
          type="text"
        ></input>
      </p>
      <p>
        <button
          onClick={() => {
            setState({ ...state, currentView: "startView" });
          }}
        >
          Låt testdeltagare ta över
        </button>
        <button onClick={()=>{
          if (!isPlayingTestSound) {
            setIsPlayingTestSound(true);
            playTest();
          }
          else {
            setIsPlayingTestSound(false);
            stopTest();
          }
        }}> test button</button>
        <p>HEEJJJJ</p>
      </p>
    </div>
  );
}
