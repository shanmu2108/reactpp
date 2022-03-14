
import './App.css';
import Login from './Login';
import AllUser from './AllUser';
import Notification from './Notification';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Last from './Last';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/allUsers" element={<AllUser />} />
        <Route exact path="/Notification" element={<Notification />} />
        <Route exact path="/details/:email" element={<Last/>}/>
        <Route exact path="/Last" element={<Last />} /> 
      </Routes>
     
   
      
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
