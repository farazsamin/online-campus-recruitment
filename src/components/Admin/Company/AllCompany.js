import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../utilities/setToken';

const AllCompany = () => {
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/all/company')
            .then(response => {
                console.log(response.data.company)
                setCompanies(response.data.company)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1 className="text-center">All Company List</h1>
            {
                companies.map(company =>
                    <div className="row">
                        <div className="col-md-8 m-auto text-center">
                            <div className="m-2 p-3" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                <h6>Company : {company.name}</h6>
                                <h6>Email : {company.email}</h6>

                            </div>
                        </div>
                    </div>


                )
            }
        </div>
    );
};

export default AllCompany;