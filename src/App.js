import { Route, Routes,  } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home/Home';
import NotFound from './components/shared/NotFound/NotFound';
import Login from './components/pages/Login/Login/Login';
import Register from './components/pages/Login/Register/Register';
import Booking from './components/pages/Booking/Booking';
import Search from './components/pages/Search/Search';
import RequireAuth from './components/pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <>
    <div className="app">
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/login' element={<Login></Login>} />
      <Route path='/register' element={<Register></Register>} />
      <Route path='/booking' element={<Booking></Booking>} />
      <Route path='/search' element={<RequireAuth><Search></Search></RequireAuth>} />
      <Route path="*" element={<NotFound></NotFound>} />
      <Route  />
    </Routes>
    </div>

    </>
  );
}

export default App;
