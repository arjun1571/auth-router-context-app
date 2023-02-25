import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';



const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    const handelLogout = () =>{
        logOut()
        .then(() => {
          })
          .catch((error) => {

          });
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/home" className="btn btn-ghost normal-case text-xl">Auth flow</Link>

                <Link className='m-5' to="/home">Home</Link>
                <Link className='m-5' to="/login">Log In</Link>
                <Link className='m-5' to="/register">Register</Link>
                <Link className='m-5' to="/order">Order</Link>

                {user?.email && <span>Welcome,{user.email} </span>}
                {
                    user?.email ? 
                    <button onClick={handelLogout} className="btn btn-sm">Log Out</button>
                    : <Link to="/login"><button className="btn btn-sm">Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;