

const Category = () => {
  return (
    <div className="container py-4">
     <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="mb-0 fs-4 fs-md-3 fs-lg-2">Browse by Category</h2>
        <button className="btn btn-outline-primary btn-sm">View All</button>
      </div>


      <div className="row g-3">
        {/* Category 1 */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="text-center p-2 p-lg-3 border rounded category-box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2278/2278984.png"
              alt="Electronics"
              className="img-fluid mb-1 category-img"
            />
            <div className="category-text">Electronics</div>
          </div>
        </div>

        {/* Category 2 */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="text-center p-2 p-lg-3 border rounded category-box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/12516/12516451.png"
              alt="Clothing"
              className="img-fluid mb-1 category-img"
            />
            <div className="category-text">Clothing</div>
          </div>
        </div>

        {/* Category 3 */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="text-center p-2 p-lg-3 border rounded category-box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1698/1698742.png"
              alt="Kitchen"
              className="img-fluid mb-1 category-img"
            />
            <div className="category-text">Kitchen</div>
          </div>
        </div>

        {/* Category 4 */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="text-center p-2 p-lg-3 border rounded category-box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1248/1248195.png"
              alt="Sports"
              className="img-fluid mb-1 category-img"
            />
            <div className="category-text">Sports</div>
          </div>
        </div>

        {/* Category 5 */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="text-center p-2 p-lg-3 border rounded category-box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3145/3145765.png"
              alt="Books"
              className="img-fluid mb-1 category-img"
            />
            <div className="category-text">Books</div>
          </div>
        </div>

        {/* Category 6 */}
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="text-center p-2 p-lg-3 border rounded category-box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1940/1940922.png"
              alt="Beauty"
              className="img-fluid mb-1 category-img"
            />
            <div className="category-text">Beauty</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
