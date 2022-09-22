import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Singup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const singuphandle = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    } else {
      try {
        let sign = await axios.post(`http://localhost:6000/signup`, {
          email: email,
          password: password
        })
        if (sign.data) {
          alert('Your registration has been successfull');
          navigate('/')
        };
      } catch (error) {
        console.log(error);

      }

    }
  }
  return (
    <div>
      <h1>Sign up</h1>
      <input type="email" placeholder='Enter email' className='inputBox' onChange={(e) => setEmail(e.target.value)} />
      {error && !email && <span className='invalid-input' >Enter email</span>}

      <input type="password" placeholder='Enter password' className='inputBox' onChange={(e) => setPassword(e.target.value)} />
      {error && !password && <span className='invalid-input' >Enter password</span>}



      <button type="submit" className='appButton' onClick={singuphandle} >Sign up</button>
    </div>
  )
}

export default Singup