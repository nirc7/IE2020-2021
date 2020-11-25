import './App.css';
import { Switch, Route ,withRouter } from 'react-router-dom';
import CCHmoe from './ClassComponenets/CCHmoe';
import CCAbout from './ClassComponenets/CCAbout';
import CCStudent from './ClassComponenets/CCStudent';
import FCHeader from './FunctioanlComponent/FCHeader';


function App() {
  return (
    <div className="App">
      <FCHeader/>
      <header className="App-header">
        <Switch>
          <Route  exact path="/" >
            <CCHmoe />
          </Route>
          <Route path="/about">
            <CCAbout />
          </Route>
          <Route path="/student/:userId" >
            <CCStudent />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default withRouter(App);
