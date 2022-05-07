import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Books=()=>{
    const book=[
        {
            bName:"C++",
            Author:"Deteil",
            BorrowedBy:"Ali",
            DateBorrowed:"07-05-2022",
            returnDate:"08-05-2022"
        }
    ];
    return (<>
        <h1>
            <TableContainer style={{maxWidth:"70%",margin:"10px auto"}}>
                <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow style={{background:"orange"}}>
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
                                    <Button variant="outlined" startIcon={<DeleteIcon/>}></Button>
                                    <Button variant="outlined" style={{margin:"0 5px"}} startIcon={<EditIcon/>}></Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                </Table>
            </TableContainer>
        </h1>
    </>)
}
export default Books;