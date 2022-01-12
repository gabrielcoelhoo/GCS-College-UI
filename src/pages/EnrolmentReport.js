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

const EnrolmentReport = () => {
  const classes = useStyles();

  
var id = 1;

  const [enrolments, setEnrolments] = useState([])


  useEffect(() => {

    EnrolmentsGet()

  }, [])

  const EnrolmentsGet = () => {

    fetch(`http://localhost:8080/api/enrolments/${id}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setEnrolments(result);
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
                Final Enrolment
              </Typography>
            </Box>
            <Box>
              <Link to="/enrolmentcreate">
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
                  <TableCell align="center">start</TableCell>
                  <TableCell align="left">end</TableCell>
                  <TableCell align="left">period</TableCell>
                  <TableCell align="left">level</TableCell>
                  <TableCell align="left">price</TableCell>
                </TableRow>
                
              </TableHead>
              <TableBody>
                {enrolments.map((enrolment) => (
                  <TableRow key={enrolment.id}>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <TableCell align="left">start</TableCell>
                      </Box>
                    </TableCell>
                  <TableCell align="left">{enrolment.course.courseStart}</TableCell>
                  <TableCell align="left">{enrolment.course.courseEnd}</TableCell>
                  <TableCell align="left">{enrolment.course.period}</TableCell>
                  <TableCell align="left">{enrolment.course.level}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">enrolment id</TableCell>
                  <TableCell align="center">status</TableCell>
                  <TableCell align="left">course id</TableCell>
                  <TableCell align="left">student id</TableCell>
                  <TableCell align="left">user id</TableCell>
                </TableRow>
                
              </TableHead>
              <TableBody>
                {/* {enrolments.map((enrolment) => ( */}
                  <TableRow key={id}>
                    <TableCell align="right">{id}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <TableCell align="left">status</TableCell>
                      </Box>
                    </TableCell>
                    <TableCell align="left">course</TableCell>
                    <TableCell align="left">studentid</TableCell>
                    <TableCell align="left">enrolment</TableCell>
                    </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">enrolment id</TableCell>
                  <TableCell align="center">status</TableCell>
                  <TableCell align="left">course id</TableCell>
                  <TableCell align="left">student id</TableCell>
                  <TableCell align="left">user id</TableCell>
                </TableRow>
                
              </TableHead>
              <TableBody>
                {/* {enrolments.map((enrolment) => ( */}
                  <TableRow key={id}>
                    <TableCell align="right">{id}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <TableCell align="left">status</TableCell>
                      </Box>
                    </TableCell>
                    <TableCell align="left">course</TableCell>
                    <TableCell align="left">studentid</TableCell>
                    <TableCell align="left">enrolment</TableCell>
                    </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">enrolment id</TableCell>
                  <TableCell align="center">status</TableCell>
                  <TableCell align="left">course id</TableCell>
                  <TableCell align="left">student id</TableCell>
                  <TableCell align="left">user id</TableCell>
                </TableRow>
                
              </TableHead>
              <TableBody>
                {/* {enrolments.map((enrolment) => ( */}
                  <TableRow key={id}>
                    <TableCell align="right">{id}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <TableCell align="left">status</TableCell>
                      </Box>
                    </TableCell>
                    <TableCell align="left">course</TableCell>
                    <TableCell align="left">studentid</TableCell>
                    <TableCell align="left">enrolment</TableCell>
                    </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>

  );
}

export default EnrolmentReport;