import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Navbar from './Navbar';
import Blogs from './Blogs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <HashRouter>
    <Navbar/>
    <App />
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/realdeal/#about" element={<About/>} /> 
      <Route path="/realdeal/#blogs" element={<Blogs/>} /> 
      </Routes>
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();