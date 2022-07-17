import React from 'react';
import './Topic.css';

const Topic = ({ topic }) => {
    const { img, name } = topic;
    return (
        <div className="container">
            <div className="box">
                <img src={img} height="40px" alt={img} />
                <span>{name}</span>
            </div>
        </div >
    );
};

export default Topic;