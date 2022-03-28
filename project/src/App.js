import { useState } from 'react';
import './App.scss';
import {
    HashRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import EmployeeCreation from './Pages/EmployeeCreation';
import EmployeeList from './Pages/EmployeeList';

function App() {

  const [employees,setEmployees]=useState([])

  //Will add the employee to an array, to avoid erase the  previous ones
  const createEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<EmployeeCreation handleSubmit={createEmployee}/>}/>
        <Route  path='/employee-list' element={<EmployeeList setEmployees={setEmployees}employees={employees} />}/>
      </Routes>
    </Router>
  )
}

export default App;