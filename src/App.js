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
import Dashboard from '../src/components/dashboard/dashboard';
import Appheader from './Appheader';
import Contact from './Contact';
import JobList from './components/jobs/JobList';
import { fetchJobs } from './actions/jobActions';
import JobForm from './components/jobs/JobForm';
import EditJob from './components/jobs/EditJob';
import AddressForm from './AddressForm';
import Website from './website';

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
      <Route path='/' index element={<Website/>}/>
      <Route exact path='/home' element={<Home />} />
      <Route path='/joblist' element={<JobList />} />
      <Route path='/jobform' element={<JobForm />} />
      <Route path="/editjob/:id" element={<EditJob />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/addressform' element={<AddressForm />} />
    </Routes>
    </Provider>
    </>
    
  );
}

export default App;

