import React from 'react'
import { useNavigate } from 'react-router-dom'
import AllStartup from '../../assets/AllStartup'
import '../admindashboard/AdminDashboard.css'


function AdminDashboard() {
    const navigate = useNavigate();

    const handleButtonClick = (startupId) => { 
      navigate(`/startup/${startupId}`);
    };

  return (
   
   
    <div>
        <div className='company'>
      <hr/> 
      <p>The latest Startups </p>
      <hr/>
      <div className='card-container'>
        {AllStartup.map((item) => (
          <div className='card' key={item.id}>
            <img src={item.image} alt={item.name} className='card-image' />
            <div className='card-content'>
              <h2 className='card-title'>{item.name}</h2>
              <p className='card-text'><b>Role</b>: {item.Department}</p>
            </div>
            <div className='card-footer'>
              <p className='card-salary'>Funding Required: ₹{item.Funded}</p>
              <button onClick={() => handleButtonClick(item.id)}><b>Click Here</b></button>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default AdminDashboard