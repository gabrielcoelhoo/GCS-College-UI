import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios";


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
const AvailableExtras = () => {

    var enrolId = "";

    const Report = id => {
        window.location = '../enrolmentreport/' + id
      }

    const classes = useStyles();

    function submitExtra() {
        axios
            .post("http://localhost:8080/api/enrolments/create", {
                "email": localStorage.getItem("emailUser"),
                "courseID": localStorage.getItem("courseID"),
                "extras": [
                    {
                        "id": 1,
                        "quantity": quantAcco
                    },
                    {
                        "id": 2,
                        "quantity": quantBook
                    },
                    {
                        "id": 3,
                        "quantity": quantTranfer
                    }
                ]
            })
            .then((response) => {
                console.log(response);
                enrolId = response.data.id;
                localStorage.setItem("enrolId", enrolId);
                Report(enrolId);
            });
    }


    const [quantAcco, setQuantAcco] = useState('');
    const [quantBook, setQuantBook] = useState('');
    const [quantTranfer, setQuantTransfer] = useState('');


    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    extras
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="quantAcco"
                                onChange={(e) => setQuantAcco(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="quantBook"
                                onChange={(e) => setQuantBook(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="quantTranfer"
                                onChange={(e) => setQuantTransfer(e.target.value)}
                            />
                        </Grid>

                    </Grid>
                    <Button
                        onClick={submitExtra}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default AvailableExtras;