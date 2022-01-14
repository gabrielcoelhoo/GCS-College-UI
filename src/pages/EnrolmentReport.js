import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';

import { useParams } from 'react-router-dom';


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

const EnrolmentReport = () => {
  const classes = useStyles();

  const { id } = useParams();

  const [enrolments, setEnrolments] = useState([])


  useEffect(() => {
    fetch(`http://localhost:8080/api/enrolments/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
         setEnrolments(result);
        }
      )
  }, [id])


  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                enrolments
              </Typography>
            </Box>

          </Box>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">enrolment id</TableCell>
                </TableRow>
                <TableBody>
                  <TableRow>
                <TableCell align="left">{enrolments.id}</TableCell>
                </TableRow>
                </TableBody>
              </TableHead>
            </Table>

            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">course id</TableCell>

                  <TableCell align="center">start</TableCell>
                  <TableCell align="center">end</TableCell>
                  <TableCell align="center">level</TableCell>
                  <TableCell align="center">period</TableCell>
                  <TableCell align="center">price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell align="left">{enrolments.course.id}</TableCell>
                  <TableCell align="center">{enrolments.course.courseStart}</TableCell>
                  <TableCell align="center">{enrolments.course.courseEnd}</TableCell>
                  <TableCell align="center">{enrolments.course.level}</TableCell>
                  <TableCell align="center">{enrolments.course.period}</TableCell>
                  <TableCell align="center">{enrolments.course.price}</TableCell>  
                </TableRow>
              </TableBody>
            </Table>

            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Employee id</TableCell>
                  <TableCell align="center">name</TableCell>
                  <TableCell align="center">quantityEnrolments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell align="left">{enrolments.employee.id}</TableCell>
                  <TableCell align="center">{enrolments.employee.name}</TableCell>
                  <TableCell align="center">{enrolments.employee.quantityEnrolments}</TableCell>
                </TableRow>
              </TableBody>
            </Table>


            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">User id</TableCell>
                  <TableCell align="center">name</TableCell>
                  <TableCell align="left">surname</TableCell>
                  <TableCell align="left">phoneNumber</TableCell>
                  <TableCell align="left">userComments</TableCell>
                  <TableCell align="center">country</TableCell>
                  <TableCell align="center">email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell align="left">{enrolments.user.id}</TableCell>
                  <TableCell align="center">{enrolments.user.name}</TableCell>
                  <TableCell align="center">{enrolments.user.surname}</TableCell>
                  <TableCell align="center">{enrolments.user.phoneNumber}</TableCell>
                  <TableCell align="center">{enrolments.user.userComments}</TableCell>
                  <TableCell align="center">{enrolments.user.country}</TableCell>
                  <TableCell align="center">{enrolments.user.email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">extras status</TableCell>
                  <TableCell align="left">total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left">{enrolments.status}</TableCell>
                  <TableCell align="left">{enrolments.total}</TableCell> 
                </TableRow>
              </TableBody>
            </Table>

          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}

export default EnrolmentReport;