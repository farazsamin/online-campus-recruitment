import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const ShowProfile = () => {
    
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        
    }, [])
    
    return (
       <div>s</div>
    );
};

export default ShowProfile;