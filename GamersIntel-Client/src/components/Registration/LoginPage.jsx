import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='min-h-[70vh]'>
            <h1 className='text-center'>This is login page </h1>
            <Link to="/registration" className='btn'> Click to go to registration page</Link>
        </div>
    );
};

export default LoginPage;