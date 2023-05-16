// import React from 'react';
// import './style.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <h5>Connect with us</h5>
//             <ul className="list-unstyled">
//               <li><a href="#">Facebook</a></li>
//               <li><a href="#">Twitter</a></li>
//               <li><a href="#">Instagram</a></li>
//               <li><a href="#">LinkedIn</a></li>
//             </ul>
//           </div>
//           <div className="col-md-6">
//             <h5>Contact us</h5>
//             <ul className="list-unstyled">
//               <li><a href="#">Email</a></li>
//               <li><a href="#">Phone</a></li>
//               <li><a href="#">Address</a></li>
//             </ul>
//           </div>
//         </div>
//         <hr />
//         <div className="row">
//           <div className="col-md-12">
//             <p>&copy; 2023 My Company. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="#">Support</a></li>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="bg-light my-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline float-md-right">
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
