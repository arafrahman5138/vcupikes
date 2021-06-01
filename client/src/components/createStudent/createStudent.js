import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '40ch',
      backgroundColor: "white",
      borderRadius: "10px",
      borderColor: "#ffcb4f",
      borderWidth: "1px"
    },
    backgroundColor: "#772432",
  },
  header : {
    padding: 10,
    
  },
  create: {
    backgroundColor: "#ffcb4f",
    color: "white"
  }
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: "black", 
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffcb4f',
    },
    '& .MuiOutlinedInput-root': {
      // '& fieldset': {
      //   borderColor: 'red',
      // },
      '&:hover fieldset': {
        borderColor: '#a79e70',
      },
      '&.Mui-focused fieldset': {
        borderColor: "#ffcb4f",
      },
    },
  },
})(TextField);

export default function CreateStudent() {
  const classes = useStyles();

  const [student, setStudent] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      year: "",
      ig: ""
  })
  
  const createStudent = () => {
    axios.post('http://localhost:5000/students', student).then(() => {
      window.location.reload(false)
    })
  }

  return (
    <>
    <h2 className={classes.header} >Sign Up Here!</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <CssTextField id="custom-css-outlined-input" label="Name" variant="outlined" value={student.name} onChange={event => setStudent({...student, name: event.target.value})} />
      <CssTextField id="custom-css-outlined-input" label="Email" variant="outlined" value={student.email} onChange={event => setStudent({...student, email: event.target.value})}/>
      <CssTextField id="custom-css-outlined-input" label="Phone Number" variant="outlined" value={student.phoneNumber} onChange={event => setStudent({...student, phoneNumber: event.target.value})}/>
      <CssTextField id="custom-css-outlined-input" label="Year" variant="outlined" value={student.year} onChange={event => setStudent({...student, year: event.target.value})} />
      <CssTextField id="custom-css-outlined-input" label="Instagram" variant="outlined" value={student.ig} onChange={event => setStudent({...student, ig: event.target.value})}/>

      <Button className={classes.create} variant="contained" color="#ffcb4f" onClick={createStudent}>
        Rush Hard
      </Button>
    </form>
    </>
  );
}
