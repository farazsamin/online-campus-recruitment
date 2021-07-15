import React, { useState } from 'react';
import axios from 'axios'
const UploadPic = () => {
    const [profilePic, setProfilePic] = useState()
    const handleUploadPic = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append('profilePic', profilePic);

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/profilePic', fd)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        // window.location.reload();

    }
    return (
        <div className="p-5">
            <h1 className="text-center">Add Your Profile Picture</h1>
            <hr />
            <input style={{ width: '80%' }} type="file" accept="image/png, .jpeg, .jpg" name="post-image" id="" onChange={
                (event) => {
                    setProfilePic(event.target.files[0]);
                }
            } /> <br />
            <button onClick={handleUploadPic} className="btn btn-success mt-3">Upload Profile Pic</button>
        </div>
    );
};

export default UploadPic;