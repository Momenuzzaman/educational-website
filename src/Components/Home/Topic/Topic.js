import React from 'react';
import './Topic.css';

const Topic = ({ topic }) => {
    const { img, name } = topic;
    return (
        <div >
            <div>
                <img src={img} alt={img} />
            </div>
            <div>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Topic;