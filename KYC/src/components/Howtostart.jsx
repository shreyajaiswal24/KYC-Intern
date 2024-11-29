import './Howtostart.css';

const Howtostart = () => {
  return (
    <div className="how-to-container">
      {/* Text Section */}
      <div className="text-section1">
        <div>How to get started?</div>
        <ul>
          <li>Click Get Started</li>
          <li>Fill your Details & College Choices</li>
          <li>Book Your Slot</li>
          <li>Connect With Seniors of Your Choice</li>
          <li>Get Clarity on Your College Choices</li>
        </ul>
      </div>

      {/* Video Section */}
        <video controls>
          <source src="https://www.knowyourcolleges.com/static/media/gettingStarted.d5d2263c26a49fb2074e.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default Howtostart;
