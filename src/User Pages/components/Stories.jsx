import React from 'react';

const Stories = () => {
  return (
    <div className="stories">
      {/* Repeat this block for each story */}
      <div className="story">
        <img
          src="your-story-image-url.jpg"
          alt="Story"
          className="story-pic"
        />
        <span className="story-label">jim</span>
      </div>
      {/* Add more stories here */}
    </div>
  );
};

export default Stories;
