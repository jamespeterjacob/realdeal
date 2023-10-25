import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import Login from './Login';
import Home from './Home';
import About from './About';
import Blogs from './Blogs';
import Appheader from './Appheader';
import Contact from './Contact';






function App() {

  return (
    <div className="App">
    {/* <Provider store={compstore}> */}
    {/* <ToastContainer position='top-right'></ToastContainer> */}
    <BrowserRouter>
    <Appheader></Appheader>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/realdeal/#blogs' element={<Blogs/>}></Route>
      <Route path='/realdeal/#contact' element={<Contact/>}></Route>
      {/* <Route path='/login' element={<Login/>}></Route> */}
      {/* <Route path='/register' element={<Register/>}></Route> */}
      {/* <Route path='/component/company' element={</Company>}></Route>
      <Route path='/component/users' element={<User></User>}></Route> */}
    </Routes>
    
    </BrowserRouter>
    {/* </Provider> */}
  </div>
  );
}

export default App;

