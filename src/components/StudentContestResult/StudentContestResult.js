import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { First } from 'react-bootstrap/esm/PageItem';
import { Link } from 'react-router-dom';

const StudentContestResult = () => {
    const [contest, setContest] = useState([])
    useEffect(() => {

        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/contestRanking`)
            .then(response => {
                console.log(response.data)
                setContest(response.data)
            })
            .catch(err => {
                // console.log(err)
            })


    }, [])

    return (
        <div>
            <h1 className="text-center mb-5 mt-5">Contest Results</h1>
            {
                contest.map(cn => {
                    return (
                        <div style={{ width: "80%", boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-9 m-auto text-center mt-5 p-5">
                            <h2>{cn.description}</h2>
                            <p>{cn.date}</p>
                            <Link to={`/see-user-profile/${cn.first.user}`}><h3>First : {cn.first.bio}</h3></Link>
                            <Link to={`/see-user-profile/${cn.second.user}`}><h3>Second : {cn.second.bio}</h3></Link>
                            <Link to={`/see-user-profile/${cn.third.user}`}> <h3>Third : {cn.third.bio}</h3></Link>
                        </div>
                    )

                })
            }
        </div>
    );
};

export default StudentContestResult;