import React from 'react';
import Link from 'next/link';
import '../../assets/css/blog.css';

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: "The Future of Fleet Management: AI and IoT Integration",
      excerpt: "Discover how artificial intelligence and Internet of Things are revolutionizing fleet management operations, improving efficiency, and reducing costs for businesses worldwide.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Technology",
      date: "December 15, 2024",
      readTime: "5 min read",
      author: "SecuFleet Team"
    },
    {
      id: 2,
      title: "Optimizing Fuel Efficiency with Smart Telematics",
      excerpt: "Learn about the latest telematics solutions that help fleet managers monitor fuel consumption, optimize routes, and implement cost-saving strategies for their operations.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      category: "Fleet Management",
      date: "December 12, 2024",
      readTime: "4 min read",
      author: "SecuFleet Team"
    },
    {
      id: 3,
      title: "Driver Safety: Implementing Advanced Monitoring Systems",
      excerpt: "Explore how modern monitoring systems enhance driver safety, reduce accidents, and ensure compliance with transportation regulations across different industries.",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=250&fit=crop",
      category: "Safety",
      date: "December 10, 2024",
      readTime: "6 min read",
      author: "SecuFleet Team"
    },
    {
      id: 4,
      title: "Digital Transformation in Transportation: A Complete Guide",
      excerpt: "A comprehensive guide to digital transformation strategies that transportation companies can implement to stay competitive in the modern market landscape.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      category: "Digital Transformation",
      date: "December 8, 2024",
      readTime: "7 min read",
      author: "SecuFleet Team"
    },
    {
      id: 5,
      title: "Real-time Analytics: Making Data-Driven Fleet Decisions",
      excerpt: "Understand how real-time analytics and reporting tools empower fleet managers to make informed decisions and improve overall operational performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Analytics",
      date: "December 5, 2024",
      readTime: "5 min read",
      author: "SecuFleet Team"
    },
    {
      id: 6,
      title: "Sustainable Fleet Management: Green Solutions for the Future",
      excerpt: "Discover eco-friendly fleet management practices and technologies that help reduce carbon footprint while maintaining operational efficiency.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      category: "Sustainability",
      date: "December 3, 2024",
      readTime: "6 min read",
      author: "SecuFleet Team"
    }
  ];

  return (
    <section className="blog-section">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-primary text-uppercase">Our Blog</h5>
          <h1 className="mb-0" style={{ color: 'white' }}>Latest Insights & Industry Updates</h1>
          <p className="text-light mt-3">Stay informed with the latest trends, technologies, and best practices in fleet management and transportation solutions.</p>
        </div>
        
        <div className="row g-5">
          {blogData.map((blog, index) => (
            <div key={blog.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
              <div className="blog-card">
                <div className="blog-image">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="img-fluid"
                    loading="lazy"
                   
                  />
                  <div className="blog-category">
                    <span>{blog.category}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <i className="bi bi-calendar3"></i>
                      {blog.date}
                    </span>
                    <span className="blog-read-time">
                      <i className="bi bi-clock"></i>
                      {blog.readTime}
                    </span>
                  </div>
                  <h4 className="blog-title">
                    <Link href={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h4>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-author">
                      <i className="bi bi-person"></i>
                      {blog.author}
                    </span>
                    <Link href={`/blog/${blog.id}`} className="read-more-btn">
                      Read More
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <Link href="/blog" className="btn btn-lg btn-primary rounded">
            View All Articles
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs; 