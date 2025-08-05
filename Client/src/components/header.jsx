const Header = () => {
  return (
    <>
      <>
        <nav className="navbar navbar-expand-lg bg-white border-bottom pt-2">
          <div className="container-fluid mx-2 navbar_des">
            <a className="navbar-brand d-flex align-items-start fs-4" href="/">
              <strong className="mb-2">
                <img
                  height="32px"
                  src="./Assets/Images/shopping_cart_37dp_1F1F1F_FILL0_wght400_GRAD0_opsz40.svg"
                  alt=""
                />
                <span className="fw-bold">Ecoverse</span>
              </strong>
            </a>

            <form
              autoComplete="off"
              className="d-flex flex-grow-1 mx-4 position-relative"
              role="search"
              id="searchForm"
            >
              <div className="input-group flex-grow-1">
                <input
                  className="form-control search-box searchInput"
                  type="search"
                  placeholder="What can we help you find today?"
                />
                <button
                  id="search-btn"
                  className="btn btn-primary"
                  type="submit"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>

              <div
                className="card position-absolute start-0 w-100 d-none"
                style={{ top: "100%", zIndex: 1000 }}
                id="resultCard"
              >
                <div className="card" id="output"></div>
              </div>
            </form>

            <a
              className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center position-relative"
              style={{ width: "40px", height: "40px" }}
              href="#"
            >
              <i className="fas fa-cart-shopping"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle d-flex align-items-center justify-content-center"
                id="cartCount"
                style={{ width: "18px", height: "18px", fontSize: "0.65rem" }}
              ></span>
            </a>

            <div className="dropdown drop">
              <a
                className="nav-link d-flex align-items-center"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="./Assets/Images/user.png"
                  width="40"
                  height="40"
                  className="rounded-circle me-1"
                  alt="User"
                />
                My Account
              </a>

              <div
                className="dropdown-menu dropdown-menu-end p-3 drop"
                style={{ width: "250px", zIndex: 1100, overflow: "hidden" }}
              >
                <div className="text-center mb-2">
                  <img
                    src="./Assets/Images/user.png"
                    width="50"
                    height="50"
                    className="rounded-circle mb-2"
                    alt="User"
                  />
                  <div>
                    <strong>Username</strong>
                  </div>
                  <small className="text-muted d-block text-truncate">
                    user@example.com
                  </small>
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
        </nav>
      </>
    </>
  );
};

export default Header;
