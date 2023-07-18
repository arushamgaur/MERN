import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Link to="/home">Home Page</Link>
        <Link to="/login">Login Page</Link>
        <Link to="/signup">SignUp Page</Link> */}

        <Navbar />

          <Routes>
            <Route path='/' element={ <Navigate to="/home/" /> } />
            <Route path='home' element={ <Home /> } />
            <Route path='login' element={ <Login /> } />
            <Route path='signup' element={ <SignUp /> } />
            <Route path='event' element={ <EventHandling /> } />
            <Route path='state' element={ <StateManagement /> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
