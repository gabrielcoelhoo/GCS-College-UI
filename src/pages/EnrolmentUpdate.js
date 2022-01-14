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

const EnrolmentUpdate = () => {
  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/enrolments/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
        setStatus(result.status)
        setCourseId(result.courseId)
        setStudentId(result.studentId)
        }
      )
  }, [id])

  function UpdateEnrolment() {
    fetch(`http://localhost:8080/api/enrolments/update/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "status": status,
        "courseId": courseId,
        "studentId": studentId
      }),
    })
      .then(res => res.json())
      .then(
        (result) => {
          alert(`enrolment with id = ${result.id} updated`);
        }
      )
  }

  
  const [status, setStatus] = useState('');
  const [courseId, setCourseId] = useState('');
  const [studentId, setStudentId] = useState('');

  return (
    <Container maxWidth="xs">
      <div classstatus={classes.paper}>
        <Typography component="h1" variant="h5">
          enrolment
        </Typography>
        <form classstatus={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="status"
                status="status"
                variant="outlined"
                required
                fullWidth
                id="status"
                label="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="courseId"
                status="courseId"
                variant="outlined"
                required
                fullWidth
                id="courseId"
                label="courseId"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="studentId"
                status="studentId"
                variant="outlined"
                required
                fullWidth
                id="studentId"
                label="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                autoFocus
              />
            </Grid>
            
          </Grid>
          <Button
            onClick={UpdateEnrolment}
            fullWidth
            variant="contained"
            color="primary"
            classstatus={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default EnrolmentUpdate;