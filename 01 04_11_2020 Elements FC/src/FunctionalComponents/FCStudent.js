import React from 'react';

export default function FCStudent(props) {

  let num = 88;
  console.log(num++);
 // props.name = props.name + ":)"; //ERROR!

 return (
  <div style={{border:'solid green 1px', margin:5}}>
    <h2>Student of Rup</h2>
    <h3>props.id= {props.id === undefined ? 'und': props.id}</h3>
    <h3>props.name= {props.name} { props.name === "avi" && 0 } </h3>
    <h3>props.inRup= {props.inRup ? 'yes':'no'}</h3>
  </div>
);

//  if (props.name === "avi") {
//   return (
//     <div style={{border:'solid green 1px', margin:5}}>
//       <h2>Student</h2>
//       <h3>props.id= {props.id === undefined ? 'und': props.id}</h3>
//       <h3>props.name= {props.name} { props.name === "avi" && 0 } </h3>
//       <h3>props.inRup= {props.inRup ? 'yes':'no'}</h3>
//     </div>
//   );
//  }
//  else
//  {
//   return (
//     <div >
//     </div>
//   );
//  }
  
}
