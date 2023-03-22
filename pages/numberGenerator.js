import React, { useContext } from "react";
import { Context } from "./Store.js";

export function stringRegen(stringLength) {
  //const [state, setState] = useContext(Context);
  var returnString = "";
  var i = 0;
  while (i < stringLength) {
    //if (returnString.length >= 3) {
    //  //var addToStringCandidate = "";
    //  var addToStringCandidate = Math.floor(Math.random() * 10);  
    //  if (returnString[returnString.length-1] >)
      
    //}
    //else {
      returnString += Math.floor(Math.random() * 10);  
    //}
     
    
    i+=1;
  }
  return returnString;
}

export default function NumberGenerator() {
  const [state, setState] = useContext(Context);
  //console.log("hello");
  return (
    <div>
      {state.generatedString}
      <button onClick={()=>{setState({ ...state, generatedString : stringRegen(state.stringLength)})()}}>regen String</button>
    </div>
  )
}


