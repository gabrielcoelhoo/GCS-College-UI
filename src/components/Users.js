import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Users = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([])



  useEffect(() => {

    UsersGet()

  }, [])

  const UsersGet = () => {

    fetch("http://localhost:8080/api/users/all")
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setUsers(result);
      }
      )
  }

  const Updateuser = id => {
    window.location = '/userupdate/' + id
  }

  const UserDelete = id => {
    var data = {
      'id': id
    }
    fetch(`http://localhost:8080/api/users/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          alert(result['message'])
          if (result['status'] === 'ok') {
            UsersGet();
          }
        }
      )
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                users
              </Typography>
            </Box>
            <Box>
              <Link to="/usercreate">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">id</TableCell>
                  <TableCell align="center">name</TableCell>
                  <TableCell align="left">surname</TableCell>
                  <TableCell align="left">phoneNumber</TableCell>
                  <TableCell align="left">userComments</TableCell>
                  <TableCell align="center">country</TableCell>
                  <TableCell align="left">password</TableCell>
                  <TableCell align="center">email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell align="right">{user.id}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <TableCell align="left">{user.name}</TableCell>
                      </Box>
                    </TableCell>
                    <TableCell align="left">{user.surname}</TableCell>
                    <TableCell align="left">{user.phoneNumber}</TableCell>
                    <TableCell align="left">{user.userComments}</TableCell>
                    <TableCell align="left">{user.country}</TableCell>
                    <TableCell align="left">{user.password}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={() => Updateuser(user.id)}>Edit</Button>
                        <Button onClick={() => UserDelete(user.id)}>Del</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>

  );
}

export default Users;