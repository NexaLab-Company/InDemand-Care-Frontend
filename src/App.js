import './App.css';
import Test from './components/Test/Test';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Register from './components/SignUp/Register';
import SideBar from './components/SideBar/SideBar';
import { Route , Switch } from 'react-router-dom';
import IncomeExpense from './components/IncomeExpense/IncomeExpense';







function App() {



  return (



    <div className="App">

      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signup/:title" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path= "/" component={SideBar}/>
        <Route exact path="/income-expense" component={IncomeExpense}/>
      </Switch>
    

    </div>



  );
}

export default App;
