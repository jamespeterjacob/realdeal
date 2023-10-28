import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: '',
    description: '',
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/jamespeterjacob/realdeal/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        setError('Error fetching job: ' + error.message);
      }
    };

    fetchJobData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateJobData = async () => {
      try {
        await axios.put(`https://my-json-server.typicode.com/jamespeterjacob/realdeal/jobs/${id}`, job);
        navigate('/joblist');
      } catch (error) {
        setError('Error updating job: ' + error.message);
      }
    };

    updateJobData();
  };

  return (
    <Box className='row main' style={{alignContent:'center', alignItems:'center'}}
       sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
       noValidate autoComplete="off">
      <h2>Edit Job</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <TextField type="text" name="title" value={job.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <TextField name="description" value={job.description} onChange={handleInputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </Box>
  );
};

export default EditJob;