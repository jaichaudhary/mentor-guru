// BlogPage.js
import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      {/* Header Section */}
      <header className="blog-header">
        <h1 className="blog-title">BLOG FULL WITH RIGHT SIDEBAR</h1>
        <p className="blog-caption">Caption placed here</p>
      </header>

      {/* Main Content Section */}
      <div className="blog-main-content">
        {/* Latest Blogs Section */}
        <div className="latest-blogs">
          <article className="blog-post">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Blog Thumbnail"
              className="blog-thumbnail"
            />
            <div className="blog-date">03 December 2023</div>
            <h2 className="blog-title">Sedial eiusmod tempor</h2>
            <p className="blog-author">By John Doe | Blog, Fit Row, Life Style</p>
            <p className="blog-excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        </div>

        {/* Sidebar Section */}
        <aside className="blog-sidebar">
          {/* Popular Posts Widget */}
          <div className="widget popular-posts">
            <h3 className="widget-title">Popular Posts</h3>
            <ul>
              <li>How to Stay Fit in Winter</li>
              <li>10 Tips for Productivity</li>
              <li>Exploring New Recipes</li>
            </ul>
          </div>

          {/* Post Slider Widget */}
          <div className="widget post-slider">
            <h3 className="widget-title">Post Slider</h3>
            <div className="slider">
              <p>Slider Placeholder</p>
            </div>
          </div>

          {/* Video Widget */}
          <div className="widget video-widget">
            <h3 className="widget-title">Video Widget</h3>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Widget"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
