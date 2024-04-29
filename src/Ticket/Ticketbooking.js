import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Ticketbooking.css';

const Ticketbooking = () => {
  const [id, setId] = useState('');
  const [tname, setTname] = useState('');
  const [mname, setMname] = useState('');
  const [seats, setSeats] = useState('');

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const formHandler = (event) => {
    event.preventDefault();
    const data = { id, tname, mname, seats };
    axios.post('http://localhost:8080/api/Tickets/postticket', data);

    if (id.length === 0 || tname.length === 0 || mname.length === 0 || seats.length === 0) {
      setError(true);
    }

    if (id && tname && mname && seats) {
      const loginobj = {
        id: id,
        tname: tname,
        mname: mname,
        seats: seats,
      };
      console.log(loginobj);
      alert(JSON.stringify(loginobj));

      if (parseInt(seats) < 5) {
        navigate('/userinfo');
      } else {
        navigate('/failed');
      }
    }
  };

  return (
    <div className='body4'>
      <div className='login-form3'>
        <h4>
          <form onSubmit={formHandler}>
            <h3>Fill the details</h3>
            <br />
            ID:
            <input type='text' value={id} placeholder='ID' onChange={(e) => setId(e.target.value)} />
            <br />
            <div>
              {error && id.length === 0 ? <label style={{ color: 'red' }}>ID is required</label> : ''}
            </div>
            <br />
            THEATRE NAME :
            <input
              type='text'
              value={tname}
              placeholder='THEATRE NAME'
              onChange={(e) => setTname(e.target.value)}
            />
            <br />
            <div>
              {error && tname.length === 0 ? <label style={{ color: 'red' }}>theatre name is required</label> : ''}
            </div>
            <br />
            MOVIE NAME :
            <input
              type='text'
              value={mname}
              placeholder='MOVIE NAME'
              onChange={(e) => setMname(e.target.value)}
            />
            <br />
            <div>
              {error && mname.length === 0 ? <label style={{ color: 'red' }}>Movie name is required</label> : ''}
            </div>
            <br />
            SEATS:
            <input type='text' value={seats} placeholder='SEATS' onChange={(e) => setSeats(e.target.value)} />
            <br />
            <div>
              {error && seats.length === 0 ? (
                <label style={{ color: 'red' }}>Number of seats is required</label>
              ) : (
                ''
              )}
            </div>
            <br />
            <br />
            <div className='button-container'>
              <input type='Submit' />
            </div>
          </form>
        </h4>
      </div>
    </div>
  );
};

export default Ticketbooking;