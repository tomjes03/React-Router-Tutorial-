import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <h1>hello router</h1>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
