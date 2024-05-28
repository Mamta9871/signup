import React from 'react';
import './Cprofile.css';

const Cprofile = () => {
  return (
    <div className="Cprofile">
      <p className="one">Winners never quite, Quitters never win.</p>
      <div className="completion-notice">
        <p className="two">Your Profile is 64% completed. A complete Profile has</p>
        <p className="three">
          higher chances of landing a job. <a href="#">Complete now</a>
        </p>
      </div>
      <div className="contact-details">
        <label>
          <i className="fab fa-github"></i>
          Full Name:
          <input type="text" />
        </label>
        <label>
          <i className="fas fa-globe"></i>
          Profile Photo URL:
          <input type="text" />
        </label>
        <button className="update-btn">Update</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default Cprofile;
