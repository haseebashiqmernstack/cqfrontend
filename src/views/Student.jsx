import React, { useState } from 'react';
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
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField, Typography } from '@mui/material';
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
  const [open,setOpen]=useState(false);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [message,setMessage]=useState('');
  const formSubmit=()=>{
    if(firstName==="" || lastName==="")
    {
      setMessage('all fields are required!');
    }
    else{
      console.log({
        firstName,
        lastName
      })
      setOpen(false);
    }
  }
    return (<>
<div className='table-container' style={{maxWidth:'70%', margin:'80px auto'}}>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{background:"#1976D2"}}>
            <TableCell align="left" colSpan={3}>
              <Button variant="outlined" color={"warning"} onClick={()=>setOpen(true)}>Add</Button>
            </TableCell>
          </TableRow>
          <TableRow style={{background:"#1976D2"}}>
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
                   <Button variant="outlined" color="error" startIcon={<DeleteIcon />}></Button>
                   <Button variant="outlined" style={{margin:"0 5px"}} startIcon={<EditIcon />}></Button>
                   </TableCell>
              </TableRow>) )
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   <Dialog
   open={open}
   onClose={()=>setOpen(false)}
   aria-labelledby="alert-dialog-title"
   aria-describedby="alert-dialog-description"
   >
     <DialogTitle id="alert-dialog-title">
       {"Student Registeration Form"}
     </DialogTitle>
     <DialogContent>
       <DialogContentText>
               <Typography variant="h6" color={"warning"}>{message && message}</Typography>
                <Typography variant="h6">First Name</Typography>
                <TextField label="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} variant="outlined" style={{width:"500px"}}/>
                {/* <input type="text" placeholder='Enter FirstName' /> */}
                <Typography variant="h6">Last Name</Typography>
                <TextField label="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} variant="outlined" style={{width:"500px"}}/>
                {/* <input type="text" placeholder='Enter FirstName' style={{width:"500px",height:"40px"}}/> */}
                <Button variant="outlined" onClick={formSubmit} style={{margin:"20px 0"}}>Save</Button>
       </DialogContentText>
     </DialogContent>
     <DialogActions>
       <Button variant="outlined" color="error" onClick={()=>setOpen(false)}>Exit</Button>
     </DialogActions>
   </Dialog>
    </>);
}
export default Student;