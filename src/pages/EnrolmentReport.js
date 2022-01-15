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

  useEffect(() => {
    fetch(`http://localhost:8080/api/enrolments/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setEnrolmentId(result.id)
          setCourseStart(result.course.courseStart)
          setCourseEnd(result.course.courseEnd)
          setPeriod(result.course.period)
          setLevel(result.course.level)
          setPrice(result.course.price)

          setName(result.employee.name)

          setUserId(result.user.id)
          setNameUser(result.user.name)
          setSurname(result.user.surname)
          setAddress(result.user.address)
          setPhoneNumber(result.user.phoneNumber)
          setCountry(result.user.country)
          setUserComments(result.user.userComments)
          setEmail(result.user.email)

          setEnrolmentsStatus(result.status)
          setEnrolmentTotal(result.total)

        }
      )
  }, [id])

  const [enrolmentId, setEnrolmentId] = useState('');
  const [courseStart, setCourseStart] = useState('');
  const [courseEnd, setCourseEnd] = useState('');
  const [period, setPeriod] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');

  const [name, setName] = useState('');

  const [userId, setUserId] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [userComments, setUserComments] = useState('');
  const [email, setEmail] = useState('');

  const [enrolmentsStatus, setEnrolmentsStatus] = useState('');
  const [enrolmentTotal, setEnrolmentTotal] = useState('');

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
                  <TableCell align="center">enrolment id</TableCell>
                  <TableCell align="center">name of employee</TableCell>
                  <TableCell align="left">status</TableCell>
                  <TableCell align="left">total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">{enrolmentId}</TableCell>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="left">{enrolmentsStatus}</TableCell>
                  <TableCell align="left">{enrolmentTotal}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">start</TableCell>
                  <TableCell align="center">end</TableCell>
                  <TableCell align="center">level</TableCell>
                  <TableCell align="center">period</TableCell>
                  <TableCell align="center">price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell align="center">{courseStart}</TableCell>
                  <TableCell align="center">{courseEnd}</TableCell>
                  <TableCell align="center">{level}</TableCell>
                  <TableCell align="center">{period}</TableCell>
                  <TableCell align="center">{price}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">User id</TableCell>
                  <TableCell align="center">name</TableCell>
                  <TableCell align="center">surname</TableCell>
                  <TableCell align="center">address</TableCell>
                  <TableCell align="center">phoneNumber</TableCell>
                  <TableCell align="center">userComments</TableCell>
                  <TableCell align="center">country</TableCell>
                  <TableCell align="center">email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell align="center">{userId}</TableCell>
                  <TableCell align="center">{nameUser}</TableCell>
                  <TableCell align="center">{surname}</TableCell>
                  <TableCell align="center">{address}</TableCell>
                  <TableCell align="center">{phoneNumber}</TableCell>
                  <TableCell align="center">{userComments}</TableCell>
                  <TableCell align="center">{country}</TableCell>
                  <TableCell align="center">{email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">extras</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableBody>
            </Table>



          </TableContainer>
        </Paper>
      </Container>
    </div >
  );
}

export default EnrolmentReport;