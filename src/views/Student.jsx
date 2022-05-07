import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
  const row=[
      {
      firstname:"Muhammad Haseeb",
      lastname:"Ahmad"
  },
  {
    firstname:"Yasr",
    lastname:"Muhammad"
},
{
    firstname:"Amanat",
    lastname:"Ali"
}
]

const Student=()=>{
    return (<>
<div className='table-container' style={{maxWidth:'70%', margin:'10px auto'}}>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{background:"orange"}}>
            <TableCell>First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {
              row.map((r)=> (<TableRow>
 
                         <TableCell>{r.firstname}</TableCell>
                         <TableCell align="center">{r.lastname}</TableCell>
               <TableCell align="right">
                   <Button variant="outlined" startIcon={<DeleteIcon />}></Button>
                   <Button variant="outlined" style={{margin:"0 5px"}} startIcon={<EditIcon />}></Button>
                   </TableCell>
              </TableRow>) )
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>);
}
export default Student;