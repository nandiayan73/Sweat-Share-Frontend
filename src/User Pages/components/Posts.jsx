import React from 'react';

const Posts = () => {
  return (
    <div className="posts">
      {/* Repeat this block for each post */}
      <div className="post">
        <img
          src="images/Auth/gymbro.jpg"
          alt="Post"
          className="post-image"
        />
      </div>
      {/* Add more posts here */}
    </div>
  );
};

export default Posts;
