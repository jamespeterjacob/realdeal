import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Link, Route, Routes} from "react-router-dom";
import Sidebar from './Sidebar';
import Login from './Login';
import Home from './Home';
import About from './About';
import Blogs from './Blogs';
import Appheader from './Appheader';
import Contact from './Contact';

function App() {

  return (
    
    <>
    {/* <Appheader></Appheader> */}
    <div className="topnav">
                    <Link className="brand" to={'/'}>Ceferin</Link>
                    <Link to={'/blogs'}>Blogs</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <span style={{  }}>Welcome <b>{displayusername}</b></span>
                    <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
                </div>
    <Routes>
      <Route exact path='/' index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/contact' element={<Contact />} />
    </Routes></>
    
  );
}

export default App;

