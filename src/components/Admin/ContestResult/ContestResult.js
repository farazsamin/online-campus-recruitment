import axios from 'axios';
import React, { useState } from 'react';
import { SetToken } from '../../utilities/setToken';

const ContestResult = () => {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [date, setDate] = useState('')

    const handleAddContest = (e) => {
        e.preventDefault();
        SetToken(localStorage.getItem('userToken'));
        let fd = new FormData();
        fd.append('first', first);
        fd.append('second', second);
        fd.append('third', third);
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni', fd)
            .then(res => {
                console.log(res)

            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div>
            <h1 className="text-center">Add Contest Result</h1>
            <div className="row">
                <div className="col-md-4 mt-5 pt-5">

                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="">First</label>
                        <input type="text" name="" id="" value={first} onChange={
                            (event) => {
                                setFirst(event.target.value);
                            }
                        } /> <br />
                        <label htmlFor="">Second</label>
                        <input type="text" name="" id="" value={second} onChange={
                            (event) => {
                                setSecond(event.target.value);
                            }
                        } /> <br />
                        <label htmlFor="">Third</label>
                        <input type="text" name="" id="" value={third} onChange={
                            (event) => {
                                setThird(event.target.value);
                            }
                        } /> <br />
                        <label>Date : </label>
                        <input type="date" name="" id="" value={date} onChange={
                            (event) => {
                                setDate(event.target.value);
                            }
                        } /> <br />

                        <br />
                        <button onClick={handleAddContest} className="btn btn-success mt-3">Add Result</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ContestResult;