import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SetToken } from '../../utilities/setToken';
import AdminNavbar from '../Navbar/Navbar'
import Alumni from './Alumni';
const AllAlumniesList = () => {
    const [alumniList, setAlumniList] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/all/alumni')
            .then(response => {
                console.log(response.data.alumni)
                setAlumniList(response.data.alumni)
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
                        alumniList.map(alumniList => <Alumni alumniList={alumniList}></Alumni>)
                    }
                </div>
            </div>


        </div>
    );
};

export default AllAlumniesList;