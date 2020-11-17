import './App.css';
import CCPerson from './ClassComponents/CCPerson';

const names = ["avi", "ben", "charlie"];

function App() {

  let namesList = names.map((name, index) =>
    (<a href="#"
      className="list-group-item list-group-item-action"
      key={index}  >{index}.{name}</a>));

  function getDataFromChild(data) {
    console.log('in parent from child data= ', data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CCPerson name="ben" sendDatafromChild={getDataFromChild} />
        <CCPerson name="charlie"  sendDatafromChild={getDataFromChild} />
        <div className="list-group">
          {namesList}
        </div>
        
      </header>
    </div>
  );
}

export default App;
