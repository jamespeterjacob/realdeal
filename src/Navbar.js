import Home from './Home';
import About from './About';
import Blogs from './Blogs';
import App from './App';
import Sidebar from './Sidebar';

const Navbar = () => {

    return (
    
      <div>
         <h2>Ceferin Web Solutions</h2>
         <div className="topnav">
           <a className="active" href="#home">Home</a>
             <a href="/">Test</a>
               <a href="/realdeal/#about">Test</a>
                 <a href="/realdeal/#login" class="split">Login hahaha</a>
                 </div>
                     
      </div>   
      );
    };

  export default Navbar;