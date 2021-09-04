import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/pages/Inicio';
import Planets from './components/pages/Planets';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component= {Inicio} />
         <Route path='/planets' component={Planets}/>
         <Route path='/about' component={About}/>
         <Route path='/planets' component={SignUp}/>
       </Switch> 
     </Router>
     
    </div>
  );
}

export default App;
