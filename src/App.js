import './App.css';
import SideBar from './components/SideBar/SideBar';
import { Route , Switch } from 'react-router-dom';



function App() {


  return (

    <div className="App">

      <Switch>
        <Route exact path= "/">
          <SideBar />
        </Route>
      </Switch>

    </div>


  );

};

export default App;
