// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    <>
      <header className="App-header">
        <h1>React Eventonica</h1>
      </header>
      <Events />
      <Users />
    </>
    // </div>
  );
}

function Events() {
  let title="Event";
  return (
    <>
    <h2>Events</h2>
    <form action="">
      <input type="text"/>
      <button>Add {title}</button>
    </form>

    </>
  )
}

function Users() {
  let title = "User";
  return (
    <>
    <h2>Users</h2>
    <form action="">
    <input type="text"/>  
    <button>Add {title}</button>    
    </form>

    </>
  )
}

















export default App;