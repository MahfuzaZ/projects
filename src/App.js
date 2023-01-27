import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Page2 from "./pages/First"
import Registration from "./pages/Registration"
import Login from './pages/Login';
function App() {
  return (
    <>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/first' element={<Page2/>}/>
          <Route path='/registration' element={<Registration/>}/> 
          <Route path='/login' element={<Login/>}/>
         </Routes>
      
    </>
  );
}

export default App;
