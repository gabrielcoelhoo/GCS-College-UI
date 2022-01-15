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

const EmployeeList = () => {
  const classes = useStyles();

  const [employees, setEmployees] = useState([])

  useEffect(() => {

    EmployeesGet()

  }, [])

  const EmployeesGet = () => {

    fetch("http://localhost:8080/api/employees/all")
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setEmployees(result);
      }
      )
  }

  const EmployeeUpdate = id => {
    window.location = '/employeeUpdate/' + id
  }

  const EmployeeDelete = id => {

    fetch(`http://localhost:8080/api/employees/delete/${id}`, {
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
            EmployeesGet();
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
                employees
              </Typography>
            </Box>
            <Box>
              <Link to="/EmployeeCreate">
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
                  <TableCell align="center">quant.Enrolments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell align="right">{employee.id}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <TableCell align="left">{employee.name}</TableCell>
                      </Box>
                    </TableCell>
                    <Box display="flex" justifyContent="center">
                      <TableCell align="left">{employee.quantityEnrolments}</TableCell>
                    </Box>
                    <TableCell align="center">
                      <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={() => EmployeeUpdate(employee.id)}>Edit</Button>
                        <Button onClick={() => EmployeeDelete(employee.id)}>Del</Button>
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

export default EmployeeList;