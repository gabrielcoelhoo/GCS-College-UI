import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EmployeeUpdate = () => {
  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/employees/getById/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setName(result.name)
          setQuantityEnrolments(result.quantityEnrolments)
        }
      )
  }, [id])


//the quantityEnrolments is not updatting


  function UpdateEmployee() {
    fetch(`http://localhost:8080/api/employees/update/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": name,
        "quantityEnrolments": quantityEnrolments
      }),
    })
      .then(res => res.json())
      .then(
        (result) => {
          alert(`employee with id = ${result.id} updated`);
          } 
      )
  }

  const [name, setName] = useState('');
  const [quantityEnrolments, setQuantityEnrolments] = useState('');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
         employee
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="quantityEnrolments"
                name="quantityEnrolments"
                variant="outlined"
                required
                fullWidth
                id="quantityEnrolments"
                label="quantityEnrolments"
                value={quantityEnrolments}
                onChange={(e) => setQuantityEnrolments(e.target.value)}
                autoFocus
              />
            </Grid>
          </Grid>
          <Button
            onClick={UpdateEmployee}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default EmployeeUpdate;