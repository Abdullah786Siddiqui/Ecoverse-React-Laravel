import React, { useEffect, useState } from "react";
import api from "../../Api/api";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const { product_id } = useParams();
  const [detailProduct, setdetailproduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDetailProduct();
  }, []);

  const getDetailProduct = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/detailProduct/${product_id}`);
      setdetailproduct(response.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(detailProduct);

  return (
    <div className="container py-4">
      <div className="row g-3">
        {loading ? (
          <>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div
                className="border rounded shadow-sm p-2 bg-white"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  aspectRatio: "5 / 4",
                  margin: "0 auto",
                }}
              >
                <div className="skeleton w-100 h-100"></div>
              </div>
            </div>

            {/* Product Details Skeleton */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
              <div>
                <div
                  className="skeleton mb-2"
                  style={{ height: "24px", width: "60%" }}
                ></div>
                <div
                  className="skeleton mb-2"
                  style={{ height: "16px", width: "40%" }}
                ></div>
                <div
                  className="skeleton mb-3"
                  style={{ height: "20px", width: "80%" }}
                ></div>
                <div
                  className="skeleton mb-3"
                  style={{ height: "32px", width: "50%" }}
                ></div>
                <div
                  className="skeleton mb-2"
                  style={{ height: "14px", width: "30%" }}
                ></div>
                <div
                  className="skeleton mb-2"
                  style={{ height: "14px", width: "40%" }}
                ></div>
                <div
                  className="skeleton mb-3"
                  style={{ height: "14px", width: "25%" }}
                ></div>
              </div>

              <div className="mb-3 d-flex flex-column gap-2">
                <div
                  className="skeleton"
                  style={{ height: "38px", width: "100%" }}
                ></div>
                <div
                  className="skeleton"
                  style={{ height: "38px", width: "100%" }}
                ></div>
              </div>

              <div className="mb-3">
                <div
                  className="skeleton mb-2"
                  style={{ height: "16px", width: "60%" }}
                ></div>
                <div
                  className="skeleton"
                  style={{ height: "14px", width: "80%" }}
                ></div>
              </div>

              <div>
                <div
                  className="skeleton mb-2"
                  style={{ height: "14px", width: "40%" }}
                ></div>
                <div className="d-flex gap-2 flex-wrap">
                  <div
                    className="skeleton flex-fill"
                    style={{ height: "32px" }}
                  ></div>
                  <div
                    className="skeleton flex-fill"
                    style={{ height: "32px" }}
                  ></div>
                  <div
                    className="skeleton flex-fill"
                    style={{ height: "32px" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Product Description Skeleton */}
            <div className="col-12 mt-3">
              <div
                className="skeleton mb-2"
                style={{ height: "24px", width: "30%" }}
              ></div>
              <div
                className="skeleton mb-1"
                style={{ height: "12px", width: "100%" }}
              ></div>
              <div
                className="skeleton mb-1"
                style={{ height: "12px", width: "95%" }}
              ></div>
              <div
                className="skeleton mb-1"
                style={{ height: "12px", width: "90%" }}
              ></div>
            </div>
          </>
        ) : (
          detailProduct.map((product, index) => (
            <React.Fragment key={index}>
              {/* Product Image */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div
                  className="border rounded shadow-sm p-2 bg-white"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    aspectRatio: "5 / 4",
                    margin: "0 auto",
                  }}
                >
                  <img
                    src={`/images/${product.image_url}`} // Use real image_url
                    alt={product.name}
                    className="rounded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                <div>
                  <h1 className="h5 mb-1 fw-bold">{product.name}</h1>
                  <p className="text-muted mb-1">
                    SKU:{" "}
                    <span className="text-secondary">{product.productid}</span>
                  </p>

                  {/* Rating */}
                  <div className="mb-2" aria-label="Rating: 4 out of 5 stars">
                    <span className="text-warning fs-5">★★★★☆</span>{" "}
                    <small className="text-muted">(2847 reviews)</small>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="h4 text-danger fw-bold">
                      ${product.price}
                    </span>
                    <del className="text-muted ms-2">${product.price + 50}</del>
                  </div>

                  <p className="small text-muted mb-2">
                    Ships in 1–2 business days
                  </p>

                  <p className="mb-1">
                    <strong>Brand:</strong> {product.brand}
                  </p>

                  <p
                    className={`small mb-3 text-${
                      product.quantity > 0 ? "success" : "danger"
                    }`}
                  >
                    <strong>
                      {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </p>
                </div>

                {/* Buttons */}
                <div className="mb-3 d-flex flex-column gap-2">
                  <button className="btn btn-warning w-100">Buy Now</button>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>

                <div className="mb-3">
                  <p className="mb-1">
                    <strong>Estimated Delivery:</strong> Jul 12 – Jul 15
                  </p>
                  <p className="small text-muted">
                    Free standard shipping on orders over $50
                  </p>
                </div>

                <div>
                  <p className="mb-1">
                    <strong>Share:</strong>
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <a
                      href="#"
                      className="btn btn-sm btn-outline-primary flex-fill"
                    >
                      <i className="bi bi-facebook"></i> Facebook
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-outline-info flex-fill"
                    >
                      <i className="bi bi-twitter"></i> Twitter
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-outline-danger flex-fill"
                    >
                      <i className="bi bi-pinterest"></i> Pinterest
                    </a>
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <div className="col-12 mt-3">
                <h5 className="fw-semibold">Product Description</h5>
                <p
                  className="small text-muted"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {product.description}
                </p>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
}

export default DetailProduct;
