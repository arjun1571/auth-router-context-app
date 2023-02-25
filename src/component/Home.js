import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div >
            <h1 className='text-red-300'>this is home {user.displyName}</h1>
        </div>
    );
};

export default Home;