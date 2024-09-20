import React, { useState } from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-white footer">
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">
                    FOOTER CONTENT
                    <span className="toggle-icon" onClick={() => toggleSection('footerContent')}>
                      {expandedSections.footerContent ? '-' : '+'}
                    </span>
                  </h5>
                  {(expandedSections.footerContent || window.innerWidth > 768) && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi cum ipsam ad, illo possimus laborum ut
                      reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque? Reiciendis assumenda iusto sapiente inventore animi?
                    </p>
                  )}
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">
                    QUICK LINKS
                    <span className="toggle-icon" onClick={() => toggleSection('quickLinks')}>
                      {expandedSections.quickLinks ? '-' : '+'}
                    </span>
                  </h5>
                  {(expandedSections.quickLinks || window.innerWidth > 768) && (
                    <ul className="list-unstyled mb-0">
                      <li><a href="#!" className="text-white">About Us</a></li>
                      <li><a href="#!" className="text-white">Our Process</a></li>
                      <li><a href="#!" className="text-white">Store Locator</a></li>
                      <li><a href="#!" className="text-white">Privacy</a></li>
                    </ul>
                  )}
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">
                    OUR SERVICES
                    <span className="toggle-icon" onClick={() => toggleSection('ourServices')}>
                      {expandedSections.ourServices ? '-' : '+'}
                    </span>
                  </h5>
                  {(expandedSections.ourServices || window.innerWidth > 768) && (
                    <ul className="list-unstyled mb-0">
                      <li><a href="#!" className="text-white">Bulk Orders</a></li>
                      <li><a href="#!" className="text-white">Careers</a></li>
                      <li><a href="#!" className="text-white">Contact Us</a></li>
                    </ul>
                  )}
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">
                    OUR POLICIES
                    <span className="toggle-icon" onClick={() => toggleSection('ourPolicies')}>
                      {expandedSections.ourPolicies ? '-' : '+'}
                    </span>
                  </h5>
                  {(expandedSections.ourPolicies || window.innerWidth > 768) && (
                    <ul className="list-unstyled mb-0">
                      <li><a href="#!" className="text-white">Shipping</a></li>
                      <li><a href="#!" className="text-white">Payment</a></li>
                      <li><a href="#!" className="text-white">Terms & Conditions</a></li>
                      <li><a href="#!" className="text-white">Privacy Policy</a></li>
                    </ul>
                  )}
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section className="text-center">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button type="button" className="btn btn-outline-light btn-rounded">Sign up!</button>
              </p>
            </section>

            <hr className="mb-4" />

            <section className="mb-4 text-center">
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-google"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </section>
          </div>

          <div className="text-center p-3">
             Copyright &copy; 2024:
            <a className="text-white" href="#"> popat.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
