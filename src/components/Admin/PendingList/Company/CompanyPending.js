import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';

const CompanyPending = () => {
    const [companyPending, setCompanyPending] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/company')
            .then(response => {
                console.log(response.data)
                setCompanyPending(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleAccept = (id) => {
        console.log(id)
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/company/${id}/yes/signup`)
            .then(response => {
                console.log(response.data)

            })
            .catch(err => {
                console.log(err)
            })
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/company')
            .then(response => {
                console.log(response.data)
                axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/company')
                    .then(response => {
                        console.log(response.data)
                        setCompanyPending(response.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })


    }
    const handleDecline = (id) => {
        console.log(id)
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/company/${id}/No/signup`)
            .then(response => {
                console.log(response.data)
                axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/temporary/company')
                    .then(response => {
                        console.log(response.data)
                        setCompanyPending(response.data)
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
            <h1 className="text-center mt-3">Company Registration List Pending</h1>
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
                                companyPending.map(company =>
                                    <tr>
                                        <td>{company.name}</td>
                                        <td>{company.email}</td>
                                        <td><button onClick={() => handleAccept(company._id)} className="btn btn-success">Accept</button></td>
                                        <td><button onClick={() => handleDecline(company._id)} className="btn btn-danger">Decline</button></td>
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

export default CompanyPending;