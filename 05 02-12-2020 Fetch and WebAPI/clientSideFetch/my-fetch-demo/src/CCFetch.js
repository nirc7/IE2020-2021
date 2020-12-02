import React, { Component } from 'react'

export default class CCFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.apiUrl = 'http://localhost:61094/api/students/';
  }



  btnGetAllStudents = () => {

    console.log('start');
    fetch(this.apiUrl,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.Name));
          console.log('result[0].FullName=', result[0].Name);
        },
        (error) => {
          console.log("err post=", error);
        });
    console.log('end');
  }

  btnGetAStudentById = () => {

    console.log('start');
    fetch(this.apiUrl + '3',
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Name=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });
    console.log('end');

  }

  btnPost = () => {

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: "77",
      Name: "nir",
      Grade: 77
    };

    console.log('start');
    fetch(this.apiUrl,
      {
        method: 'POST',
        body: JSON.stringify(s),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        if (res.status === 201) {
          console.log('student created:)');
        }
        console.log('res.ok', res.ok);

        if (res.ok) {
          console.log('post succeeded');
        }

        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
        },
        (error) => {
          console.log("err post=", error);
        });
    console.log('end');

  }


  btnPut = () => {

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: "77",
      Name: "nir",
      Grade: 77
    };

    console.log('start');
    fetch(this.apiUrl + '3',
      {
        method: 'Put',
        body: JSON.stringify(s),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        
        console.log('res.ok', res.ok);

        if (res.ok) {
          console.log('put succeeded');
        }

        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
        },
        (error) => {
          console.log("err post=", error);
        });
    console.log('end');

  }

  btndelete = () => {

    console.log('start');
    fetch(this.apiUrl + '3',
      {
        method: 'Delete',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        if (res.ok) {
          console.log('student was deleted!');
        }
      });
      
    console.log('end');

  }

  render() {
    return (
      <div>
        <h3>Fetch</h3>
        <button onClick={this.btnGetAllStudents}>get all students</button> <br />
        <button onClick={this.btnGetAStudentById}>get a student by id</button> <br />
        <button onClick={this.btnPost}>Post</button> <br />
        <button onClick={this.btnPut}>Put</button> <br />
        <button onClick={this.btndelete}>Delete</button> <br />
      </div>
    )
  }
}
