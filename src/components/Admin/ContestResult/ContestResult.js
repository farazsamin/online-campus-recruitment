import axios from 'axios';
import React, { useState } from 'react';
import { SetToken } from '../../utilities/setToken';

const ContestResult = () => {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const handleAddContest = (e) => {
        e.preventDefault();
        SetToken(localStorage.getItem('adminToken'));
        let fd = new FormData();
        fd.append('first', first);
        fd.append('second', second);
        fd.append('third', third);
        fd.append('description', description);
        fd.append('date', date);
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/contestRanking', {
            first: first,
            second: second,
            third: third,
            description: description,
            date: date
        })
            .then(res => {
                console.log(res)
                setFirst('')
                setSecond('')
                setThird('')
                setDescription('')
                setDate('')
                alert("Data Added Successfully")

            })
            .catch(err => {
                console.log(err)
                alert(err.response.data.err)
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
                        <label htmlFor="">Description</label>
                        <input type="text" name="" id="" value={description} onChange={
                            (event) => {
                                setDescription(event.target.value);
                            }
                        } /> <br />
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