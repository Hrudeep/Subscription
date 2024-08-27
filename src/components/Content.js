import React from 'react';
import '../styles/Content.css';
import Features from './Features';
import teenyicons1 from '../Assets/teenyicons_star-solid-1.svg';
import teenyicons2 from '../Assets/teenyicons_star-solid-2.svg';
import teenyicons3 from '../Assets/teenyicons_star-solid.svg';

function Content() {
  const steps = [
    "MVP Subscription provides 1 movie credit per person",
    "They can avail it at any Marcus teatre or Movie Tavern.",
    "Members earn 100 points and get a $5 reward redemable on food and beverages + may more benefits.",
  ];

  return (
    <div className='main'>
      <div className="description">
        <div className='details'>
          <div className='teenystar'> 
            <img src={teenyicons1} alt="" className='teenystar1' />
            <img src={teenyicons2} alt="" className='teenystar2' />
            <img src={teenyicons3} alt="" className='teenystar3' />
          </div>
          <div className='content-heading'>Reel Deal Monthly Movies</div>
          <div className='content-sentence'>Your flexible monthly membership of latest movies</div>
        </div>

        <div className="progress-list">
          <div className="title">What is MVP Subscription</div>
          {steps.map((step, index) => (
            <div className="border-container" key={index}>
              <div className="circle">{index + 1}</div>
              <div className="content">{step}</div>
            </div>
          ))}
        </div>

        <div className="btn-get-learn">
          <button className='btn-get-started'>
            Get started
            <img className='arrow-icon' src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23fff" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.5 4.5a.5.5 0 0 1 .7-.7L8 9.3l5.8-5.5a.5.5 0 1 1 .7.7l-6 6a.5.5 0 0 1-.7 0l-6-6z"/></svg>' />
          </button>
          <a className='btn-learn-more' href=''>Learn more</a>
        </div>
      </div>
      <div className='features'><Features /></div>
    </div>
  );
}

export default Content;