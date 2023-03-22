import React, { useContext } from "react";
import { Context } from "./Store";


import Store from "./Store";
import MainDisplay from "./mainDisplay";

import '@/digit-test/styles/globals.css'
import styles from "./styles.css";

//export const UserContext = React.createContext();

var xDtestVar = 71;
xDtestVar -= 3;

export default function App() {
  return (
    <Store>
      {/*<div>hej</div>
      <Page1 />
      <NumPad/>
      <NumberGenerator/>
      <Show1By1/>*/}
      <div className="insideStore">
        <MainDisplay />
      </div>
    </Store>
  );
}

//function coolFunc() {
//  const [coolString, setCoolString] = useState("");
//  return <p>coolString</p>;
//}
