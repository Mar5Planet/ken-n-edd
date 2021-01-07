import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './homepage';
import KenHome from './kenDir/kenHome';
import EddHome from './EddDir/eddHome';

function App() {

  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/ken" exact>
        <KenHome />
      </Route>
      <Route path="/edd" exact>
        <EddHome />
      </Route>
    </Switch>
  );
}

export default App;
