import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/today' element = {<Products />}/>
        <Route path='/news' element = {<Products />}/>
        <Route path='/opinion' element = {<Products />}/>
        <Route path='/buisness' element = {<Products />}/>
        <Route path='/sport' element = {<Products />}/>
        <Route path='/entertainment' element = {<Products />}/>
        <Route path='/crossword' element = {<Products />}/>
        <Route path='/signup' element ={<SignUp />} />
        <Route path='login' element={<Login />} />
      </Routes>



    </div>
  );
}

export default App;
