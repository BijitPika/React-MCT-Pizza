import logo from './logo.svg';
import './App.css';
import API from './Components/API';
import Success from './Components/Success';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './Routing/Cart';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <API/> */}
      {/* <Success/> */}
      
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/menu' element={<API/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Success' element={<Success/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
