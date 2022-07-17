import React, { useEffect, useState } from 'react';

const Topics = () => {
    const [topics, setTopic] = useState([]);

    useEffect(() => {
        fetch("topics.json")
            .then(res => res.json())
            .then(data => setTopic(data));
    }, []);
    return (
        <div>
            <h1>{topics.length}</h1>
        </div>
    );
};

export default Topics;