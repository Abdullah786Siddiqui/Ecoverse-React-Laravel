import React from "react";

const Productlist = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="mb-0 fs-4 fs-md-3 fs-lg-2">Feature Products</h2>
        <button className="btn btn-outline-primary btn-sm">
          Shop all Products
        </button>
      </div>

      <div className="row g-3">
        <div className="col-6 col-md-4 col-lg-3 mb-3">
          <a
            href="/product/headphones"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <img
                src="/images/61xHTzEr8SL._SX425_.jpg"
                className="card-img-top"
                alt="Wireless Headphones"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 fw-semibold">
                  Wireless Headphones
                </h6>
                <div className="text-warning small mb-1">★★★★☆</div>
                <div className="text-primary fw-bold">₨ 4,999</div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-4 col-lg-3 mb-3">
          <a
            href="/product/headphones"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <img
                src="/images/1751057699-41cNBkQrJHL._SX425_.jpg"
                className="card-img-top"
                alt="Wireless Headphones"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 fw-semibold">
                  Wireless Headphones
                </h6>
                <div className="text-warning small mb-1">★★★★☆</div>
                <div className="text-primary fw-bold">₨ 4,999</div>
              </div>
            </div>
          </a>
        </div>{" "}
        <div className="col-6 col-md-4 col-lg-3 mb-3">
          <a
            href="/product/headphones"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <img
                src="/images/1751154758-tv-3.jpg"
                className="card-img-top"
                alt="Wireless Headphones"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 fw-semibold">
                  Wireless Headphones
                </h6>
                <div className="text-warning small mb-1">★★★★☆</div>
                <div className="text-primary fw-bold">₨ 4,999</div>
              </div>
            </div>
          </a>
        </div>{" "}
        <div className="col-6 col-md-4 col-lg-3 mb-3">
          <a
            href="/product/headphones"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <img
                src="/images/1752446970-22_.jpg"
                className="card-img-top"
                alt="Wireless Headphones"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 fw-semibold">
                  Wireless Headphones
                </h6>
                <div className="text-warning small mb-1">★★★★☆</div>
                <div className="text-primary fw-bold">₨ 4,999</div>
              </div>
            </div>
          </a>
        </div>{" "}
        <div className="col-6 col-md-4 col-lg-3 mb-3">
          <a
            href="/product/headphones"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <img
                src="/images/m3.jpg"
                className="card-img-top"
                alt="Wireless Headphones"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 fw-semibold">
                  Wireless Headphones
                </h6>
                <div className="text-warning small mb-1">★★★★☆</div>
                <div className="text-primary fw-bold">₨ 4,999</div>
              </div>
            </div>
          </a>
        </div>{" "}
        <div className="col-6 col-md-4 col-lg-3 mb-3">
          <a
            href="/product/headphones"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <img
                src="/images/m9.jpg"
                className="card-img-top"
                alt="Wireless Headphones"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 fw-semibold">
                  Wireless Headphones
                </h6>
                <div className="text-warning small mb-1">★★★★☆</div>
                <div className="text-primary fw-bold">₨ 4,999</div>
              </div>
            </div>
          </a>
        </div>{" "}
        <div className="col-6 col-md-4 col-lg-3 mb-3">
          <a
            href="/product/headphones"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <img
                src="/images/m2.jpg"
                className="card-img-top"
                alt="Wireless Headphones"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 fw-semibold">
                  Wireless Headphones
                </h6>
                <div className="text-warning small mb-1">★★★★☆</div>
                <div className="text-primary fw-bold">₨ 4,999</div>
              </div>
            </div>
          </a>
        </div>
          <div className="col-6 col-md-4 col-lg-3 mb-3">
          <a
            href="/product/headphones"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <img
                src="/images/hoodie.jpg"
                className="card-img-top"
                alt="Wireless Headphones"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 fw-semibold">
                  Wireless Headphones
                </h6>
                <div className="text-warning small mb-1">★★★★☆</div>
                <div className="text-primary fw-bold">₨ 4,999</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
