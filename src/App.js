import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About'
import { Link } from 'react-router-dom';





function App() {

  
    
  return (
    
    <div className="App">
      <div className="topnav">
          <a className="active" href="#home">Home</a>
            <a href="/"><Home/></a>
              <a href="#contact">Contact</a>
                <a href="#about" class="split">Help</a>
                </div>
                      <div className='main'></div>
                      </div>
  );
}


export default App;

