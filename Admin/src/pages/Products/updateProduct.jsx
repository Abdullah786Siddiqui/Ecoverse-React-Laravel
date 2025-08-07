import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Api/api";

const UpdateProduct = () => {
  const [Products, setProducts] = useState([]);
  const { product_id } = useParams();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get(`/detailProduct/${product_id}`);
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form id="updateProductForm" encType="multipart/form-data">
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body p-4">
          <div className="d-flex justify-content-center align-items-center  pb-2 mb-4">
            <h4 className="fw-semibold mb-0 text-center">
              {" "}
              <i
                className="bi bi-pencil-square mx-2"
                style={{ color: "#007bff", fontSize: "1.5rem" }}
              ></i>
              Update Product
            </h4>

            {/* <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 breadcrumb-custom">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/view-products">Ecommerce</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Updation
                </li>
              </ol>
            </nav> */}
          </div>
          {Products.map((product) => (
           <div className="row gy-5 gx-4 align-items-start flex-wrap">

  {/* Image Section */}
  <div className="col-12 col-md-4">
    <div className="text-center text-md-start">
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
                    src={`/public/images/${product.image_url}`} // Use real image_url
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

      <div className="mb-3">
        <label htmlFor="productImage" className="form-label fw-semibold small text-muted">
          <i className="bi bi-image me-1"></i> Change Product Image
        </label>
        <div className="input-group input-group-sm shadow-sm">
          <span className="input-group-text bg-light">
            <i className="bi bi-upload"></i>
          </span>
          <input
            type="file"
            name="productImage"
            id="productImage"
            className="form-control form-control-sm p-2"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Fields */}
  <div className="col-12 col-md-8">
    <div className="row g-4">

      {/* Product Name */}
      <div className="col-12 col-sm-6">
        <label htmlFor="productName" className="form-label fw-medium">Product Name</label>
        <div className="input-group shadow-sm">
          <span className="input-group-text"><i className="bi bi-box"></i></span>
          <input
            type="text"
            id="productName"
            className="form-control"
            placeholder="Enter product name"
            value={product.name}
          />
        </div>
        <small className="text-danger" id="name-error"></small>
      </div>

      {/* Price */}
      <div className="col-12 col-sm-6">
        <label htmlFor="productPrice" className="form-label fw-medium">Price</label>
        <div className="input-group shadow-sm">
          <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
          <input
            type="number"
            id="productPrice"
            className="form-control"
            placeholder="0.00"
            value={product.price}
          />
        </div>
        <small className="text-danger" id="price-error"></small>
      </div>

      {/* Quantity */}
      <div className="col-12 col-sm-6">
        <label htmlFor="productQty" className="form-label fw-medium">Quantity</label>
        <div className="input-group shadow-sm">
          <span className="input-group-text"><i className="bi bi-stack"></i></span>
          <input
            type="number"
            min="1"
            id="productQty"
            className="form-control"
            placeholder="0"
            value={product.quantity}
          />
        </div>
        <small className="text-danger" id="qty-error"></small>
      </div>

      {/* Category */}
      <div className="col-12 col-sm-6">
        <label className="form-label fw-medium">Category</label>
        <div className="input-group shadow-sm">
          <span className="input-group-text"><i className="bi bi-collection"></i></span>
          <div className="form-control bg-light">{product.category_name}</div>
        </div>
      </div>

      {/* Subcategory */}
      <div className="col-12 col-sm-6">
        <label className="form-label fw-medium">Subcategory</label>
        <div className="input-group shadow-sm">
          <span className="input-group-text"><i className="bi bi-list-nested"></i></span>
          <div className="form-control bg-light">{product.subcategories_name}</div>
        </div>
      </div>

      {/* Brand */}
      <div className="col-12 col-sm-6">
        <label className="form-label fw-medium">Brand</label>
        <div className="input-group shadow-sm">
          <span className="input-group-text"><i className="bi bi-tag"></i></span>
          <div className="form-control bg-light">{product.brand}</div>
        </div>
      </div>

      {/* Description */}
      <div className="col-12">
        <label htmlFor="productDesc" className="form-label fw-medium">Description</label>
        <div className="input-group shadow-sm">
          <span className="input-group-text"><i className="bi bi-card-text"></i></span>
          <textarea
            id="productDesc"
            className="form-control"
            rows="3"
            placeholder="Enter product description"
            value={product.description}
          ></textarea>
        </div>
        <small className="text-danger" id="desc-error"></small>
      </div>

      {/* Submit */}
      <div className="col-12 text-end mt-4">
        <button type="submit" className="btn btn-primary px-4 shadow-sm">
          <i className="bi bi-check2-circle"></i> Save Changes
        </button>
      </div>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </form>
  );
};

export default UpdateProduct;
