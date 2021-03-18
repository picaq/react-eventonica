// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

const today = new Date().toISOString().split('T')[0];

function App() {


  return (
    // <div className="App">
    <>
      <header className="App-header">
        <h1>React Eventonica</h1>
      </header>
      <main>
        <Search title="Search"/>
        <Events />
        <Users />

        
      </main>
    </>
    // </div>
  );
}

function Events(props) {
  // let title="Event";

  return (
    <>

    <Form title = "Event">
      

    </Form>
    <form>

    <DateDay/>


    {/* <button value="submit" name="submit"/> */}
    </form>
 
    </>
  )
}

function Users(props) {
  // let title = "User";
  return (
    <>

    <Form title="User" />

    </>
  )
}

function Search(props) {
  return (
    <>
    <h2>{props.title}</h2>
    <form>
      <input type="text" placeholder="Search for something"/>
      <button> {props.title} </button>
    </form>
    </>
  )
}

const Form = (props) => {
  // let title = "title";
  return (
  <>
    <h2>{props.title}s</h2>
    <form>
      {/* <label>
        {title} Name:
          <input
            name="eventName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
      </label> */}
      <input type="text"/>
      <button>Add {props.title} Name</button>
    </form>
  </>
  )
}

const DateDay = (props) => {
  // let changeDate = () => {
  //   console.log(props.day);
  // }

  const [eventDate, setDate] = useState(today);

  useEffect(() => {
  console.log(`the selected date is ${eventDate}`)
  }, [eventDate]);

  return (
    <>
    <label for="date">Date:</label>
      <input 
        type="date" 
        id="date" 
        name="date"
        value={today}
        min={today}
        onChange={() => setDate(eventDate) }

      />

    </>
  )
}












export default App;