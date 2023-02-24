import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/home" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
        </div>
    );
};

export default Header;