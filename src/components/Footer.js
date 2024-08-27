import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import { fetchAccordionData } from '../service/fetchAccordionData';

function Footer() {
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    const loadAccordionData = async () => {
      try {
        const data = await fetchAccordionData();
        setAccordionData(data);
      } catch (error) {
        console.error('Error fetching accordion data:', error);
      }
    };

    loadAccordionData();
  }, []);

  return (
    <div className="accordion feedback" id="accordionExample">
      <div className="questions">Frequently Asked Questions</div>
      {accordionData.map((item, index) => (
        <div className="accordion-item feedback-item" key={item.id}>
          <h2 className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? 'true' : 'false'}
              aria-controls={`collapse${item.id}`}
            >
              <img
                className="arrow-icon"
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.5 4.5a.5.5 0 0 1 .7-.7L8 9.3l5.8-5.5a.5.5 0 1 1 .7.7l-6 6a.5.5 0 0 1-.7 0l-6-6z'/></svg>"
                alt="arrow-icon"
              />
              <span className="accordion-title">{item.title}</span>
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body accordion-content">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Footer;