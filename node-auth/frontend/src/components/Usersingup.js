import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Usersingup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);

    const signup = async () => {
        if (!email || !password) {
            setError(true);
            return false;
        } else {
            try {
                const post = await axios.post(`http://localhost:5000/signup`, {
                    email: email,
                    password: password
                })
                localStorage.setItem('token', post.data.token);
                // console.log('token', post.data.token);
                navigate('/');
            } catch (error) {
                // console.log(error.response.data.errors.password);
                if (error) {
                    if (error.response.data.errors.email !== '') {

                        alert(error.response.data.errors.email);
                    }
                    if (error.response.data.errors.password !== '') {

                        alert(error.response.data.errors.password);
                    }
                }

            }

        }
    }
    return (
        <div>
            <h1>Sign up</h1>
            <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
            {error && !email && <span className='invalid-input' >Enter email</span>}

            <input type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
            {error && !password && <span className='invalid-input' >Enter password</span>}

            <button type="submit" onClick={signup} >Sign up</button>
        </div>
    )
}

export default Usersingup