import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';
import CompanyNavbar from '../Navbar/Navbar';
import loadingPic from '../../utilities/images/loading.gif'
const CandidateSearch = () => {
    const [userInput, setUserInput] = useState([])
    const [users, setUsers] = useState([])
    const [click, setClick] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleUserSearch = () => {
        setLoading(true)
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/search/specificUser`, { params: { skills: userInput } })
            .then(response => {
                setUsers(response.data.user)
                console.log(response.data.user)
                setClick(true)
                setLoading(false)

            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));

    }, [])
    return (
        <div>
            <CompanyNavbar></CompanyNavbar>
            <div class="main">
                <div class="input-group">
                    <input type="text" onChange={(e) => setUserInput([e.target.value.toLowerCase()])} class="form-control" placeholder="Search Student" />

                    <div class="input-group-append">
                        <button disabled={userInput ? false : true} onClick={handleUserSearch} class="btn btn-secondary" type="button">
                            {/* <i class="fa fa-search"></i> */}
                            Search Student
                        </button>
                    </div>
                </div>

            </div>

            <div className="row">
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-6 m-auto text-center">
                    {
                        users && click ? <h5 className="mt-3" style={{ fontWeight: 'bold' }}>{users.length} Candidates Found </h5> :
                            <div></div>
                    }
                    {
                        loading ? <div className="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <img className="mx-auto w-25 d-block" src={loadingPic}></img>
                                </div>
                            </div>
                        </div>
                            :


                            users.map(userList => {
                                const { user } = userList
                                return (
                                    <div className="m-3 p-2" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                        {/* <p>{_id}</p> */}
                                        <p >Name : {user.name}</p>
                                        <p>Email: {user.email}</p>
                                        <Link to={`/see-user-profile/${user._id}`}><button className="btn btn-success text-center">See Profile</button></Link>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>

        </div>
    );
};

export default CandidateSearch;