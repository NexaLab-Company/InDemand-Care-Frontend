
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './components/Test/Test';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Register from './components/SignUp/Register';






function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signup/:title" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
