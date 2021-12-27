import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ffcb4f",
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  header : {
    padding: 15,
    // marginTop: -15,
    backgroundColor: "#772432",
    color: 'white',
    fontFamily: "Georgia",
    fontSize: '20px',
    marginBottom: 0,
  },
});

export default function ShowStudent() {
  const classes = useStyles();

  const [studentsList, setList] = useState([]) 

  useEffect(() => {
    axios.get('http://localhost:5000/students').then((allStudents) => {
      setList(allStudents.data)
    })
    console.log(studentsList)
  }, [])

  return (
    <>
    <h2 className={classes.header}>All Rushes</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Instagram</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {student.name}
              </StyledTableCell>
              <StyledTableCell align="right">{student.email}</StyledTableCell>
              <StyledTableCell align="right">{student.phoneNumber}</StyledTableCell>
              <StyledTableCell align="right">{student.year}</StyledTableCell>
              <StyledTableCell align="right">{student.ig}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
