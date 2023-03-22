import React, { useContext, useState } from "react";
import { Context } from "../Store";

import useSound from "use-sound";
//import noReverb from "next/noReverbFadeOut.mp3"

export default function StartView() {
  const [state, setState] = useContext(Context);
  const [play, { stop }] = useSound('/audio/noReverbFadeOut.mp3');
  return (
    <div className="startView">
      <p>Välkommen! Tryck på knappen under för instruktioner:</p>
      <p>
        <button
          onClick={() =>
            setState({ ...state, currentView: "instructionsView" })
          }
        >
          Instruktioner
        </button>
        <button onClick={()=>play()}>play</button>
      </p>
    </div>
  );
}
