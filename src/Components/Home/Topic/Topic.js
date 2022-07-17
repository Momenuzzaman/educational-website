import React from 'react';

const Topic = ({ topic }) => {
    const { img, name } = topic;
    return (
        <div className="container topic">
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