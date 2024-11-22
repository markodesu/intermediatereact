import React from 'react';
import './ProfileCard.css'; // For styling

function ProfileCard({ name, image, description }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
