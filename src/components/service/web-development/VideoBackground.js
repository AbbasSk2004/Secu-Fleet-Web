import React from 'react';

const VideoBackground = () => {
  return (
    <section className="discover wow bounceInRight">
      <div className="video-background">
        <video autoPlay loop muted playsInline suppressHydrationWarning>
          <source src="/assets/videos/webAnimation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>Let&apos;s Develop Your Next Great Website!</h1>
        <p>Do you need a unique software solution for your company? We know how to help you!</p>
      </div>
    </section>
  );
};

export default VideoBackground; 