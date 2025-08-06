import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../Api/api";
import ProductSkeleton from "../../components/productSkeleton";
import BrandSkeleton from "../../components/brandSkeleton";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const { subcategory_id } = useParams();

  useEffect(() => {
    fetchProducts();
    fetchBrands();
    clearFilters();
  }, [subcategory_id]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/products/${subcategory_id}`);
      setAllProducts(res.data.data);
      setFilteredProducts(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchBrands = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/brands/${subcategory_id}`);
      setBrands(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBrandChange = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  const applyFilter = () => {
    if (selectedBrands.length === 0) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        selectedBrands.includes(product.brand)
      );
      setFilteredProducts(filtered);
    }
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setFilteredProducts(allProducts);
  };


  

  return (
    <div className="container-fluid products mt-4 h-100">
      <div className="row">
        {/* Sidebar */}
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
                brands.map((brand) => (
                  <div key={brand.id} className="form-check mb-3">
                    <input
                      className="form-check-input brand-filter"
                      type="checkbox"
                      id={`brand-${brand.id}`}
                      value={brand.name}
                      checked={selectedBrands.includes(brand.name)}
                      onChange={() => handleBrandChange(brand.name)}
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

            <div className="d-flex gap-2">
              <button
                className="btn btn-primary flex-grow-1 fw-semibold"
                onClick={applyFilter}
              >
                Apply Filter
              </button>
              <button
                className="btn btn-outline-secondary flex-grow-1 fw-semibold"
                onClick={clearFilters}
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
              ) : filteredProducts.length === 0 ? (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "60vh" }}
                >
                  <p className="text-center text-muted fs-4 fw-semibold">
                    No Product Found
                  </p>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.productid}
                    className="col-sm-6 col-md-4 mb-4 product-card-animate"
                  >
                    <Link
                      to={`/detailproducts/${product.productid}`}
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
                            Rs. {(product.price * 1.2).toFixed(0)}
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
