import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  MyHeader from "./components/myHeader.ts"
import MyContent from "./components/myContent.ts"


function App() {
  const [name, setName] = useState('xiamo')
  const changeName = ()=>{
    name === 'xiamo' ? setName('cated') : setName('xiamo')
  }
  const obj = {
    complier: 'hello',
    frams: 'world'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() =>changeName()}>
          myname
        </p>
          <MyHeader name={name}/>
          <MyContent hello={obj}/>
      </header>
    </div>
  );
}

export default App;
