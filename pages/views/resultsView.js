import React, { useContext, useState } from "react";
import { Context } from "../Store";
//import styles from "../styles.css";

export default function ResultsView() {
  const [state, setState] = useContext(Context);
  return (
    <div className="resultsView">
      <p>Bra jobbat! Meddela testansvarig och lämna datorn som den är.</p>
      <div className="resultsTable">
        <table>
          <thead>
            <tr>
              <th>Person x</th>
              <th className="resultsCel">pos1</th>
              <th className="resultsCel">pos2</th>
              <th className="resultsCel">pos3</th>
              <th className="resultsCel">pos4</th>
              <th className="resultsCel">pos5</th>
              <th className="resultsCel">pos6</th>
              <th className="resultsCel">pos7</th>
              <th className="resultsCel">pos8</th>
            </tr>
          </thead>
          <tr>
            <td className="resultsCel">setting 1</td>
            <td className="resultsCel">{state.pos1Sum1}</td>
            <td className="resultsCel">{state.pos2Sum1}</td>
            <td className="resultsCel">{state.pos3Sum1}</td>
            <td className="resultsCel">{state.pos4Sum1}</td>
            <td className="resultsCel">{state.pos5Sum1}</td>
            <td className="resultsCel"> {state.pos6Sum1}</td>
            <td className="resultsCel">{state.pos7Sum1}</td>
            <td className="resultsCel">{state.pos8Sum1}</td>
          </tr>
          <tr>
            <td className="resultsCel">setting 2</td>
            <td className="resultsCel">{state.pos1Sum2}</td>
            <td className="resultsCel">{state.pos2Sum2}</td>
            <td className="resultsCel">{state.pos3Sum2}</td>
            <td className="resultsCel">{state.pos4Sum2}</td>
            <td className="resultsCel">{state.pos5Sum2}</td>
            <td className="resultsCel">{state.pos6Sum2}</td>
            <td className="resultsCel">{state.pos7Sum2}</td>
            <td className="resultsCel">{state.pos8Sum2}</td>
          </tr>
          <tr>
            <td className="resultsCel">setting 3</td>
            <td className="resultsCel">{state.pos1Sum3}</td>
            <td className="resultsCel">{state.pos2Sum3}</td>
            <td className="resultsCel">{state.pos3Sum3}</td>
            <td className="resultsCel">{state.pos4Sum3}</td>
            <td className="resultsCel">{state.pos5Sum3}</td>
            <td className="resultsCel">{state.pos6Sum3}</td>
            <td className="resultsCel">{state.pos7Sum3}</td>
            <td className="resultsCel">{state.pos8Sum3}</td>
          </tr>
          <tr>
            <td className="resultsCel">setting 4</td>
            <td className="resultsCel">{state.pos1Sum4}</td>
            <td className="resultsCel">{state.pos2Sum4}</td>
            <td className="resultsCel">{state.pos3Sum4}</td>
            <td className="resultsCel">{state.pos4Sum4}</td>
            <td className="resultsCel">{state.pos5Sum4}</td>
            <td className="resultsCel">{state.pos6Sum4}</td>
            <td className="resultsCel">{state.pos7Sum4}</td>
            <td className="resultsCel">{state.pos8Sum4}</td>
          </tr>
        </table>
      </div>
      <p>{state.pos1Sum}</p>
      <p>{state.pos2Sum}</p>
      <p>{state.pos3Sum}</p>
      <p>{state.pos4Sum}</p>
      <p>{state.pos5Sum}</p>
      <p>{state.pos6Sum}</p>
      <p>{state.pos7Sum}</p>
      <p>{state.pos8Sum}</p>
    </div>
  );
}
