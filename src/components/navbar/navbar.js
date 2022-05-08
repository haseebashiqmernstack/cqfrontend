import { AppBar, Menu, MenuItem, Tab, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return (<>
            <AppBar>
                 <Toolbar>
                     <Typography>Library</Typography>
                     <Tab label="Books" component={Link} to={'/'} value={"1"}>
                     </Tab>
                     <Tab label="Students" component={Link} to={'/std'} value={"2"}>
                     </Tab>
                     <Tab label="Borrow Books" component={Link} to={'/borrowbook'} value={"3"}>                         
                     </Tab>
                 </Toolbar>

            </AppBar>           
    </>)
}
export default Navbar;