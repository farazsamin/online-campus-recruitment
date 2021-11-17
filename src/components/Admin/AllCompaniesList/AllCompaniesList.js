import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../utilities/setToken';
import AdminNavbar from '../Navbar/Navbar'
import Company from './Company';
const AllCompaniesList = () => {
    const [companyList, setCompanyList] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('adminToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/all/company')
            .then(response => {
                console.log(response.data.company)
                setCompanyList(response.data.company)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <h1 className="text-center">Alumni List</h1>
            <div className="row">
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-6 m-auto text-center">
                    {
                        companyList.map(company => <Company companyList={company}></Company>)
                    }
                </div>
            </div>


        </div>
    );
};

export default AllCompaniesList;