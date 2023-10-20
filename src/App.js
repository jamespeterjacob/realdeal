import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Blogs from './Blogs';
import { Link } from 'react-router-dom';





function App() {

  
    
  return (
    
    <div className="App">
      <div className="topnav">
          <a className="active" href="#home">Home</a>
            <a href="/"><Home/></a>
              <a href="/realdeal/#about"><About/></a>
                <a href="/realdeal/#blogs" class="split"><Blogs/></a>
                </div>
                      <div className='main'>
<p>I'm in the app</p>
                      </div>
                      </div>
  );
}


export default App;

