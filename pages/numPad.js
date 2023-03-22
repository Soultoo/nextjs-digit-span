import React, { useContext } from "react";
import { Context } from "./Store.js";



export default function NumPad() {
  const [state, setState] = useContext(Context);

  function buttonClick(number) {
    setState({ ...state, inputNumberString: state.inputNumberString + number});
    console.log("We clicked");
  }

  return (
    <div>
      <table>
      {/*
        <tr>
          <td></td>
          <td><button onClick={()=>buttonClick(0)}>0</button></td>
          <td></td>
        </tr>
        */}
        <tr>
          <td><button onClick={()=>buttonClick(1)}>1</button></td>
          <td><button onClick={()=>buttonClick(2)}>2</button></td>
          <td><button onClick={()=>buttonClick(3)}>3</button></td>
        </tr>
        <tr>
          <td><button onClick={()=>buttonClick(4)}>4</button></td>
          <td><button onClick={()=>buttonClick(5)}>5</button></td>
          <td><button onClick={()=>buttonClick(6)}>6</button></td>
        </tr>
        <tr>
          <td><button onClick={()=>buttonClick(7)}>7</button></td>
          <td><button onClick={()=>buttonClick(8)}>8</button></td>
          <td><button onClick={()=>buttonClick(9)}>9</button></td>
        </tr>
      </table>
    </div>
    )
}