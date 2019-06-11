import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
                <Link to={"/"}>
                <h1>Luis Parra</h1>
                <h5>Ingeniero en software</h5>
            </Link>
        </header>
    );
};

export default Header;