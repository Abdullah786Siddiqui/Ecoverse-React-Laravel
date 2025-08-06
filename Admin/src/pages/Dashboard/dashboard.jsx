import React from "react";
import { useState } from "react";
import {
  BsCart,
  BsPlusCircle,
  BsSpeedometer2,
  BsListCheck,
  BsReceipt,
  BsCardChecklist,
  BsPerson,
  BsPeopleFill,
  BsBoxArrowRight,
} from "react-icons/bs";

const Dashboard = ({ adminName = "Abdullah" }) => {

  const [isSidebarVisible, setSidebarVisible] = useState(true);

const toggleSidebar = () => {
  setSidebarVisible(!isSidebarVisible);
};
  return (
    <>
     <div className={`sidebar ${isSidebarVisible ? "active" : "hidden"}`} id="sidebar">

        <div
          className="d-block py-3  px-4 fs-4 fw-bold text-primary border-bottom text-decoration-none cursor-pointer"
          style={{ color: "#2563EB" }}
        >
          <a
            href="./Dashboard"
            className="text-decoration-none text-primary"
            style={{ color: "#2563EB" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#2563EB")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2563EB")}
          >
            Adminix
          </a>
        </div>

        <div id="sidebarAccordion">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link d-flex gap-2" href="./Dashboard">
                <BsSpeedometer2 /> Dashboard
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#ecommerceMenu"
                role="button"
              >
                <BsCart className="me-2" /> Ecommerce
              </a>
              <div
                className="collapse submenu"
                id="ecommerceMenu"
                data-bs-parent="#sidebarAccordion"
              >
                <a href="./Add-Product" className="nav-link click">
                  <BsPlusCircle className="me-2" /> Add Product
                </a>
                <a href="./View-Products" className="nav-link click">
                  <BsListCheck className="me-2" /> Product List
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#orderMenu"
                role="button"
              >
                <BsReceipt className="me-2" /> Order
              </a>
              <div
                className="collapse submenu"
                id="orderMenu"
                data-bs-parent="#sidebarAccordion"
              >
                <a href="./View-Orders" className="nav-link">
                  <BsCardChecklist className="me-2" /> Order List
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#userMenu"
                role="button"
              >
                <BsPerson className="me-2" /> User
              </a>
              <div
                className="collapse submenu"
                id="userMenu"
                data-bs-parent="#sidebarAccordion"
              >
                <a href="./Users" className="nav-link">
                  <BsPeopleFill className="me-2" /> User List
                </a>
              </div>
            </li>

            <hr className="w-75 mx-3" />

            <li className="nav-item">
              <a className="nav-link" href="../Process/logout-admin">
                <BsBoxArrowRight className="me-2" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

     <div className={`content-wrapper ${isSidebarVisible ? "shifted" : "full-width"}`} id="contentWrapper">

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3 py-2 sticky-top">
          <div className="container-fluid d-flex align-items-center">
            {/* Sidebar Toggle Button */}
           <button className="sidebar-toggle-btn me-3 sidebarToggle" onClick={toggleSidebar}>
  <i
    id="toggleIcon"
    className={`bi ${isSidebarVisible ? "bi-arrow-left-circle" : "bi-arrow-right-circle"}`}
  ></i>
</button>


            {/* Admin greeting */}
            <h2 className="admin d-none">Hi Admin, {adminName}</h2>

            {/* Alternative to Search Bar */}
            <div className="flex-grow-1 me-3">
              <h5 className="mb-0 text-muted">Dashboard</h5>
            </div>

            {/* Right side icons */}
            <ul className="navbar-nav flex-row align-items-center gap-2 gap-sm-1">
              <li className="nav-item dropdown cursor-pointer">
                <a
                  className="nav-link position-relative"
                  href="#"
                  id="notificationDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-bell fs-5"></i>
                  <span
                    className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger shadow-sm"
                    style={{ fontSize: "0.7rem", padding: "0.2em 0.5em" }}
                  >
                    0
                    <span className="visually-hidden">
                      unread notifications
                    </span>
                  </span>
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end shadow border-0 p-0 rounded-4 cursor-pointer"
                  aria-labelledby="notificationDropdown"
                  style={{ width: "260px", maxWidth: "90vw" }}
                >
                  <li className="px-3 py-2 border-bottom">
                    <span className="fw-semibold small">Notifications</span>
                  </li>

                  <li>
                    <ul className="list-unstyled mb-0">
                      <li className="px-2 py-2 border-bottom">
                        <a
                          href="./notification?notification=order_received"
                          className="d-flex justify-content-between align-items-center gap-2 text-decoration-none text-dark"
                        >
                          <div className="d-flex align-items-start gap-2">
                            <div
                              className="rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                              style={{
                                width: 36,
                                height: 36,
                                backgroundColor: "#28a745",
                              }}
                            >
                              <i className="bi bi-cart-check text-white fs-5"></i>
                            </div>

                            <div>
                              <div className="fw-semibold small">
                                Orders received
                              </div>
                              <div className="text-muted x-small">
                                New Orders Placed
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li onClick={toggleSidebar} className="nav-item">
                <a id="" className="nav-link sidebarToggle" href="#">
                  <i className="bi bi-arrows-fullscreen"></i>
                </a>
              </li>

              {/* User Info */}
              <li className="nav-item d-flex align-items-center gap-2 ms-2">
                <a href="#">
                  <img
                    src="./images/Abdullah.png"
                    className="rounded-circle shadow-sm"
                    style={{ objectFit: "cover" }}
                    width="40"
                    height="40"
                    alt="User"
                  />
                </a>
                <div className="user-info d-none d-sm-block">
                  <span className="fw-semibold small">{adminName}</span>
                  <br />
                  <small className="text-muted fw-bold">Admin</small>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Dashboard;
