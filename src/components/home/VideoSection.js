'use client';
import React from 'react';

const VideoSection = () => {
  return (
    <section className="video-section" style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/videos/poster.jpg"
        suppressHydrationWarning
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src="/assets/videos/vd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection; 