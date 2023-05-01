import React from 'react';
import ReactDOM from 'react-dom/client';
import  add, {sub, mul } from "./Calculator";

function Calright(){
  return (
    <>

    <button type="button" onClick={add}>Addition</button>  <br/>  <br/>
    <button type="button" onClick={sub}>Substraction</button>  <br/>  <br/>
    <button type="button" onClick={mul}>Multipication</button>
  </>
  )
}
const calc = ReactDOM.createRoot(document.getElementById("demo"));
calc.render(<Calright/>);

// Another way to call a function
// calc.render(
//   <button type="button" onClick={
//     ()=>{
//       add()
//     }
//   }>Addition</button>
//  );