import { AppBar, Menu, MenuItem, Tab, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return (<>
            <AppBar>
                 <Toolbar>
                     <Typography>Library</Typography>
                     <Tab label="Books" component={Link} to={'/'}>
                     </Tab>
                     <Tab label="Students" component={Link} to={'/std'}>
                     </Tab>
                     
                 </Toolbar>

            </AppBar>           
    </>)
}
export default Navbar;