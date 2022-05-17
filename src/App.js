
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navebar from './components/layout/Navebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/Users';


// import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <Navebar/>
    <Routes>
      <Route exact path='/' element = {<Home/>}></Route>
       <Route exact path='/about' element = {<About/>}></Route>
       <Route exact path='/contact' element = {<Contact/>}></Route>
       <Route exact path='/users/add' element = {<AddUser/>}></Route>
       <Route exact path='/users/edit/:id' element = {<EditUser/>}></Route>
       <Route exact path='/users/:id' element = {<User/>}></Route>
       <Route exact path='*' element = {<NotFound/>}></Route>
       </Routes>
    </div>
    </Router>
  );
}


export default App;
