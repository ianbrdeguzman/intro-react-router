import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/intro-react-router/'>Home</Link>
                </li>
                <li>
                    <Link to='/intro-react-router/about'>About</Link>
                </li>
                <li>
                    <Link to='/intro-react-router/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/intro-react-router/contact'>Contact</Link>
                </li>
            </ul>
        </>
    );
};

export default Navbar;
