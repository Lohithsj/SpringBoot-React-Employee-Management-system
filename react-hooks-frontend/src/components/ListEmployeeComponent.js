import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Employeeservice from '../services/Employeeservice';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(()=>{

        getAllEmployees();
        
    },[])

    const getAllEmployees = () => {
        Employeeservice.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteEmployee = (employeeId)=>{
        Employeeservice.deleteEmployee(employeeId).then((response)=>{
                getAllEmployees();
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
    <div className="container">

        <h2 className='text-center'> List Employees</h2>
        <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee ID</th>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee Email ID</th>
                <th>Actions</th>
            </thead>
            <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                <Link className='btn btn-info ' to={`/edit-employee/${employee.id}`}>Update</Link>

                                <Link
                                    className='btn btn-danger'
                                    onClick={() => deleteEmployee(employee.id)}
                                    style={{ marginLeft: '10px' }}
                                    >
                                    Delete
                                </Link>
                                </td>
                            </tr>       
                        )
                    }
            </tbody>
        </table>
      
    </div>
  )
}

export default ListEmployeeComponent
