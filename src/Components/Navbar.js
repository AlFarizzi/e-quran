import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <Link to="/">
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Home" icon={<Home/>} />
                </BottomNavigation>
            </Link>
        </div>
    );
}

export default Navbar;