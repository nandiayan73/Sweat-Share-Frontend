import React from 'react';

const featuresData = [
  {
    id: 1,
    icon: '🏋️',
    title: 'Modern Equipment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.',
    color: '#E31E32' // Red
  },
  {
    id: 2,
    icon: '🍎',
    title: 'Healthy Nutrition Plan',
    description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    color: '#F59E01' // Orange
  },
  {
    id: 3,
    icon: '🏋️‍♂️',
    title: 'Professional Training Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.',
    color: '#E8A90E' // Yellow
  },
  {
    id: 4,
    icon: '💓',
    title: 'Unique to Your Needs',
    description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    color: '#4CAF50' // Green
  }
];

const Page2= () => {
  return (
    <section className="why-choose-us">
      <h2 className="title">Know The Features</h2>
      <div className="features">
        {featuresData.map((feature) => (
          <div className="feature" key={feature.id}>
            <div
              className="icon"
              style={{ backgroundColor: "transparent" }}
            >
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page2;
