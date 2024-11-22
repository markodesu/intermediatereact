import React from 'react';
import './BlogCard.css'; 
function BlogCard({ title, description, image }) {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BlogCard;
