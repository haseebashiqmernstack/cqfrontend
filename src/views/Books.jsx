import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Books=()=>{
    const book=[
        {
            bName:"C++",
            Author:"Deteil",
        }
    ];
    const [open,setOpen]=useState(false);
    const [bookName,setBookName]=useState('');
    const [authorName,setAuthorName]=useState('');
    const [message,setMessage]=useState('');
    const formSubmit=()=>{
      if(bookName==="" || authorName==="")
      {
        setMessage('all fields are required!');
      }
      else{
        console.log({
          bookName,
          authorName
        })
        setOpen(false);
      }
    }
    return (<>
            <TableContainer style={{maxWidth:"70%",margin:"80px auto"}}>
                <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow style={{background:"#1976D2"}}>
                        <TableCell align="left" colSpan={3}>
                            <Button variant="outlined" color={"warning"} onClick={()=>setOpen(true)}>Add</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{background:"#1976D2"}}>
                    <TableCell>Book Name</TableCell>
                    <TableCell align="center">Author</TableCell>
                    <TableCell align="right">Action</TableCell>
                    </TableRow>           
                </TableHead>
                <TableBody>
                    {
                        book.map((b) => (
                            <TableRow>
                                <TableCell>{b.bName}</TableCell>
                                <TableCell align="center">{b.Author}</TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" color={"error"} startIcon={<DeleteIcon/>}></Button>
                                    <Button variant="outlined" color={"secondary"} style={{margin:"0 5px"}} startIcon={<EditIcon/>}></Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                </Table>
            </TableContainer>
        <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        >
           <DialogTitle>
               {"Books Entry Form"}
           </DialogTitle>
           <DialogContent>
               <DialogContentText>
                   <Typography variant="h6" color={"error"}>{message && message}</Typography>
                   <Typography variant="h6">Book Name</Typography>
                   <TextField variant="outlined" value={bookName} onChange={(e)=>setBookName(e.target.value)} label="Book Name" style={{width:"500px"}}/>
                   <Typography variant="h6">Author Name</Typography>
                   <TextField variant="outlined" value={authorName} onChange={(e)=>setAuthorName(e.target.value)} label="Author Name" style={{width:"500px"}}/>
                   <Button variant="outlined" onClick={formSubmit} style={{margin:"20px 0"}}>Save</Button>
               </DialogContentText>
           </DialogContent>
           <DialogActions>
               <Button variant="outlined" color="error" onClick={()=>setOpen(false)}>Exit</Button>
           </DialogActions>
        </Dialog>
    </>)
}
export default Books;