import './App.css';
import { useRef } from 'react';
import { Route, Routes } from 'react-router';
import Signup from './Components/signup-ways/signup/Signup';
import Login from './Components/signup-ways/login/Login';
import Dashboard from './Components/dashboard/Dashboard';
import SignupWays from './Components/signup-ways/SignupWays';
 
function App() {
  const dataRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="App">

      <Routes>                                                                        
        <Route path="/" element={<SignupWays/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>                    
    </div>
  );
}
 
export default App;