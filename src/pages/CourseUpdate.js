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

const CourseUpdate = () => {
  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/courses/getById/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setCourseStart(result.courseStart)
          setCourseEnd(result.courseEnd)
          setPeriod(result.period)
          setVacancies(result.vacancies)
          setLevel(result.level)
          setPrice(result.price)
        }
      )
  }, [id])

  function UpdateCourse() {
    fetch(`http://localhost:8080/api/courses/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "courseStart": courseStart,
        "courseEnd": courseEnd,
        "period": period,
        "vacancies": vacancies,
        "level": level,
        "price": price
      }),
    })
      .then(res => res.json())
      .then(
        (result) => {
          alert(`course with id = ${result.id} updated`);
        }
      )
  }

  const [courseStart, setCourseStart] = useState('');
  const [courseEnd, setCourseEnd] = useState('');
  const [period, setPeriod] = useState('');
  const [vacancies, setVacancies] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Course
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="courseStart"
                courseStart="courseStart"
                variant="outlined"
                required
                fullWidth
                id="courseStart"
                label="courseStart"
                value={courseStart}
                onChange={(e) => setCourseStart(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="CourseEnd"
                courseStart="CourseEnd"
                variant="outlined"
                required
                fullWidth
                id="CourseEnd"
                label="CourseEnd"
                value={courseEnd}
                onChange={(e) => setCourseEnd(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Period"
                courseStart="Period"
                variant="outlined"
                required
                fullWidth
                id="Period"
                label="Period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="setVacancies"
                courseStart="setVacancies"
                variant="outlined"
                required
                fullWidth
                id="Vacancies"
                label="Vacancies"
                value={vacancies}
                onChange={(e) => setVacancies(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="setLevel"
                courseStart="setLevel"
                variant="outlined"
                required
                fullWidth
                id="Level"
                label="Level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="setLevel"
                courseStart="setLevel"
                variant="outlined"
                required
                fullWidth
                value={price}
                id="price"
                label="price"
                onChange={(e) => setPrice(e.target.value)}
                autoFocus
              />
            </Grid>
          </Grid>
          <Button
            onClick={UpdateCourse}
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

export default CourseUpdate;