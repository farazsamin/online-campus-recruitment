import axios from 'axios';
import React, { useEffect } from 'react';
import { SetToken } from '../../utilities/setToken';

const Comment = (props) => {
    const { _id } = props;

    return (
        <div>

            <h6>Author</h6>
            <p>Comments</p>
        </div>
    );
};

export default Comment;