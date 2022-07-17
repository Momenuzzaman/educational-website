import React, { useEffect, useState } from 'react';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const [topics, setTopic] = useState([]);

    useEffect(() => {
        fetch("topics.json")
            .then(res => res.json())
            .then(data => setTopic(data));
    }, []);
    return (
        <div className="color" >
            <h1>Top Rated Learning Tutorials</h1>
            <div className="topic">
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div >
    );
};

export default Topics;