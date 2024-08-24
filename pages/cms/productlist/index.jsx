import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetProductQueries, useRemoveDataMutation } from '@/hooks/customHooks/cmsQuery.hooks';
import { product } from '@/api/axios/axios';
import Link from 'next/link';
import SweetAlertComponent from "../../../Sweetalert/Sweetalert";
import { Box, Container, Typography } from '@mui/material';
import  styles from './productlist.module.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
 

export default function index() {

    const {data, isError, isLoading} = useGetProductQueries();
    const { mutate } = useRemoveDataMutation();
   
    const [sweetalert,setSweetalert] =useState();
    const [id, setId] =useState();
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  const handleRemove = (productId) => {
    mutate(productId);
setSweetalert(false);
      };

  return (
    <>
    <Typography sx={{display:"flex",alignItems:"center", justifyContent:"center", variant:"h2", fontSize:"40px", marginTop:"50px", color:"Red", fontFamily:"cursive"}}>
  List of Products
</Typography>
<Container><Typography sx={{display:"flex",alignItems:"center", justifyContent:"center", variant:"p", fontSize:"20px", marginTop:"20px", color:"GrayText"}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit
sed do eiusmod.
</Typography>
</Container>
<Box sx={{height:"50px"}}>

</Box>
      <TableContainer component={Paper} className={styles.MuiTableContainer_root}>
      <Table sx={{ minWidth: 700, overflow:"hidden"}} aria-label="customized table" className={styles.MuiTable_root}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell className={styles.MuiTableCell_root} align="right">Title </StyledTableCell>
            <StyledTableCell className={styles.MuiTableCell_root}  align="right" sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Description</StyledTableCell>
            <StyledTableCell className={styles.MuiTableCell_root} align="right">Delete</StyledTableCell>
            <StyledTableCell className={styles.MuiTableCell_root} align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <StyledTableRow className={styles.MuiTableCell_root} key={row._id}>
              <StyledTableCell  className={styles.MuiTableCell_root} component="th" scope="row">
                <img style={{width:"80px", height:"80px"}} src={product(row.image)}/>
              </StyledTableCell>
              <StyledTableCell className={styles.MuiTableCell_root} align="right">{row.title}</StyledTableCell>
              <StyledTableCell className={styles.MuiTableCell_root} align="right" sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{row.description} </StyledTableCell>
              <StyledTableCell className={styles.MuiTableCell_root} align="right"><button className={styles.MuiButton_root} style={{backgroundColor:"red", color:"white"}} onClick={() => { setId (row._id);setSweetalert(true)}}
                >Remove</button></StyledTableCell>
              <StyledTableCell align="right"><button className={styles.MuiButton_root} style={{backgroundColor:"green"}}><Link style={{textDecoration:"none", color:"white"}} href={`/cms/productlist/${row._id}`}>Update</Link></button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br /> <br />
    {sweetalert && (
        <SweetAlertComponent
          confirm={() => {
            handleRemove(id);
              }}
          cancle={() => setSweetalert(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </>
  )
}
