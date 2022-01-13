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
const AvailableExtras = () => {

    var enrolId = "";

    const classes = useStyles();

    function submitExtra() {
        console.log('some useful desc');
        console.log(quantAcco, quantBook, quantTranfer);

        fetch('http://localhost:8080/api/enrolments/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": localStorage.getItem("emailUser"),
              "courseID": localStorage.getItem("courseID"),
              "extras":[
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
            }),
        })
            //need to fix the json answer
            .then(res => res.json())
            .then(
                (result) => {
                    enrolId = result.enrolment.id;
                    console.log(enrolId);
                    localStorage.setItem("enrolId", enrolId );
                    window.location.href = '../EnrolmentReport';
                }
            )
     }

  
    const[quantAcco, setQuantAcco]= useState('');
    const[quantBook, setQuantBook]= useState('');
    const[quantTranfer, setQuantTransfer]= useState('');
    

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
                                label="quantAcco"
                                onChange={(e) => setQuantAcco(e.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="quantBook"
                                label="quantBook"
                                onChange={(e) => setQuantBook(e.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="quantTranfer"
                                label="quantTranfer"
                                onChange={(e) => setQuantTransfer(e.target.value)}
                            />
                        </Grid>
                        
                    </Grid>
                    <Button
                        onClick={submitExtra}
                        type="submit"
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