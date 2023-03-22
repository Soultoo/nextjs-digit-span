import React, { useContext, useState } from "react";
import { Context } from "../Store";

export default function InstructionsView() {
  const [state, setState] = useContext(Context);
  return (
    <div className="instructionsView">
      {state.generatedString === "00000000" ? (
        <p className="instructionsViewParagraph">
          Du kommer få vara med om ett minnestest. Din uppgift är att memorera
          talföljder med 8 siffror, till exempel "56749123", och sedan skriva in
          rätt siffra i rätt ruta så att det blir samma ordning som det du fick
          se från början.
          <br></br>
          <br></br>
          Du kommer få se siffrorna en efter en automatiskt, så du måste
          koncentrera dig för att inte missa några.<br></br>
          <br></br>I vissa delar av testet kommer du höra ljud i hörlurarna du
          har på dig. Ljudet du hör har inget att göra med siffrorna du ska
          komma ihåg, så gör ditt bästa för att hålla fokus på talföljderna.
          <br></br>
          <br></br>
          När du klickar på starta kommer du först få vara med om tre
          testomgångar för att du ska vänja dig, sedan kommer testet börja på
          riktigt.
        </p>
      ) : (
        <p className="instructionsViewParagraph">
          Nu har du fått köra dina tre övningsomgångar, tryck nu på "Starta" för
          att börja det riktiga testet.
        </p>
      )}

      <p>
        <button onClick={() => setState({ ...state, currentView: "testView" })}>
          Starta
        </button>
      </p>
    </div>
  );
}
