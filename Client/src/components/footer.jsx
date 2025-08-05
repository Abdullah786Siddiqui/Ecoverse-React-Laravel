import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaLock
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="text-dark pt-5 pb-4 mt-5" style={{ position: "sticky", bottom: 0, zIndex: 1030 }}>
      <div className="container">
        <div className="row gy-5">

          {/* Brand Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold text-uppercase mb-3 text-info">Ecoverse</h5>
            <p className="text-muted">Your one-stop shop for electronics, fashion, home & more.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-dark fs-5 d-inline-flex align-items-center justify-content-center bg-info rounded-circle p-2 hover-scale"><FaFacebookF /></a>
              <a href="#" className="text-dark fs-5 d-inline-flex align-items-center justify-content-center bg-info rounded-circle p-2 hover-scale"><FaTwitter /></a>
              <a href="#" className="text-dark fs-5 d-inline-flex align-items-center justify-content-center bg-info rounded-circle p-2 hover-scale"><FaInstagram /></a>
              <a href="#" className="text-dark fs-5 d-inline-flex align-items-center justify-content-center bg-info rounded-circle p-2 hover-scale"><FaYoutube /></a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-semibold text-uppercase mb-3 text-info">Explore</h6>
            <ul className="list-unstyled">
              <li><a href="/about-us" className="text-dark text-decoration-none d-block py-1">About Us</a></li>
              <li><a href="/blog" className="text-dark text-decoration-none d-block py-1">Blog</a></li>
              <li><a href="/careers" className="text-dark text-decoration-none d-block py-1">Careers</a></li>
              <li><a href="/become-a-seller" className="text-dark text-decoration-none d-block py-1">Become a Seller</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-semibold text-uppercase mb-3 text-info">Support</h6>
            <ul className="list-unstyled">
              <li><a href="/faqs" className="text-dark text-decoration-none d-block py-1">FAQs</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none d-block py-1">Contact</a></li>
              <li><a href="/shipping-info" className="text-dark text-decoration-none d-block py-1">Shipping Info</a></li>
              <li><a href="/return-policy" className="text-dark text-decoration-none d-block py-1">Return Policy</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-semibold text-uppercase mb-3 text-info">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="/privacy-policy" className="text-dark text-decoration-none d-block py-1">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-dark text-decoration-none d-block py-1">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="text-dark text-decoration-none d-block py-1">Cookie Policy</a></li>
              <li><a href="/accessibility" className="text-dark text-decoration-none d-block py-1">Accessibility</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-semibold text-uppercase mb-3 text-info">Join Our Newsletter</h6>
            <p className="text-muted">Stay updated on deals, launches, and more.</p>
            <form className="d-flex mb-2 flex-column flex-sm-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control me-sm-2 mb-2 mb-sm-0 bg-light text-dark border-0 shadow-sm"
                placeholder="Your email address"
                required
              />
              <button className="btn btn-info text-white" type="submit">
                <FiSend />
              </button>
            </form>
            <small className="text-muted">We care about your data in our <a href="/privacy-policy" className="text-info">privacy policy</a>.</small>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Section */}
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 text-muted small">
              &copy; {new Date().getFullYear()} <span className="text-info">Ecoverse</span> — All rights reserved.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
            <FaCcVisa size={32} title="Visa" style={{ color: '#1a1f71' }} />
            <FaCcMastercard size={32} title="MasterCard" style={{ color: '#eb001b' }} />
            <FaCcPaypal size={32} title="PayPal" style={{ color: '#003087' }} />
            <FaLock size={28} title="Secure Checkout" style={{ color: '#28a745' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
