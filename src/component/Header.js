import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/home" className="btn btn-ghost normal-case text-xl">daisyUI</Link>

                <Link className='m-5' to="/home">Home</Link>
                <Link className='m-5' to="/login">Log In</Link>
                <Link className='m-5' to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Header;