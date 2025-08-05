import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import api from "../Api/api";
import { Link } from "react-router-dom";

const Header = () => {
  const placeholders = [
    "Shoes for men",
    "Smartphones under $500",
    "Best laptops 2025",
    "Kitchen gadgets",
    "Trendy backpacks",
    "Wireless headphones",
  ];
  const [isSubcategory, setSubcategory] = useState([]);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    getSubCategory();
  }, []);

  const getSubCategory = async () => {
    try {
      const response = await api.get("/subcategory");
      setSubcategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav
        className="navbar bg-white py-2  "
        style={{ position: "sticky", top: 0, zIndex: 1030 }}
      >
        <div className="container-fluid ">
          {/* First Row */}
          <div className="d-flex align-items-center justify-content-between  w-100">
            {/* Logo */}
            <Link
              to={"/"}
              className="navbar-brand d-flex align-items-center text-decoration-none me-1"
            >
              <img
                src="/icons/shopping_cart_37dp_1F1F1F_FILL0_wght400_GRAD0_opsz40.svg"
                alt=" Logo"
                height="30"
                width="30"
                className="mb-1 mb-md-0"
              />
              <span className="fs-4 fw-semibold text-dark mb-1">Ecoverse</span>
            </Link>

            {/* Search bar - takes remaining space */}
            <form
              className="d-flex flex-grow-1 position-relative mx-2 mx-md-3"
              role="search"
            >
              <div className="input-group w-100">
                <input
                  type="search"
                  className="form-control border-end-0"
                  placeholder={currentPlaceholder}
                  aria-label="Search"
                  style={{
                    fontWeight: "bold",
                    color: "#6c757d",
                    fontSize: "0.875rem",
                    userSelect: "none",
                    pointerEvents: "none",
                    borderRadius: "8px 0 0 8px",
                    paddingLeft: "15px",
                    height: "40px",
                    backgroundColor: "#f8f9fa",
                    outline: "none",
                    border: "1px solid #dee2e6",
                  }}
                />

                <button
                  className="btn btn-outline-secondary d-flex align-items-center justify-content-center border-start-0"
                  type="submit"
                  style={{
                    borderRadius: "0 8px 8px 0",
                    backgroundColor: "#0d6efd",
                    border: "1px solid #dee2e6",
                    height: "40px",
                    width: "42px",
                    padding: 0,
                    outline: "none",
                    boxShadow: "none",
                  }}
                >
                  <FiSearch style={{ fontSize: "18px", color: "white" }} />
                </button>
              </div>

              {/* Optional: live search result card */}
              <div
                className="card position-absolute start-0 w-100 d-none"
                style={{ top: "100%", zIndex: 1000 }}
                id="resultCard"
              >
                <div className="card" id="output"></div>
              </div>
            </form>

            {/* Cart + User dropdown - hidden on mobile (d-none), visible on large screens (d-lg-flex) */}
            <div className="d-none d-md-flex align-items-center gap-2">
              {/* Cart */}
              <a
                href="#"
                className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center position-relative"
                style={{ width: "40px", height: "40px" }}
              >
                <FaCartShopping />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle"
                  style={{ width: "18px", height: "18px", fontSize: "0.65rem" }}
                  id="cartCount"
                ></span>
              </a>

              {/* User dropdown */}
              <div className="dropdown">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="/images/user.png"
                    alt="User"
                    width="36"
                    height="36"
                    className="rounded-circle me-2 "
                  />
                  <span className="fw-semibold">My Account</span>
                </a>

                <div
                  className="dropdown-menu dropdown-menu-end p-3"
                  style={{ width: "240px" }}
                >
                  <div className="text-center mb-2">
                    <img
                      src="./Assets/Images/user.png"
                      width="48"
                      height="48"
                      className="rounded-circle mb-1"
                      alt="User"
                    />
                    <div>
                      <strong>Username</strong>
                    </div>
                    <small className="text-muted">user@example.com</small>
                    <a
                      href="/homeprofile"
                      className="btn btn-outline-primary btn-sm w-100 mt-2"
                    >
                      View Profile
                    </a>
                  </div>
                  <hr />
                  <a className="dropdown-item" href="/homeprofile">
                    <i className="bi bi-person me-2"></i> My Account
                  </a>
                  <a className="dropdown-item" href="/Profile">
                    <i className="bi bi-bag-check me-2"></i> My Orders
                  </a>
                  <hr />
                  <a className="dropdown-item text-danger" href="/logout">
                    <i className="bi bi-box-arrow-right me-2"></i> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* d-none d-md-block */}
          {/* Navigation Links Row with Horizontal Scroll */}
          <div className="nav-scroll-container mt-1 pt-2 ">
            <div className="nav-scroll-wrapper">
              {/* 1. Categories Dropdown */}
              <div className="dropdown nav-dropdown flex-shrink-0">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center text-dark fw-medium"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  Electronics
                </a>
                <ul className="dropdown-menu ">
                  {isSubcategory
                    .filter((subcategory) => subcategory.category_id === 1)
                    .map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          to={`/products/${subcategory.id}`}
                          className="dropdown-item"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* 2. Deals Dropdown */}
              <div className="dropdown nav-dropdown flex-shrink-0">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center text-dark fw-medium"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-tag me-2"></i>
                  Health & Beauty
                </a>
                <ul className="dropdown-menu ">
                  {isSubcategory
                    .filter((subcategory) => subcategory.category_id === 2)
                    .map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          to={`/products/${subcategory.id}`}
                          className="dropdown-item"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* 3. Brands Dropdown */}
              <div className="dropdown nav-dropdown flex-shrink-0">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center text-dark fw-medium"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-award me-2"></i>
                  TV & Home Appliances
                </a>
                <ul className="dropdown-menu ">
                  {isSubcategory
                    .filter((subcategory) => subcategory.category_id === 4)
                    .map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          to={`/products/${subcategory.id}`}
                          className="dropdown-item"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* 4. New Arrivals Dropdown */}
              <div className="dropdown nav-dropdown flex-shrink-0">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center text-dark fw-medium"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-box-seam me-2"></i>
                  Home & Lifestyle
                </a>
                <ul className="dropdown-menu ">
                  {isSubcategory
                    .filter((subcategory) => subcategory.category_id === 3)
                    .map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          to={`/products/${subcategory.id}`}
                          className="dropdown-item"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* 5. Best Sellers Dropdown */}
              <div className="dropdown  flex-shrink-0">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center text-dark fw-medium"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-star me-2"></i>
                  Books & Stationary
                </a>
                <ul className="dropdown-menu ">
                  {isSubcategory
                    .filter((subcategory) => subcategory.category_id === 6)
                    .map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          to={`/products/${subcategory.id}`}
                          className="dropdown-item"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* 6. Offers Dropdown */}
              <div className="dropdown nav-dropdown flex-shrink-0">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center text-dark fw-medium"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-percent me-2"></i>
                  Fashions
                </a>
                <ul className="dropdown-menu ">
                  {isSubcategory
                    .filter((subcategory) => subcategory.category_id === 5)
                    .map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          to={`/products/${subcategory.id}`}
                          className="dropdown-item"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom CSS for animations and horizontal scroll */}
      <style>{`
        /* Horizontal scroll container */}
        .nav-scroll-container {
          width: 100%;
          overflow-x: auto;
          /* Hide scrollbar for Chrome, Safari and Opera */
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }

      

        .nav-scroll-wrapper {
          display: flex;
          gap: 1rem;
          padding-bottom: 2px; /* Small padding to prevent cut-off */
          min-width: max-content;
        }

        .nav-dropdown {
          white-space: nowrap;
        }

        .nav-dropdown .dropdown-menu {
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          margin-top: 5px;
        }

        .nav-dropdown.show .dropdown-menu,
        .nav-dropdown:hover .dropdown-menu {
          opacity: 1;
          transform: translateY(0);
        }

       

       
        .nav-dropdown .nav-link:hover {
          color: #0d6efd !important;
          transform: translateY(-1px);
          transition: all 0.2s ease;
        }

        .nav-dropdown .dropdown-toggle::after {
          display: none;
        }

        /* Hover effect for simple links */
        // .nav-link:not(.dropdown-toggle):hover {
        //   color: #0d6efd !important;
        //   transform: translateY(-1px);
        //   transition: all 0.2s ease;
        // }

        /* Responsive adjustments */}
        @media (max-width: 768px) {
          .nav-scroll-wrapper {
            gap: 0.75rem;
          }
          
          .nav-dropdown .dropdown-menu {
            position: static !important;
            transform: none !important;
            opacity: 1 !important;
            box-shadow: none !important;
            border: 1px solid #dee2e6;
            margin-top: 8px;
          }
        }

        @media (max-width: 576px) {
          .nav-scroll-wrapper {
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
