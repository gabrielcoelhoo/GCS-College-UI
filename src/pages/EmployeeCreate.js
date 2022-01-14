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
const EmployeeCreate = () => {
    const classes = useStyles();

    function submitEmployee() {
        fetch('http://localhost:8080/api/employees/create', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": name, 
                "quantityEnrolments":quantityEnrolments
            }),
        })
            //need to fix the json answer
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    alert(result['message'])
                    if (result['status'] === 'ok') {
                        window.location.href = '../src/components/employees';
                    }
                }
            )
    }

    const [name, setName] = useState('');
    const [quantityEnrolments, setQuantityEnrolments] = useState('');
 

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                   Employee
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
                                onChange={(e) => setQuantityEnrolments(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={submitEmployee}
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

export default EmployeeCreate;