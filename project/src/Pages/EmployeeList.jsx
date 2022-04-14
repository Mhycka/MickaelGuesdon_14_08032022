import React, { useState } from 'react'
import Header from '../Components/Header';
import DataTables from '../Addon/App';
import dataUser from '../Data/dataUser';
import labelNames from '../Data/labelNames'


/** Second page with all the employees in the data table
 * @param {function} setEmployees- used to fake datas
 * @param {object} employees - employees created are used in a table
 */
function EmployeeList({employees,setEmployees}) {
    
    //this is used for the demonstration of how works the DataTable
    const [value,setValue]=useState(0)
    function handleClick(){
        setEmployees(dataUser)
        setValue(value=>value +1)
    }

    return (
        <React.Fragment>
            <Header />
            <div className="employee-list-container">
                <DataTables key={value}label={labelNames} data={employees} />
                <button onClick={handleClick} className="fake-button">click here for demonstration</button>
            </div>  
        </React.Fragment>  
    )
}

export default EmployeeList