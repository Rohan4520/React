import React from 'react'
import { useLocation } from 'react-router-dom';
import './ProfileData.css';   // CSS file import

function ProfileData() {
  const location = useLocation();
  const formData = location.state; 

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        {/* Avatar */}
        <div className="profile-avatar">
          {formData.fName ? formData.fName.charAt(0).toUpperCase() : "?"}
        </div>

        {/* User Info */}
        <h2 className="profile-name">{formData.fName}</h2>
        <p className="profile-email">{formData.email}</p>

        <div className="profile-info">
          <p><span>DOB:</span> {formData.Dob}</p>
          <p><span>Password:</span> {formData.password}</p>
        </div>
         <div className="profile-info">
          <p><span> Gender:</span> {formData.gender}</p>
          <p><span> Education :</span> {formData.education}</p>
        </div>
         <div className="profile-info">
          <p><span> Course:</span> {formData.course}</p>
          <p><span> Family member:</span> {formData.familyMember}</p>
        </div>

        {/* Button */}
        <button className="profile-btn">Back to Home</button>
      </div>
    </div>
  )
}

export default ProfileData;
