import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../../image/main.png';


const UperPart = () => {
    return (
        <div>
            <div>
                <h2>A learning platform that helps you to learning faster</h2>
                <p>World-class training and development programs developed by top teachers</p>
                <Button variant="primary">Explore All Courses</Button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default UperPart;