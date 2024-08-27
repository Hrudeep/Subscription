import React, { useState } from 'react';
import '../styles/Accordion.css'

const CustomAccordion = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion d-flex accordionContainer" id="accordionExample">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`collapse${index}`}
            >
              <span className="accordion-title">{item.title}</span>
              <img className='arrow-icon' src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23fff" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.5 4.5a.5.5 0 0 1 .7-.7L8 9.3l5.8-5.5a.5.5 0 1 1 .7.7l-6 6a.5.5 0 0 1-.7 0l-6-6z"/></svg>' />
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CustomAccordion;