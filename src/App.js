import logo from './logo.svg';
import './App.css';
import ShoesComponent from './components/ShoesComponent';
import CreateShoesComponent from './components/CreateShoesComponent';
import UpdateShoesComponent from './components/UpdateShoesComponent';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className='container'>
         <BrowserRouter>
       <Switch>
         <Route path="/view" exact component={ShoesComponent}></Route>
         <Route path="/create" component={CreateShoesComponent}></Route>
         <Route path="/update-shoe/:id" component={UpdateShoesComponent}></Route>
       </Switch>
      
      
      </BrowserRouter>

         </div>
  );
}

export default App;
