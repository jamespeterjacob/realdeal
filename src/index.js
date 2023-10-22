import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import Navbar from './Navbar';
import Blogs from './Blogs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   
    {/* <Navbar/>
  
    <HashRouter>
    <Routes>
      
      <Route path="/" element={<Login/>}>Test</Route>
      <Route path="/realdeal/#about" >Test zone</Route> 
      <Route path="/realdeal/#blogs" >Test zone</Route>
      <Route path="/realdeal/#login" Component={Login} ></Route>  
      </Routes>
      </HashRouter> */}
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();