import React from 'react';
import '../styles/FeatureCard.css'
function FeatureCard({ src, title, content }) {
    return (
        <div className="feature-card">
            <img src={src} alt={title} />
            <div className="title">{title}</div>
            <div className="content">{content}</div>
        </div>
    );
}

export default FeatureCard;