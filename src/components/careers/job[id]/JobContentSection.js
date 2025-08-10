import React from 'react';
import '@/assets/css/about/career/job[id]/job-content.css';

const JobContentSection = ({ title, content, items, icon }) => {
  const getIconForSection = (sectionTitle) => {
    switch (sectionTitle.toLowerCase()) {
      case 'job description':
        return 'description';
      case 'requirements':
        return 'checklist';
      case 'responsibilities':
        return 'task_alt';
      case 'skills':
        return 'psychology';
      default:
        return 'article';
    }
  };

  return (
    <div className="secufleet-job-content-container wow fadeInUp" data-wow-delay="0.2s">
      <div className="secufleet-section-header">
        <div className="secufleet-section-icon">
          <span className="material-symbols-outlined">{icon || getIconForSection(title)}</span>
        </div>
        <h2 className="secufleet-section-title">{title}</h2>
      </div>
      
      {content && (
        <div className="secufleet-section-content">
          <div className="secufleet-content-wrapper">
            {content}
          </div>
        </div>
      )}
      
      {items && items.length > 0 && (
        <div className="secufleet-section-list-container">
          <ul className="secufleet-section-list">
            {items.map((item, index) => (
              <li key={index} className="secufleet-list-item">
                <div className="secufleet-list-item-content">
                  <span className="secufleet-list-bullet"></span>
                  <span className="secufleet-list-text">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {!content && (!items || items.length === 0) && (
        <div className="secufleet-section-content">
          <div className="secufleet-no-content">
            <span className="material-symbols-outlined secufleet-no-content-icon">info</span>
            <p className="secufleet-no-content-text">No information available for this section.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobContentSection; 