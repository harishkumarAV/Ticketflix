import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './Landing.css';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';

export default function Landing() {
  const [id, setId] = useState('');
  const [tname, setTname] = useState('');
  const [mname, setMname] = useState('');
  const [seats, setSeats] = useState('');
  const [loginDetails, setLoginDetails] = useState([]);

  const paperStyle = { padding: '20px 20px', width: 1300, margin: '20px auto' };

  const updatedb = (e) => {
    const details = { id, mname, tname, seats };
    axios.put(`http://localhost:8080/api/Tickets/putticket/${id}`, details)
      .then(() => {
        console.log('Detail Updated');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletesignup = async (id) => {
    axios.delete(`http://localhost:8080/api/Tickets/deleteticket/${id}`)
      .then((response) => {
        console.log('Deleted');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateState = (list) => {
    setId(list.id);
    setTname(list.tname);
    setMname(list.mname);
    setSeats(list.seats);
  };

  const getalldetails = () => {
    axios.get('http://localhost:8080/api/Tickets/getticket')
      .then((response) => {
        setLoginDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getalldetails();
  }, []);

  return (
    <div className="details">
      <button className="bt0" onClick={getalldetails}>
        View Ticket Details
      </button>

      <TableContainer component={Paper} elevation={10} sx={{ width: '75%' }} style={paperStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Theatre Name</TableCell>
              <TableCell>Movie Name</TableCell>
              <TableCell>Seats</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loginDetails.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.tname}</TableCell>
                <TableCell>{post.mname}</TableCell>
                <TableCell>{post.seats}</TableCell>
                <TableCell>
                  <Popup
                    trigger={<button className="editbt" onClick={() => updateState(post)}>Edit</button>}
                    modal
                    nested
                  >
                    {(close) => (
                      <Paper className="model" elevation={15} style={paperStyle}>
                        <div className="modal">
                          <div className="content">
                            <form>
                              <p>ID: <input type="text" value={id} placeholder="ID" onChange={(e) => setId(e.target.value)} required /></p>
                              <p>Theatre Name: <input type="text" value={tname} placeholder="Theatre Name" onChange={(e) => setTname(e.target.value)} required /></p>
                              <p>Movie Name: <input type="text" value={mname} placeholder="Movie Name" onChange={(e) => setMname(e.target.value)} required /></p>
                              <p>Seats: <input type="text" value={seats} placeholder="Seats" onChange={(e) => setSeats(e.target.value)} required /></p>
                            </form>
                          </div>
                          <div>
                            <center>
                              <button className="updatebt" onClick={() => { updatedb(post.id); close(); }}>Update</button>
                            </center>
                          </div>
                        </div>
                      </Paper>
                    )}
                  </Popup>
                  <button className="delbt" onClick={() => { deletesignup(post.id); }}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
