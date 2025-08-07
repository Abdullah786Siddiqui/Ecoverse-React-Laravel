import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../Api/api";
import { useCallback } from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [isCategory, setCategory] = useState([]);
  const [isSubCategory, setSubCategory] = useState([]);
  const [isbrand, setbrand] = useState([]);
  const [filterSubCategory, setfilterSubCategory] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingSubcategories, setLoadingSubcategories] = useState(true);
  const [loadingbrand, setLoadingbrand] = useState(true);
  const [isSubmiting, setSubmiting] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("image", data.image[0]);
    formData.append("brand_id", data.brand_id);
    formData.append("category_id", data.category_id);
    formData.append("subcategory_id", data.subcategory_id);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    console.log(data);
    setSubmiting(true);
    try {
      const res = await api.post("/addProduct", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("🚀 Product added successfully!");
    } catch (err) {
      console.error("Error adding product", err);
    } finally {
      setSubmiting(false);
      reset();
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllSubCategory();
    getAllBrand();
  }, []);

  const getAllCategory = async () => {
    try {
      const res = await api.get("/AllCategory");
      setCategory(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingCategories(false);
    }
  };

  const getAllBrand = async () => {
    try {
      const res = await api.get("/Allbrands");
      setbrand(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingbrand(false);
    }
  };

  const getAllSubCategory = async () => {
    try {
      const res = await api.get("/Allsubcategory");
      setSubCategory(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingSubcategories(false);
    }
  };

  function handleCategory(id) {
    let filterSubCategory = isSubCategory.filter(
      (subcategory) => subcategory.category_id == id
    );
    setfilterSubCategory(filterSubCategory);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  // Watch the file input to display selected image confirmation
  const imageFile = watch("image");

  return (
    <div className="form-container p-4 border rounded shadow-sm bg-white">
      <h4 className="mb-4 text-center fw-bold">🛒 Add New Product</h4>

      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        noValidate
      >
        {/* Product Name & Category */}
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Product Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="e.g. Samsung Galaxy S24"
              {...register("name", {
                required: "Product name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Name cannot exceed 50 characters",
                },
                pattern: {
                  value: /^[A-Za-z0-9 ]+$/,
                  message: "Only alphanumeric characters and spaces allowed",
                },
              })}
            />
            {errors.name && (
              <p className="text-danger small mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Category <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${
                errors.category_id ? "is-invalid" : ""
              }`}
              defaultValue=""
              {...register("category_id", { required: "Category is required" })}
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                const name = selectedOption.getAttribute("data-name");
                const id = e.target.value;
                handleCategory(id);
              }}
            >
              <option value="" disabled hidden>
                Select Category
              </option>
              {loadingCategories ? (
                <option disabled className="text-center fw-semibold">
                  Loading Categories...
                </option>
              ) : (
                isCategory.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    data-name={category.name}
                  >
                    {category.name}
                  </option>
                ))
              )}
            </select>

            {errors.category_id && (
              <p className="text-danger small mt-1">
                {errors.category_id.message}
              </p>
            )}
          </div>
        </div>

        {/* Subcategory & Brand */}
        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Subcategory <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${
                errors.subcategory_id ? "is-invalid" : ""
              }`}
              defaultValue=""
              {...register("subcategory_id", {
                required: "Subcategory is required",
              })}
            >
              <option value="" disabled hidden>
                Select Subcategory
              </option>
              {loadingSubcategories ? (
                <option disabled className="text-center fw-semibold">
                  Loading SubCategories...
                </option>
              ) : filterSubCategory.length === 0 ? (
                <option disabled value="">
                  Please select a category first
                </option>
              ) : (
                filterSubCategory.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))
              )}
            </select>
            {errors.subcategory_id && (
              <p className="text-danger small mt-1">
                {errors.subcategory_id.message}
              </p>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Brand <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.brand_id ? "is-invalid" : ""}`}
              defaultValue=""
              {...register("brand_id", { required: "Brand is required" })}
            >
              <option value="" disabled hidden>
                Select Brand
              </option>
              {loadingbrand ? (
                <option disabled className="text-center fw-semibold">
                  Loading Brands...
                </option>
              ) : (
                isbrand.map((brand) => (
                  <option key={brand.id} value={brand.brand_id}>
                    {brand.name}
                  </option>
                ))
              )}
            </select>

            {errors.brand_id && (
              <p className="text-danger small mt-1">
                {errors.brand_id.message}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mt-3">
          <label className="form-label fw-semibold">
            Description <span className="text-danger">*</span>
          </label>
          <textarea
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            rows="3"
            placeholder="Write a short product description (max 100 characters)"
            maxLength={100}
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
              maxLength: {
                value: 100,
                message: "Maximum 100 characters allowed",
              },
            })}
          />
          {errors.description && (
            <p className="text-danger small mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="col-md-6 mt-3">
          <label className="form-label fw-semibold">
            Price <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            placeholder="e.g. 49999"
            {...register("price", {
              required: "Price is required",
              min: { value: 1, message: "Price must be at least 1" },
              max: { value: 1000000, message: "Price cannot exceed 1,000,000" },
              valueAsNumber: true, // converts input to number automatically
            })}
          />
          {errors.price && (
            <p className="text-danger small mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Quantity */}
        <div className="mb-3 mt-3">
          <label className="form-label fw-semibold">Quantity</label>
          <select
            className={`form-select ${errors.quantity ? "is-invalid" : ""}`}
            defaultValue=""
            {...register("quantity", {
              required: "Quantity is required",
            })}
          >
            <option value="" disabled hidden>
              Select Quantity
            </option>
            {[...Array(100).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          {errors.quantity && (
            <p className="text-danger small mt-1">{errors.quantity.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mt-4">
          <label className="form-label fw-semibold">
            Upload Image <span className="text-danger">*</span>
          </label>

          <div
            className="border rounded d-flex flex-column align-items-center justify-content-center text-center p-4 position-relative upload-box bg-light"
            style={{ cursor: "pointer" }}
          >
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              {...register("image", {
                required: "Image is required",
                validate: {
                  acceptedFormats: (files) => {
                    const allowed = ["image/jpeg", "image/png", "image/jpg"];
                    return files &&
                      files.length > 0 &&
                      allowed.includes(files[0].type)
                      ? true
                      : "Only JPG or PNG images are allowed";
                  },
                },
              })}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
            />
            <i className="bi bi-cloud-arrow-up fs-1 text-primary mb-2"></i>
            <div id="upload-text" className="text-muted">
              Click or drag image here to upload
            </div>
          </div>

          {imageFile && imageFile.length > 0 && (
            <p className="text-success small mt-2">✅ Image selected!</p>
          )}
          {errors.image && (
            <p className="text-danger small mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="d-flex flex-column flex-md-row justify-content-end gap-3 mt-4">
          <button
            type="submit"
            disabled={isSubmiting}
            className="btn btn-primary fw-semibold px-4 py-2"
          >
            {isSubmiting ? "Adding Product..." : " Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
