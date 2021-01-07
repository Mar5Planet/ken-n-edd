import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './homepage';
import KenHome from './kenDir/kenHome';
function App() {

  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/ken" exact>
        <KenHome />
      </Route>

    </Switch>
  );
}

export default App;
