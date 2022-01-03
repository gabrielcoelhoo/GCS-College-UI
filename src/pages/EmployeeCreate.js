import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
const CourseCreate = () => {
    const classes = useStyles();

    function submitCourse() {
        fetch('http://localhost:8080/api/courses/create', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "courseStart": courseStart,
                "courseEnd": courseEnd,
                "period": period,
                "level": level,
                "vacancies": vacancies
            }),
        })
            //need to fix the json answer
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    alert(result['message'])
                    if (result['status'] === 'ok') {
                        window.location.href = '../src/components/Courses';
                    }
                }
            )
    }

    const [courseStart, setCourseStart] = useState('');
    const [courseEnd, setCourseEnd] = useState('');
    const [period, setPeriod] = useState('');
    const [vacancies, setVacancies] = useState('');
    const [level, setLevel] = useState('');

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
                                onChange={(e) => setCourseStart(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="courseEnd"
                                label="courseEnd"
                                onChange={(e) => setCourseEnd(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="period"
                                label="period"
                                onChange={(e) => setPeriod(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="vacancies"
                                label="vacancies"
                                onChange={(e) => setVacancies(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="level"
                                label="level"
                                onChange={(e) => setLevel(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={submitCourse}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default CourseCreate;