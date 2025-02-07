import React from 'react';
import Navigation from '@/app/Components/sections/navigation';

const Page = () => {


  return (
    <>
      <Navigation />
      <main className="work-shops max-width">
        <section className="work-shops-master">
          <h1 className="section-heading text-align-center">Master sql <span>in 5 days</span>
          </h1>
          <div className="work-shops-master-container">
            <img src="/images/sql-img.png" />
            <div className="work-shops-master-content-container">
              <div className="work-shops-master-content">
                <p>5 Days Workshop With Case Study</p>
                <p>Mega Workshop On 17/02/2025</p>
                <p>Get Certificate Of Completion</p>
                <p>No prior knowledge of Sql required</p>
              </div>
              <a className="btn" href="https://rzp.io/rzp/Y1T0Ab2C">Become Sql master at <strong>99₹</strong></a>
            </div>

          </div>
          <p>Join our 5-Day SQL Bootcamp for just <span><strong>₹99</strong></span> and gain hands-on experience, solve real-world
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
            <a className="btn" href="https://rzp.io/rzp/Y1T0Ab2C">
              {/*<img src="/images/whatsappLogo.png" />*/}
              {/*Community*/}
              Become Sql master at <strong>99₹</strong>
            </a>
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
                <p>Learn and apply SQL within a 5 days</p>
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
                  <h4>Introduction to SQL & Databases</h4>
                  <ul>
                    <li>What is Data, Database and Types of Databases</li>
                    <li>What is SQL? Why is it important?</li>
                    <li>Introduction to Tables, Rows, Columns</li>
                    <li><strong>Hands-on:</strong> Creating a simple database & table</li>
                  </ul>
                </div>
              </div>
              <div className="work-shops-what-to-learn-days-panel">
                <h3>Day-2</h3>
                <div className="container"><h4>Data Manipulation</h4>
                  <ul>
                    <li>Understanding DML (Data Manipulation Language)</li>
                    <li>INSERT, SELECT, UPDATE & DELETE
                    </li>
                    <li><strong>Hands-on:</strong> Insert sample data & retrieve it</li>
                  </ul>
                </div>
              </div>
              <div className="work-shops-what-to-learn-days-panel">
                <h3>Day-3</h3>
                <div className="container"><h4>Filtering & Sorting Data</h4>
                  <ul>
                    <li>WHERE clause, ORDER BY and LIMIT</li>
                    <li>AND, OR, BETWEEN, IN, LIKE
                    </li>
                    <li><strong>Hands-on:</strong> Write queries using these clauses</li>
                  </ul>
                </div>
              </div>
              <div className="work-shops-what-to-learn-days-panel">
                <h3>Day-4</h3>
                <div className="container"><h4>Relationships & Joins</h4>
                  <ul>
                    <li>Primary Key, Foreign Key & Relationships</li>
                    <li>INNER JOIN, LEFT JOIN & RIGHT JOIN
                    </li>
                    <li>GROUP BY & HAVING</li>
                    <li><strong>Hands-on:</strong> Creating table joins</li>
                  </ul>
                </div>
              </div>
              <div className="work-shops-what-to-learn-days-panel">
                <h3>Day-5</h3>
                <div className="container"><h4>Functions & Final Project</h4>
                  <ul>
                    <li>SQL Aggregate Functions (COUNT, SUM, AVG, MAX, MIN)</li>
                    <li>String & Date Functions
                    </li>
                    <li><strong>Case Study:</strong> HR/Employee Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p>Join our 5-Day SQL Bootcamp for just <span style={{ color: "red" }}><strong>₹99</strong></span> and gain hands-on experience, solve real-world
            problems, and earn a
            certificate to boost your career.</p>
          <a className="btn" href="https://rzp.io/rzp/Y1T0Ab2C"> ENROLL NOW</a>
        </section>
      </main>
    </>
  );
};

export default Page;