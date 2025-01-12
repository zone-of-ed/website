import React from 'react';
import Navigation from '@/app/Components/sections/navigation';

const Page = () => {
  return (
    <>
      <Navigation />
      <main className="work-shops max-width">

        <section className="work-shops-master">
          <h1 className="section-heading text-align-center">Master sql <span>in 7 days</span>
          </h1>
          <div className="work-shops-master-container">
            <img src="/images/sql-img.png" />
            <div className="work-shops-master-content-container">
              <div className="work-shops-master-content">
                <p>7days classes With Case Study</p>
                <p>Mega Webinar on 20/01/2025</p>
                <p>Get Certificate Of Completion</p>
                <p>No prior knowledge of Sql required</p>
              </div>
              <button className="btn">Become Sql master at 99₹</button>
            </div>

          </div>
          <p>Join our 7-Day SQL Bootcamp for just <span>₹99</span> and gain hands-on experience, solve real-world
            problems,
            and earn a
            certificate to boost your career.</p>

        </section>

        <section className="work-shops-who-can-learn">
          <h2 className="section-heading text-align-center">Who can Learn <span>SQL?</span></h2>
          <img className="main-img" src="/images/who-can-learn-sql.png" />
          <div className="join-now-container">
            <p>Join in</p>
            <img className="logo-img" src="/images/brand-logo.png" />
            <button>
              <img src="/images/whatsappLogo.png" />
              Community
            </button>
          </div>
        </section>

        <section className="work-shops-why-learn">
          <h2 className="section-heading text-align-center">Why Learn <span>SQL?</span> <img
            src="/images/sql-img.png" />
          </h2>

          <div className="work-shops-why-learn-faq-container">
            <div className="work-shops-why-learn-faq">
              <h4>Essential Skill Across Fields</h4>
              <p>SQL is the backbone of databases, used in web development, data science, business analytics, and cloud
                engineering.</p>
            </div>
            <div className="work-shops-why-learn-faq">
              <h4>High Demand</h4>
              <p>Employers across industries look for professionals skilled in SQL to handle, analyze, and manage data
                efficiently.</p>
            </div>
            <div className="work-shops-why-learn-faq">
              <h4>Future-Proof Your Career</h4>
              <p>Mastering SQL opens doors to <span>opportunities in tech-driven roles worldwide.</span></p>
            </div>
          </div>
        </section>

        <section className="work-shops-why-this-bootcamp">
          <h2 className="section-heading text-align-center">Why Choose This <span>Bootcamp?</span>
          </h2>
          <div className="work-shops-why-this-bootcamp-container">
            <img src="/images/why-choose-sql-bootcamp.png" />
            <div className="work-shops-why-this-bootcamp-content-container">
              <div className="work-shops-why-this-bootcamp-content-panel">
                <h4>Expert Guidance</h4>
                <p>Content designed to align with industry standards.</p>
              </div>
              <div className="work-shops-why-this-bootcamp-content-panel">
                <h4>Practical and Compact</h4>
                <p>Learn and apply SQL within a week</p>
              </div>
              <div className="work-shops-why-this-bootcamp-content-panel">
                <h4>Get Certificate</h4>
                <p>Showcase your SQL expertise and boost your career</p>
              </div>
            </div>
          </div>

        </section>

        <section className="work-shops-what-to-learn">
          <h2 className="section-heading text-align-center">What You’ll <span>Learn?</span>
            <img src="/images/what-you-learn.png" />
          </h2>

          <div className="work-shops-what-to-learn-container">
            <div className="work-shops-what-to-learn-days-container">
              <div className="work-shops-what-to-learn-days-panel">
                <h3>Day-1</h3>
                <div className="container">
                  <h4>Introduction to SQL</h4>
                  <ul>
                    <li>What is SQL and why it’s important?</li>
                    <li>Understanding databases and how SQL interacts with them.</li>
                    <li>Setting up your first database using MySQL.</li>
                  </ul>
                </div>
              </div>
              <div className="work-shops-what-to-learn-days-panel">
                <h3>Day-2</h3>
                <div className="container"><h4>SQL Core Concepts – Querying Data</h4>
                  <ul>
                    <li>Writing SELECT statements to fetch data.</li>
                    <li>Filtering data with WHERE clauses.</li>
                    <li>Sorting and limiting results for precision.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p>Join our 7-Day SQL Bootcamp for just <span>₹99</span> and gain hands-on experience, solve real-world
            problems, and earn a
            certificate to boost your career.</p>
          <button className="btn margin-auto">ENROLL NOW</button>
        </section>
      </main>
    </>
  );
};

export default Page;