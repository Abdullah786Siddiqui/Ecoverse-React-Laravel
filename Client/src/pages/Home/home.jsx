import Category from "../../subComponents/Home/category";
import Crousel from "../../subComponents/Home/crousel";
// import Customersay from "../../subComponents/Home/customersay";
import Productlist from "../../subComponents/Home/Productlist";

const Home = () => {
  return (
    <>
      <Crousel />
      <Category />
      <Productlist />
      {/* <Customersay /> */}
      <section class="customer-says">
        <h2 className="text-center">What Our Customers Say</h2>
        <div class="testimonial-carousel">
          <div class="testimonial-card">
            <img src="https://i.pravatar.cc/100?img=1" alt="Customer" />
            <div class="testimonial-info">
              <h4>Sarah Khan</h4>
              <p>"Amazing service! I'll definitely recommend."</p>
              <div class="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div class="testimonial-card">
            <img src="https://i.pravatar.cc/100?img=2" alt="Customer" />
            <div class="testimonial-info">
              <h4>Ali Raza</h4>
              <p>"Fast delivery and quality packaging!"</p>
              <div class="stars">⭐⭐⭐⭐</div>
            </div>
          </div>
          <div class="testimonial-card">
            <img src="https://i.pravatar.cc/100?img=3" alt="Customer" />
            <div class="testimonial-info">
              <h4>Maria Sheikh</h4>
              <p>"Very user-friendly. 10/10 experience."</p>
              <div class="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div class="testimonial-card">
            <img src="https://i.pravatar.cc/100?img=3" alt="Customer" />
            <div class="testimonial-info">
              <h4>Maria Sheikh</h4>
              <p>"Very user-friendly. 10/10 experience."</p>
              <div class="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Home;
