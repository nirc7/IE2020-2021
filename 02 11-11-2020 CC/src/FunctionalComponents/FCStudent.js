import React from 'react';
import Button from 'react-bootstrap/Button';

export default function FCStudent(props) {

  let num = 88;
  console.log(num++);

  // props.name = props.name + ":)"; //ERROR!

  function btnAddOne() {
    num++;
    console.log(num);
  }

  function chgName(e) {
    console.log(e.target.value);
  }

  return (
    <div style={{ border: 'solid green 1px', margin: 5 }}>
      <h2>Student of Rup</h2>
      <h3>props.id= {props.id === undefined ? 'und' : props.id}</h3>
      <h3>props.name= {props.name} {props.name === "avi" && 'is the great!'} </h3>
      <h3>props.inRup= {props.inRup ? 'yes' : 'no'}</h3>

      <Button variant="success" onClick={btnAddOne} >Success</Button>
      <h3> num={num}</h3>
      <input type="text" onChange={chgName} />

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
