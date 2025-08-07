import { useEffect, useState } from "react";
import api from "../../Api/api";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { useCallback } from "react";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/AllProducts`);
      setAllProducts(res.data.data);
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((inputValue) => {
      if (inputValue.length === 0) {
        setProducts(allProducts);
      } else {
        const filtered = allProducts.filter(
          (item) =>
            item.name.toLowerCase().includes(inputValue) ||
            item.brand?.toLowerCase().includes(inputValue) ||
            String(item.productid).includes(inputValue)
        );
        setProducts(filtered);
      }
    }, 300),
    [allProducts]
  );

  const handleChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setSearchTerm(userInput);
    debouncedSearch(userInput); // call debounced function
  };

  return (
    <div className="container-fluid p-4 border rounded shadow-sm bg-white">
      <h4 className="mb-4 text-center fw-bold">📦 View Product List</h4>

      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2 table-control-wrapper">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <label htmlFor="showEntries">Showing</label>
          <select
            id="showEntries"
            className="form-select form-select-sm"
            style={{ width: "70px" }}
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>

        <input
          type="text"
          className="form-control w-50 flex-grow-1"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleChange}
        />

        <Link to={"/addProduct"} className="btn btn-outline-primary ">
          <i className="bi bi-plus"></i> Add new
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-hover table-striped align-middle ">
          <thead className="align-middle">
            <tr>
              <th
                className="text-start"
                style={{ paddingLeft: "40px", paddingRight: "40px" }}
              >
                Product
              </th>
              <th className="text-nowrap text-center">ID</th>
              <th className="text-nowrap text-center">Price</th>
              <th className="text-nowrap text-center">Quantity</th>
              <th className="text-center">Status</th>
              <th className="text-center">Remove</th>
              <th className="text-center">Update</th>
              {/* <th className="text-nowrap text-center">Created</th> */}
            </tr>
          </thead>

          <tbody>
            {!loading && Products.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4">
                  No products found for  "{searchTerm}"
                </td>
              </tr>
            )}
            {loading
              ? [...Array(5)].map((_, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded bg-secondary bg-opacity-25"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        ></div>
                        <div>
                          <div className="placeholder-glow">
                            <span className="placeholder col-9"></span>
                          </div>
                          <div className="placeholder-glow mt-1">
                            <span className="placeholder col-5"></span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <div className="placeholder-glow">
                        <span className="placeholder col-4"></span>
                      </div>
                    </td>

                    <td className="text-center">
                      <div className="placeholder-glow">
                        <span className="placeholder col-5"></span>
                      </div>
                    </td>

                    <td className="text-center">
                      <div className="placeholder-glow">
                        <span className="placeholder col-3"></span>
                      </div>
                    </td>

                    <td className="text-center">
                      <button className="badge bg-secondary bg-opacity-25 px-3 py-2 rounded-pill placeholder col-6"></button>
                    </td>

                    <td className="text-center">
                      <button className="badge bg-danger bg-opacity-50 px-3 py-2 rounded-pill placeholder col-6"></button>
                    </td>

                    <td className="text-center">
                      <button className="badge bg-warning bg-opacity-50 px-3 py-2 rounded-pill placeholder col-6"></button>
                    </td>
                  </tr>
                ))
              : Products.map((product) => (
                  <tr key={product.productid}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={`/images/${product.image_url}`}
                          alt="Product"
                          className="rounded"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <td>
                            <strong>{product.name}</strong>
                          </td>

                          <small className="text-muted">{product.brand}</small>
                        </div>
                      </div>
                    </td>
                    <td className="text-muted text-nowrap text-center">
                      #{product.productid}
                    </td>
                    <td className="text-nowrap text-center">
                      <strong>${product.price}</strong>
                    </td>
                    <td className="text-nowrap text-center">
                      {product.quantity}
                    </td>
                    <td className="text-center">
                      <span
                        className={`badge ${
                          product.quantity > 0 ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="text-center">
                      <span
                        className="badge bg-danger px-3 py-2 cursor-pointer"
                        style={{ cursor: "pointer" }}
                      >
                        Remove
                      </span>
                    </td>
                    <td className="text-center cursor-pointer
">
                      <Link
                        to={`/updateProduct/${product.productid}`}
                        // to={'/updateProduct'}
                        className="badge bg-warning text-white text-decoration-none px-3 py-2"
                      >
                        Update
                      </Link>
                    </td>
                    {/* <td className="text-nowrap text-center">
                  {new Date(product.created_at).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td> */}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
