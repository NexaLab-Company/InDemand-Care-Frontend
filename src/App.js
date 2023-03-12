import './App.css';
import Test from './components/Test/Test';
<<<<<<< HEAD
=======
import LatestIncome from './components/Latest Income/LatestIncome';
import Accountbalance from './components/Account Balance/Accountbalance';
>>>>>>> 4dc18cfc70856e6d6fc9a243307fdb8666b8a9df
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Register from './components/SignUp/Register';
import SideBar from './components/SideBar/SideBar';
import { Route , Switch } from 'react-router-dom';
import IncomeExpense from './components/IncomeExpense/IncomeExpense';
import Dashboard from './pages/Dashboard';







function App() {



  return (



    <div className="App">

      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signup/:title" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path= "/" component={SideBar} />
        <Route exact path="/income-expense" component={IncomeExpense} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    

    </div>



  );
}

export default App;
