import './App.css';
import Home from './pages/Home'
import Page2 from "./pages/First"
import Registration from "./pages/Registration"
import Login from './pages/Login';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
