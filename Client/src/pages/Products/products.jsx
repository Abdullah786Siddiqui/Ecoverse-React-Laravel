import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../Api/api";
import ProductSkeleton from "../../components/productSkeleton";
import BrandSkeleton from "../../components/brandSkeleton";

const Products = () => {
  const [isProducts, setProducts] = useState([]);
  const [isbrand, setbrand] = useState([]);
  const [loading, setLoading] = useState(false);
  const { subcategory_id } = useParams();
  useEffect(() => {
    getProductsData();
    getbrandData();
  }, [subcategory_id]);

  const getProductsData = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/products/${subcategory_id}`);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getbrandData = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/brands/${subcategory_id}`);
      setbrand(response.data.data);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  };
  console.log(isbrand);

  return (
    <div className="container-fluid products mt-4 h-100">
      <div className="row">
        {/* Sidebar with Brand Checkboxes */}
        <aside className="col-lg-3 d-none d-lg-block">
          <div className="filter-sidebar bg-light border rounded p-4 h-100 shadow-sm bg-white">
            <h5 className="mb-4 text-primary fw-bold">Filter Products</h5>

            <div className="filter-group mb-4">
              <h6 className="text-muted mb-3 border-bottom pb-2 fw-semibold">
                Brand
              </h6>
              {loading ? (
               <BrandSkeleton />
              ) : (
                isbrand.map((brand) => (
                  <div key={brand.id} className="form-check mb-3">
                    <input
                      className="form-check-input brand-filter"
                      type="checkbox"
                      value={brand.name}
                      id={`brand-${brand.id}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`brand-${brand.id}`}
                    >
                      {brand.name}
                    </label>
                  </div>
                ))
              )}
            </div>

            {/* Filter Buttons Right Below Brand */}
            <div className="d-flex gap-2">
              <button
                className="btn btn-primary flex-grow-1 fw-semibold "
                type="button"
              >
                Apply Filter
              </button>
              <button
                className="btn btn-outline-secondary flex-grow-1 fw-semibold "
                type="button"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </aside>

        <main id="products_items" className="col-lg-9">
          <div id="product-list">
            <div className="row g-3">
              {loading ? (
                <ProductSkeleton />
              ) : (
                isProducts.map((product) => (
                  <div
                    key={product.id}
                    className="col-sm-6 col-md-4 mb-4 product-card-animate"
                  >
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="text-decoration-none"
                    >
                      <div className="card border-0 shadow-sm rounded-4 h-100 p-4 position-relative hover-shadow">
                        <div className="ratio ratio-1x1 mb-3">
                          <img
                            src={`/images/${product.image_url}`}
                            className="img-fluid rounded-3 object-fit-cover w-100 h-100"
                            alt={product.name}
                            loading="lazy"
                          />
                        </div>

                        <h5 className="fw-semibold mb-2 text-truncate text-dark">
                          {product.name}
                        </h5>

                        <p className="mb-2">
                          <span className="fw-bold text-success fs-6">
                            Rs.{product.price}
                          </span>
                          <small className="text-muted text-decoration-line-through ms-2">
                           Rs. { (product.price * 1.2).toFixed(0) }
                          </small>
                        </p>

                        <div className="text-warning small">
                          ★★★★☆ <span className="text-muted">(1)</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
