import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";


const Appheader = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (username === '' || username === null) {
                usenavigate('/login');
            } else {
                displayusernameupdate(username);
            }
        }

    }, [location])
    return (
        <div>
            {showmenu &&
            <div>
                <div className="topnav">
                    <Link className="brand" to={'/realdeal/#home'}>Ceferin</Link>
                    <Link to={'/realdeal/#blogs'}>Blogs</Link>
                    <Link to={'/realdeal/#contact'}>Contact</Link>
                    <span style={{  }}>Welcome <b>{displayusername}</b></span>
                    <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
                    
                   
                </div>
                <div className="container">
               <Sidebar/>
               </div>
               <div className="main">
                <Home/>
               </div>
               </div>
              
                   
            }
         

        </div>
    );
}

export default Appheader;