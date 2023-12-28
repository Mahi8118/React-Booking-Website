import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.G3dZl3QmUnNm-Pn4IVRh8QHaE8?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.LffyP_tHDmpHv9CpTt1QBwHaE7?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.-JJ3R48wdXCo90nC4EvR5AHaE7?w=303&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
