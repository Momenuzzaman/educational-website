import React from 'react';
import './Topic.css';

const Topic = ({ topic }) => {
    const { img, name } = topic;
    return (
        <div className="box d-flex">
            <div >
                <img src={img} height="40px" alt={img} />
                <span>{name}</span>
            </div>


        </div>
    );
};

export default Topic;