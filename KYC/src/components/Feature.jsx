import "./Feature.css";

const Feature = () => {
  return (
    <div className="features-section">
      <div className="features-list">
        <ul>
          <li> Connect &quot;Directly&quot; with your future seniors.</li>
          <li> Get The Real Placement Insights.</li>
          <li> Get Real-Time Day-to-Day College Insights.</li>
          <li> Clear your smallest doubts.</li>
          <li> Get clarity on your college choices.</li>
          <li> Get Personalized Choice Filling.</li>
          <li> Get the best college at your rank.</li>
        </ul>
      </div>

        <img
          src="https://www.knowyourcolleges.com/static/media/arrow.aa6ce39180f530f91c99.png"
          alt="arrow-img" className="arrow-img"
        ></img>

        <button className="get-button">Get Started</button>
      </div>
  );
};

export default Feature;
