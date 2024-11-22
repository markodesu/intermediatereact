import React from 'react';
import ProfileCard from './ProfileCard';
import BlogCard from './BlogCard';
import FormValidation from './FormValidation';

function App() {
  return (
    <div className="App">
      {/* Profile Cards Section */}
      <section>
        <h1>Profile Cards</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <ProfileCard 
            name="John Doe" 
            image="https://via.placeholder.com/150" 
            description="A software engineer who loves coding." 
          />
          <ProfileCard 
            name="Jane Smith" 
            image="https://via.placeholder.com/150" 
            description="A digital artist exploring new styles." 
          />
        </div>
      </section>

      {/* Blog Cards Section */}
      <section>
        <h1>Blog Posts</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <BlogCard 
            title="React Basics" 
            description="Learn how to build reusable components in React." 
            image="https://via.placeholder.com/300" 
          />
          <BlogCard 
            title="CSS Tips" 
            description="Improve your layouts with modern CSS techniques." 
            image="https://via.placeholder.com/300" 
          />
        </div>
      </section>

      {/* Form Validation Section */}
      <section>
        <h1>User Form</h1>
        <FormValidation />
      </section>
    </div>
  );
}

export default App;
