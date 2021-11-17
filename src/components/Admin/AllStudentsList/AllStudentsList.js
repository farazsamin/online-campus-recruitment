import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../utilities/setToken';
import AdminNavbar from '../Navbar/Navbar'
import Student from './Student';
const AllStudentsList = () => {
    const [studentList, setStudentList] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('adminToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/all/users')
            .then(response => {
                console.log(response.data.users)
                setStudentList(response.data.users)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <h1 className="text-center">Students List</h1>
            <div className="row">
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-6 m-auto text-center">
                    {
                        studentList.map(studentList => <Student studentList={studentList}></Student>)
                    }
                </div>
            </div>


        </div>
    );
};

export default AllStudentsList;