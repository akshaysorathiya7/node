import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
    let navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/singup');
    }
    return (
        <div>
            {
                auth ?
                    <ul className='nav-ul'>
                        <li><Link to='/'>Products</Link></li>
                        <li><Link to='/add'>Add Products</Link></li>
                        <li><Link to='/update'>Update Products</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li> <Link onClick={logout} to='/singup'>logout</Link>  </li>
                    </ul>
                    :
                    <ul className='nav-ul nav-right'>
                        <li><Link to='/singup'>SingUp</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
            }
        </div>
    )
}

export default Nav