import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Store";

import useSound from "use-sound";
//import noReverb from "next/noReverbFadeOut.mp3"

export default function AudioPlayer() {
  
  const [state, setState] = useContext(Context);
  const [play1, { stop : stop1 }] = useSound('/audio/noReverbFadeOut.mp3');
  const [play2, { stop : stop2 }] = useSound('/audio/reverb3000msFadeOut.mp3');
  const [play3, { stop : stop3 }] = useSound('/audio/reverb16000msFadeOut.mp3');
  useEffect(()=>{
    if(state.playingSound1) {
      play1();
    } 
    if(!state.playingSound1) {
      stop1();
    } 
    
  }, [state.playingSound1]);

  useEffect(()=>{
    if(state.playingSound2) {
      play2();
    } 
    if(!state.playingSound2) {
      stop2();
    } 
    
  }, [state.playingSound2]);

  useEffect(()=>{
    if(state.playingSound3) {
      play3();
    } 
    if(!state.playingSound3) {
      stop3();
    } 
    
  }, [state.playingSound3]);
  return (
    <div className="audioPlayer">
      
    </div>
  );
}
