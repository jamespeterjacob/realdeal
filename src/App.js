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





function App() {

  return (
    <div className="App">
    {/* <Provider store={compstore}> */}
    {/* <ToastContainer position='top-right'></ToastContainer> */}
    <HashRouter>
    <Appheader></Appheader>
    <Routes>
      <Route path='/realdeal/#' element={<Home/>}></Route>
      <Route path='/realdeal/#login' element={<Login/>}></Route>
      {/* <Route path='/register' element={<Register/>}></Route> */}
      {/* <Route path='/component/company' element={<Company></Company>}></Route>
      <Route path='/component/users' element={<User></User>}></Route> */}
    </Routes>
    
    </HashRouter>
    {/* </Provider> */}
  </div>
  );
}

export default App;

