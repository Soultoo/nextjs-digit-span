import React, { useContext, useState } from "react";
import { Context } from "../Store";

import useSound from "use-sound";
//import noReverb from "next/noReverbFadeOut.mp3"

export default function StartView() {
  const [state, setState] = useContext(Context);
  const [play1, { stop1 }] = useSound('/audio/noReverbFadeOut.mp3');
  const [play2, { stop2 }] = useSound('/audio/reverb3000msFadeOut.mp3');
  const [play3, { stop3 }] = useSound('/audio/reverb16000msFadeOut.mp3');
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
        <button onClick={()=>{
            //play1();
            //play2();
            play3();
          }}>play</button>
        <button onClick={()=>stop3()}>stop</button>
      </p>
    </div>
  );
}
