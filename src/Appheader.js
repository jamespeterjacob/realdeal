import * as React from 'react';
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact"
import Dashboard from "./components/dashboard/dashboard";
//import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
//import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../src/components/dashboard/listItems';
import Chart from '../src/components/dashboard/chart';
import Deposits from '../src/components/dashboard/deposits';
import Orders from '../src/components/dashboard/orders';
import Navbar from './Navbar';


const Appheader = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const [open, setOpen] = useState(true);
    const usenavigate = useNavigate();
    const location = useLocation();
    const drawerWidth = 240;
    const defaultTheme = createTheme();

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
      );

    const toggleDrawer = () => {
        setOpen(!open);
      };
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/') {
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
                 <ThemeProvider theme={defaultTheme}>
                  <Box sx={{ display: 'flex' }}>
                    <div className="topnav" style={{position:"fixed", top:"0px", width:"100%", zIndex:30 }}>
     
                    {/* <Link className="brand" to={'/'}>Ceferin</Link>
                    <Link to={'/joblist'}>Jobs</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/addressform'}>Address</Link>
                    <Link to={'/dashboard'}>Dashboard</Link> */}
                    
                    <span style={{  }}>Welcome <b>{displayusername}</b></span>
                    <Link style={{ float: 'right' }} to={'/'}>Logout</Link>
                    </div>
                  <CssBaseline />
                </Box>
              </ThemeProvider>
               </div>
               }
               </div>
               );
              }
              
              export default Appheader;