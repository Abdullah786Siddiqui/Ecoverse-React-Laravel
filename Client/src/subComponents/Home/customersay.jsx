import React from 'react'

const Customersay = () => {
  return (
    <section className="customer-says">
        <h2 className="text-center">What Our Customers Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <img src="https://i.pravatar.cc/100?img=1" alt="Customer" />
            <div className="testimonial-info">
              <h4>Sarah Khan</h4>
              <p>"Amazing service! I'll definitely recommend."</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="testimonial-card">
            <img src="https://i.pravatar.cc/100?img=2" alt="Customer" />
            <div className="testimonial-info">
              <h4>Ali Raza</h4>
              <p>"Fast delivery and quality packaging!"</p>
              <div className="stars">⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="testimonial-card">
            <img src="https://i.pravatar.cc/100?img=3" alt="Customer" />
            <div className="testimonial-info">
              <h4>Maria Sheikh</h4>
              <p>"Very user-friendly. 10/10 experience."</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="testimonial-card">
            <img src="https://i.pravatar.cc/100?img=3" alt="Customer" />
            <div className="testimonial-info">
              <h4>Maria Sheikh</h4>
              <p>"Very user-friendly. 10/10 experience."</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
         
        </div>
      </section>
  )
}

export default Customersay