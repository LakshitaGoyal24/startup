import React from 'react';
import { useParams } from 'react-router-dom';
import Startup from '../../assets/Startup';

function StartupData() {
    const { startupid } = useParams();
    const startup = Startup.find(s => s.startupid === parseInt(startupid));

    if (!startup) {
        return <div className="job-details">Startup not found</div>;
    }
    return (
        <div className='job-details'>
            <h2 className='job-title'>{startup.startupid}</h2>
            <p><span className='side-heading'>Company:</span> {startup.title}</p>
            <p><span className='side-heading'>Job Description:</span> {startup.startupDescription}</p>
        </div>
    );
}

export default StartupData;
