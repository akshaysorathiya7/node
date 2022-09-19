import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Singup() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })
    const collectData = async () => {
        // console.log(name, email, password);
        let result = await fetch('http://localhost:4000/singup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        // console.log(result);
        localStorage.setItem('user', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate('/');
    }
    return (
        <div className='singup'>
            <h1>Register</h1>
            <input className='inputBox' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name' />
            <input className='inputBox' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' />
            <input className='inputBox' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' />
            <button className='appButton' onClick={collectData} type='submit'>Sing Up</button>
        </div>
    )
}

export default Singup