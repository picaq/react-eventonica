import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

const today = new Date().toISOString().split('T')[0];
let space = ".33rem";
// let eventDate;
function App() {


  return (
    // <div className="App">
    <>
      <header className="App-header">
        <h1><img className="App-logo" src={logo} alt="React atom logo spinning"/> Eventonica</h1>
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
  let title="Event";
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    console.log({eventName})
  }, [eventName]);

  // const [eventsObject, setEventsObject] = useState({});

  const [eventDate, setDate] = useState(today);

  useEffect(() => {
    console.log({eventDate})
  }, [eventDate]);

  let eventsObject = {eventDate, eventName};
  useEffect(() => {
    console.log({eventsObject})
  }, [eventsObject]);

  let sendEventsObject = () => {
    console.log({eventsObject});
  }

  return (
    <>

    <Title title = {title} />

    <div>

    <label htmlFor="date">Date:</label>
      <input 
        type="date" 
        id="date" 
        name="date"
        value={eventDate}
        min={today}
        onChange={(e) => setDate(e.target.value) }
      />
    {/* <NameField 
      title={title} 
      value={eventName}
      placeholder={eventName}
      onChange={(e) => setEventName(e.target.value)}
    /> */}
      <label> {title} Name:&nbsp;
        <input 
          type="text"
          value={eventName}
          placeholder="eventName"
      onChange={(e) => setEventName(e.target.value)}
        />
      </label>

    {/* <AddButton 
        title={title}
        onClick={(e) => setEventsObject(e.target,{eventDate, eventName})} 
    /> */}
    <button 
      style={{ display: "block",
  marginLeft: "auto"}} 
      onClick={(e) => sendEventsObject(e.target)}>Add {title}
    </button>
    {/* <button value="submit" name="submit"/> */}
    </div>
 
    </>
  )
}

function Users(props) {
  let title = "User";
  let value = "value";
  return (
    <>

    <Title title={title} />
    <form>
      <NameField title={title} value={value}/>
      <AddButton 
        title={title}
        onClick={(e) => setEventName(e.target.value)} 
      />
    </form>

    </>
  )
}

function Search(props) {
  return (
    <>
    <h2>{props.title}</h2>
    <form>
      <input type="text" placeholder="Search for something"/>
      <button style={{marginLeft: space}}> {props.title} </button>
    </form>
    </>
  )
}

const Title = (props) => {
  return (
  <>
    <h2>{props.title}s</h2>
  </>
  )
}
const AddButton = (props) => {
  return (
  <>
      <button style={{ display: "block",
  marginLeft: "auto"}} >Add {props.title}</button>
  </>
  )
}
const NameField = (props) => {
  return(
    <>
      <label> {props.title} Name:&nbsp;
        <input 
          type="text"
          value={props.eventName}
        />
      </label>
    </>
  )
}

// const DateDay = () => {

//   const [eventDate, setDate] = useState(today);

//   useEffect(() => {
//     console.log({eventDate})
//   }, [eventDate]);

//   return (
//     <>
//     <label htmlFor="date">Date:</label>
//       <input 
//         type="date" 
//         id="date" 
//         name="date"
//         value={eventDate}
//         min={today}
//         onChange={(e) => setDate(e.target.value) }
//       />

//     </>
//   )
// }












export default App;