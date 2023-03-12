import './App.css';
import Test from './components/Test/Test';
import LatestIncome from './components/Latest Income/LatestIncome';
import Accountbalance from './components/Account Balance/Accountbalance';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Register from './components/SignUp/Register';
import SideBar from './components/SideBar/SideBar';
import { Route , Switch } from 'react-router-dom';






function App() {



  return (



    <div className="App">

      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signup/:title" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path= "/" component={SideBar}/>
      </Switch>
    </div>
  );
}

export default App;
