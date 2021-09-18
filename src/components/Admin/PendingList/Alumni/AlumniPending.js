import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';

const AlumniPending = () => {
    const [alumniPending, setAlumniPending] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/alumni')
            .then(response => {
                console.log(response.data)
                setAlumniPending(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleAccept = (id) => {
        console.log(id)
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/alumni/${id}/yes/signup`)
            .then(response => {
                console.log(response.data)

            })
            .catch(err => {
                console.log(err)
            })
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/alumni')
            .then(response => {
                console.log(response.data)
                setAlumniPending(response.data)
            })
            .catch(err => {
                console.log(err)
            })

    }
    const handleDecline = (id) => {
        console.log(id)
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/alumni/${id}/No/signup`)
            .then(response => {
                console.log(response.data)

            })
            .catch(err => {
                console.log(err)
            })
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/alumni')
            .then(response => {
                console.log(response.data)
                setAlumniPending(response.data)
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <>
            <h1 className="text-center mt-3">Alumni Registration List Pending</h1>
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
                                alumniPending.map(alumni =>
                                    <tr>
                                        <td>{alumni.name}</td>
                                        <td>{alumni.email}</td>
                                        <td><button onClick={() => handleAccept(alumni._id)} className="btn btn-success">Accept</button></td>
                                        <td><button onClick={() => handleDecline(alumni._id)} className="btn btn-danger">Decline</button></td>
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

export default AlumniPending;