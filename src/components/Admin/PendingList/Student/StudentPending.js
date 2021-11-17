import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';

const StudentPending = () => {
    const [studentPending, setStudentPending] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('adminToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/user')
            .then(response => {
                console.log(response.data)
                setStudentPending(response.data)
            })
            .catch(err => {
                console.log(err.response.data.err)
            })
    }, [])

    const handleAccept = (id) => {
        console.log(id)
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/user/${id}/yes/signup`)
            .then(response => {
                console.log(response.data)
                axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/user')
                    .then(response => {
                        console.log(response.data)
                        setStudentPending(response.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => {
                console.log(err.response.data.err)
                alert(err.response.data.err)
            })



    }
    const handleDecline = (id) => {
        console.log(id)
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/user/${id}/No/signup`)
            .then(response => {
                console.log(response.data)
                axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/user')
                    .then(response => {
                        console.log(response.data)
                        setStudentPending(response.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })



    }
    return (
        <>
            <h1 className="text-center mt-3">Student Registration Pending List </h1>
            <div className="row mt-5">

                <div className="col-md-9 m-auto text-center">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Accept</th>
                                <th scope="col">Decline</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                studentPending.map(student =>
                                    <tr>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td><button onClick={() => handleAccept(student._id)} className="btn btn-success">Accept</button></td>
                                        <td><button onClick={() => handleDecline(student._id)} className="btn btn-danger">Decline</button></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default StudentPending;