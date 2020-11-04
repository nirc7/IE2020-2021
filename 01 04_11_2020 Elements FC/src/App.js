import logo from './logo.svg';
import './App.css';
import Header from './Elements/EHeader';
import FCStudent from './FunctionalComponents/FCStudent';

// const App2  = <div>hello world!</div>;
// const App3 = <div>hello world!</div>;

const App =
  <div className="myStyleNir" >
    {Header}
    <h1 style={{
      border: 'solid black 2px',
      color: 'red'
    }}>hello world2!</h1>

    <FCStudent id={7} name="avi" inRup={true}/>
    <FCStudent id={8} name="ben" inRup={false}/>

    <h2>Ruppin</h2>

  </div>;
export default App;
