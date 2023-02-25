import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';



const Header = () => {
    const {user}=useContext(AuthContext);
    console.log("context",user);
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/home" className="btn btn-ghost normal-case text-xl">Auth flow</Link>

                <Link className='m-5' to="/home">Home</Link>
                <Link className='m-5' to="/login">Log In</Link>
                <Link className='m-5' to="/register">Register</Link>
                {user?.email && <span>Welcome,{user.email} </span>}
            </div>
        </div>
    );
};

export default Header;