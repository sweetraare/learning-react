import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Click from './components/Click';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import HojaEstilo from './components/Stylesheet';
import EnLinea from './components/inLine';
import './appStyles.css';
import styles from './appStyles.module.css'
import Forms from './components/Forms';
import LifyCycleA from './components/LifyCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}> Success </h1>
      <Greet></Greet>
      <Welcome></Welcome>

      <Hello></Hello>

      <Greet name="Juanito" heroName="superman">
        <h2>Este es el hijo</h2>
      </Greet>
      <Greet name="Carlos"  heroName="batman">
        <button>Holiii</button>
      </Greet>
      <Greet name="Pedro" heroName="ajaja"></Greet>
      props no pueden cambiar de valor
      <Welcome apellido="asdasdas" nme="Juanito"></Welcome>
      <Welcome name="Pedrito"></Welcome>
      <Welcome name="carlos"></Welcome>
      <Message></Message>
      <Counter></Counter>
      <br></br>
      <br></br>
      <br></br>
      <FunctionClick></FunctionClick>
      <Click></Click>
      <EventBind></EventBind>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <NameList></NameList>
      <HojaEstilo primary={true}></HojaEstilo>
      <EnLinea></EnLinea>
      <Forms></Forms>
       */}
       <LifyCycleA></LifyCycleA>
       <FragmentDemo></FragmentDemo>
       <Table></Table>
       <ParentComp></ParentComp>
       
    </div>
  );
}

export default App;
