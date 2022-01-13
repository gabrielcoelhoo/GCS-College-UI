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
const Login = () => {
    const classes = useStyles();

    var token = "";
    var emailUser = "";

    //   Authorization: "Bearer " + accessToken
    function userLogin() {
        fetch('http://localhost:8080/api/users/userLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "password": password,
                "email": email
            }),
        })
            //need to fix the json answer
            .then(res => res.json())
            .then((result) => {
                    token = result.token;
                    window.localStorage.setItem("token", token);
                    emailUser = result.email;
                    window.localStorage.setItem("emailUser", emailUser);
                    if(result.token){
                        alert('succesful');
                        window.location.href = '../AvailableCourses';
                    }else{
                        alert('please provide a correct username and/ or password');
                    }

                    
                }
            )
    }
    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    User
                </Typography>
                <form className={classes.form}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        
                    </Grid>
                    <Button
                        onClick={userLogin}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default Login;