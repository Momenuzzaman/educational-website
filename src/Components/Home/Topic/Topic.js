import React from 'react';

const Topic = ({ topic }) => {
    const { img, nmae } = topic;
    return (
        <div>
            <div>
                <img src={img} alt={img} />
            </div>
        </div>
    );
};

export default Topic;