import React, { useEffect, useState } from 'react';
import Topic from '../Topic/Topic';

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
            <div>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;