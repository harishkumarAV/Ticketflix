import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Ticket/Login';
import SignUp from './Ticket/SignUp';
import Ticketbooking from './Ticket/Ticketbooking';
import Confirmation from './Ticket/Confirmation';
import Failed from './Ticket/Failed';
import Userinfo from './Ticket/Userinfo';
import Landing from './Ticket/Landing';
import Homepage from './Ticket/Homepage';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Homepage/>}/>

  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/Ticketbooking" element={<Ticketbooking/>}/>
  <Route path="/Confirmation" element={<Confirmation/>}/>
  <Route path="/Failed" element={<Failed/>}/>
  <Route path="/Userinfo" element={<Userinfo/>}/>
  <Route path="/Landing" element={<Landing/>}/>

  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
