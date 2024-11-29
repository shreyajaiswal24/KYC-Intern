import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        
        <div className="testimonial-text">
          <div className="quote">Thankyou so much KYC!!</div>
        </div>

        <div className="author">
          <span>Sameer Singh</span> <span className="stars">⭐⭐⭐⭐⭐</span>
        </div>

        <div className="testimonial-image">
          <img
            src="https://www.knowyourcolleges.com/static/media/profile.6b5f4e5a90273a42352c.png"
            alt="Student"
            className="student-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
