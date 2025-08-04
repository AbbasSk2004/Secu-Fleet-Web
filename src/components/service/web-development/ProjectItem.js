"use client";

import React from 'react';
import Image from 'next/image';

const ProjectItem = ({ project }) => {
  return (
    <article className="thumbnail thumbnail-classic thumbnail-md">
      <div className="thumbnail-classic-figure" id={`gallery-${project.id}`}>
        <div id={`lightgallery${project.id}`} className="lightgallery">
          {project.images.map((image, index) => (
            <a
              key={index}
              href={image}
              className="project-link"
              data-lightgallery="group-item"
              style={index === 0 ? {} : { display: 'none' }}
            >
              <img src={image} alt={`${project.title} - Image ${index + 1}`} />
            </a>
          ))}
        </div>
        <div className="thumbnail-classic-caption">
          <div className="thumbnail-classic-title-wrap">
            <span className="material-symbols-outlined search">zoom_in</span>
            <h5 className="thumbnail-classic-title">{project.title}</h5>
          </div>
          <p className="thumbnail-classic-text">{project.description}</p>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem; 