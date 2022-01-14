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
const EnrolmentCreate = () => {
    const classes = useStyles();

    function submitEnrolment() {
        fetch('http://localhost:8080/api/enrolments/create', {
            method: 'POST',
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
            //need to fix the json answer
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    alert(result['message'])
                    if (result['status'] === 'ok') {
                        window.location.href = '../src/components/enrolments';
                    }
                }
            )
    }

    const [status, setStatus] = useState('');
    const [courseId, setCourseId] = useState('');
    const [studentId, setStudentId] = useState('');

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
                                autoComplete="status"
                                status="status"
                                variant="outlined"
                                required
                                fullWidth
                                id="status"
                                label="status"
                                onChange={(e) => setStatus(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="courseId"
                                label="courseId"
                                onChange={(e) => setCourseId(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="studentId"
                                label="studentId"
                                onChange={(e) => setStudentId(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={submitEnrolment}
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

export default EnrolmentCreate;