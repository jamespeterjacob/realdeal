import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {Link, Route, Routes} from "react-router-dom";
import Sidebar from './Sidebar';
import Login from './Login';
import Home from './Home';
import About from './About';
import Appheader from './Appheader';
import Contact from './Contact';
import JobList from './components/jobs/JobList';
import { fetchJobs } from './actions/jobActions';
import JobForm from './components/jobs/JobForm';


const store = createStore(reducers, applyMiddleware(thunk));
function App() {

  useEffect(() => {
    store.dispatch(fetchJobs());
  }, []);
  return (
    
    <>
   <Provider store={store}>
   <Appheader></Appheader>
    <Routes>
      <Route exact path='/' index element={<Home />} />
      <Route path='/joblist' element={<JobList />} />
      <Route path='/jobform' element={<JobForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </Provider>
    </>
    
  );
}

export default App;

