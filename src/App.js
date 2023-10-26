import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
import Sidebar from './Sidebar';
import Login from './Login';
import Home from './Home';
import About from './About';
import Blogs from './Blogs';
import Appheader from './Appheader';
import Contact from './Contact';

function App() {

  return (
    
    <><Appheader></Appheader><Routes>
      <Route exact path='/' index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/contact' element={<Contact />} />
    </Routes></>
    
  );
}

export default App;

