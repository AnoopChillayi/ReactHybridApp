import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Age, Address, Users } from './User';


const app =(props)=> {

const [users,setUsers] = useState([
  { name: 'Anoop' },
  { name: 'Refi' },
  { name: 'Rosa' },
  { name: 'Refi' }
]);

useEffect(()=>{
  console.log("in did mount")

  let abc = [...users];
  console.log(abc)

  abc.push({ name: 'salvan' });

  setUsers(
     abc
  )

  return ()=>{
    console.log("will unmount");
  }
},[])

useEffect(()=>{
  console.log("123")
  let a = { name: 'jibin' };
    let tempData = users.filter((item) => {
      return item.name == 'jibin'
    });
    if (tempData.length == 0) {
      let abc = [...users];
      abc.push(a);
      setUsers(abc
      )
    }

  return ()=>{
    console.log("will unmount");
  }
},[users])
  

  // componentDidUpdate(prevProps, prevState) {
  //   let a = { name: 'jibin' };

  //   let tempData = this.state.users.filter((item) => {
  //     return item.name == 'jibin'
  //   });
  //   console.log(tempData)
  //   if (tempData.length == 0) {
  //     console.log(1)
  //     let abc = [...this.state.users];
  //     abc.push(a);
  //     this.setState({
  //       users: abc
  //     })
  //   }
  // // };


  // componentWillUnmount() {
  //   console.log("in un mount")
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props)
  //   console.log(state)
  //   // if (props.selected !== state.selected) {
  //   //   return {
  //   //     selected: props.selected,
  //   //   };
  //   // }

  //   // Return null if the state hasn't changed
  //   return null;
  // }

console.log(users)
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Users names={users}></Users>
          <Age></Age>
          <Address place={'chalakudy'}></Address>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  
}

export default app;
