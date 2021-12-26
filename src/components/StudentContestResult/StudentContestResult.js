import { faChevronRight, faClock, faDatabase, faKeyboard, faLaptopCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { First } from 'react-bootstrap/esm/PageItem';
import { Link } from 'react-router-dom';
import loadingPic from '../utilities/images/loading.gif'

const StudentContestResult = () => {
    const [contest, setContest] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/contestRanking`)
            .then(response => {
                console.log(response.data)
                setContest(response.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })


    }, [])

    return (
        <div>
            <h1 className="text-center mb-5 mt-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" />Contest Results</h1>
            {
                loading ? <div className="container">
                    <div class="row">
                        <div class="col-md-12">
                            <img className="mx-auto w-25 d-block" src={loadingPic}></img>
                        </div>
                    </div>
                </div>
                    :
                    contest.map(cn => {
                        let fromDate = new Date(cn.date);
                        fromDate = fromDate.getDate() + '/' + fromDate.getMonth() + '/' + fromDate.getFullYear();
                        return (
                            <div style={{ width: "80%", boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderLeft: '10px solid blue' }} className="col-md-9 m-auto text-center mt-5 p-5">
                                <h2><FontAwesomeIcon icon={faKeyboard} className="mr-2" />{cn.description}</h2>
                                <p><FontAwesomeIcon icon={faClock} className="mr-2" />{fromDate}</p>
                                <h3><FontAwesomeIcon icon={faChevronRight} className="mr-2" />First : {cn.first.user.name}</h3>
                                <h3><FontAwesomeIcon icon={faChevronRight} className="mr-2" />Second : {cn.second.user.name}</h3>
                                <h3><FontAwesomeIcon icon={faChevronRight} className="mr-2" />Third : {cn.third.user.name}</h3>
                            </div>
                        )

                    })
            }
        </div>
    );
};

export default StudentContestResult;