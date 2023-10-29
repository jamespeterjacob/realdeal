// src/components/JobList.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchJobs, deleteJob } from '../../actions/jobActions';
import EditJob from './EditJob'; 
import JobForm from './JobForm';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//import * as React from 'react';
//import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import Sidebar from "./Sidebar";
import Home from "../../Home";
import Blogs from "../../Blogs";
import Contact from "../../Contact"
import Dashboard from "../dashboard/dashboard";
//import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
//import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
//import Container from '@mui/material/Container';
//import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';
//import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../dashboard/listItems';
import Chart from '../dashboard/chart';
import Deposits from '../dashboard/deposits';
import Orders from '../dashboard/orders';



const JobList = () => {
  const [open, setOpen] = useState(true);
    const usenavigate = useNavigate();
    const location = useLocation();
    const drawerWidth = 240;
    const defaultTheme = createTheme();

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
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const [editJobId, setEditJobId] = useState(null);
  const [isAddingJob, setIsAddingJob] = useState(false); // State to control RecordForm visibility

  useEffect(() => {
    // Fetch jobs when the component mounts
    dispatch(fetchJobs());
  }, [dispatch]);


  // const handleDelete = (id) => {
  //   // Dispatch the deleteJob action to delete the job by ID
  //   if (window.confirm('Are you sure you want to delete this job?')) {
  //     dispatch(deleteJob(id));
  //   }
  // };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
          dispatch(deleteJob(id));
        }
  };

  const handleEditComplete = () => {
    setEditJobId(null); // Set editRecordId to null to exit edit mode
  };

  const handleAddJobClick = () => {
    setIsAddingJob(true); // Show the RecordForm component
  };

  const handleEditClick = (id) => {
    setEditJobId(id);
  };

  return (
//     <div className='row main'>
//       <h2>Jobs</h2>
//       {/* <Link to="/jobs/add">Add Job</Link> */}
//       <button style={{ marginBottom: '10px' }}>
//         <Link to="/add-job" style={{ textDecoration: 'none', color: 'black' }}>
//           Add Job
//         </Link>
//       </button>
//       <ul>WHERE AM I
//         {jobs.map((job) => (
//           <li key={job.id} style={{listStyle:"none"}}>
//             <Link to={`/jobs/edit/${job.id}`}>{job.title}</Link>
//             <button onClick={() => handleDelete(job.id)}>Delete</button>
//           </li>
//         ))}

// {editJobId === job.id ? (
//                   <EditJob job={job} onComplete={handleEditComplete} />
//                 ) : (
//                   <>
//                     <button onClick={() => handleEditClick(job.id)}>Edit</button>
//                     <button onClick={() => handleDeleteClick(job.id)}>Delete</button>
//                   </>
//                 )}
//       </ul>
//     </div>

<ThemeProvider theme={defaultTheme}>
<Box sx={{ display: 'flex', backgroundColor:'red'}} >
  <CssBaseline />
  <Drawer variant="permanent" open={open} >
    <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1], zIndex:-1  }}>
      <IconButton onClick={toggleDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
    <Divider />
    <List component="nav"> 
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      {secondaryListItems}
    </List>
    
  </Drawer>
  <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, height: '100vh', overflow: 'auto', padding:'10px' }}>
    <Toolbar />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
      <h4>List of Jobs</h4>
<Button onClick={handleAddJobClick} variant="contained" style={{ marginBottom: '10px', height:'30px', position:'absolute', right:'40px' }}>
  <Link to="/JobForm" style={{ textDecoration: 'none', color: 'white' }}>Add Job</Link>
</Button>

<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow style={{backgroundColor:'lightgray'}}>
      <TableCell>Job Title</TableCell>
      <TableCell align="left">job Description</TableCell>
      <TableCell align="left">Actions</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {jobs.map((job) => (
      <TableRow key={job.id}>
        <TableCell>{job.title}</TableCell>
        <TableCell>{job.description}</TableCell>
        <TableCell>
          {editJobId === job.id ? (
            // <EditJob job={job} onComplete={handleEditComplete} />
            // <EditJob to="/edit-job" style={{ textDecoration: 'none', color: 'black' }}></EditJob>
            <Link to={`/editjob/${job.id}`}>yo</Link>
          ) : (
            <>
              <Button variant="outlined" onClick={() => handleEditClick(job.id)}><Link to={`/editjob/${job.id}`}>Edit</Link></Button>
              <Button variant="outlined" onClick={() => handleDeleteClick(job.id)}>Delete</Button>
            </>
          )}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
{isAddingJob && <JobForm />} 

</TableContainer>
      </Grid>
      {/* <Copyright sx={{ pt: 4 }} /> */}
    </Container>
  </Box>
</Box>
</ThemeProvider>

  );
};

export default JobList;
