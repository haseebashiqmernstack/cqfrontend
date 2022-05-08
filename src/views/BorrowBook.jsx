import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
const BorrowBook=()=>{
    const book=[
        {
            bName:"C++",
            Author:"Deteil",
            BorrowedBy:"Ali",
            DateBorrowed:"07-05-2022",
            returnDate:"08-05-2022"
        }
    ];
    const [open,setOpen]=useState(false);
    const [borrowDate,setBorrowDate]=useState('');
    const [bookName,setBookName]=useState('');
    const [authorName,setAuthorName]=useState('');
    const [borrowBy,setBorrowBy]=useState('');
    const [expReturn,setExpReturn]=useState('');
    const [message,setMessage]=useState('');
    const formSubmit=()=>{
        if(bookName===""|| authorName==="" || borrowBy==="" || borrowDate==="" || expReturn==="")
        {
           setMessage('every field required')
        }
        else{
        console.log({
            bookName,
            authorName,
            borrowBy,
            borrowDate,
            expReturn
        })
        setOpen(false);
    }
    }
    return (<>
            <TableContainer style={{maxWidth:"70%",margin:"80px auto"}}>
                <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow style={{background:"#1976D2"}}>
                        <TableCell align="left" colSpan={6}>
                            <Button variant="outlined" startIcon={<AddIcon/>} color={"warning"} onClick={()=>setOpen(true)}>Add</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{background:"#1976D2"}}>
                    <TableCell>Book Name</TableCell>
                    <TableCell align="center">Author</TableCell>
                    <TableCell align="center">Borrowed By</TableCell>
                    <TableCell align="center">Date of Borrow</TableCell>
                    <TableCell align="center">Expected Return Date</TableCell>
                    <TableCell align="center">Action</TableCell>
                    </TableRow>           
                </TableHead>
                <TableBody>
                    {
                        book.map((b) => (
                            <TableRow>
                                <TableCell>{b.bName}</TableCell>
                                <TableCell align="center">{b.Author}</TableCell>
                                <TableCell align="center">{b.BorrowedBy}</TableCell>
                                <TableCell align="center">{b.DateBorrowed}</TableCell>
                                <TableCell align="center">{b.returnDate}</TableCell>
                                <TableCell align="center">
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
                   <Typography variant="h6">{message && message}</Typography>
                   <Typography variant="h6">Book Name</Typography>
                   <Select style={{width:"500px"}} value={bookName} onChange={(e)=>setBookName(e.target.value)}>
                       <MenuItem value={"C++"}>C++</MenuItem>
                       <MenuItem value={"Javascript"}>Javascript</MenuItem>
                       <MenuItem value={"Data Structure"}>Data Structure (C,C++)</MenuItem>
                   </Select>
                   {/* <TextField variant="outlined" label="Book Name" style={{width:"500px"}}/> */}
                   <Typography variant="h6">Author Name</Typography>
                   <Select style={{width:"500px"}} value={authorName} onChange={(e)=>setAuthorName(e.target.value)}>
                       <MenuItem value="Detel">Detel</MenuItem>
                       <MenuItem value="Akrandas">Akramdas</MenuItem>
                   </Select>
                   {/* <TextField variant="outlined" label="Author Name" style={{width:"500px"}}/> */}
                   <Typography variant="h6">Borrowed By (Student)</Typography>
                   <Select style={{width:"500px"}} value={borrowBy} onChange={(e)=>setBorrowBy(e.target.value)}>
                       <MenuItem value={"Ali"}>Ali</MenuItem>
                       <MenuItem value={"Muhammad"}>Muhammad</MenuItem>
                       <MenuItem value={"Rizwan"}>Rizwan</MenuItem>
                   </Select>
                   <div style={{display:"flex",flexDirection:"row"}}>
                 <input type="date" value={borrowDate} onChange={(e)=>setBorrowDate(e.target.value)} style={{height:"30px",width:"245px",margin:"20px 0"}}/>
                 <input type="date" value={expReturn} onChange={(e)=>setExpReturn(e.target.value)} style={{height:"30px",width:"245px",margin:"20px 1px"}}/>
                 </div>
                   <Button variant="outlined" onClick={formSubmit} style={{margin:"20px 0",display:"flex",flexDirection:"column"}}>Save</Button>
               </DialogContentText>
           </DialogContent>
           <DialogActions>
               <Button variant="outlined" color="error" onClick={()=>setOpen(false)}>Exit</Button>
           </DialogActions>
        </Dialog>
    </>)
}
export default BorrowBook;