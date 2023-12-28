import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://th.bing.com/th/id/OIP.VHbV9i9VvkaCBYQHfMNZ3QHaHa?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://th.bing.com/th/id/OIP.CWMobkWSUEAofBDc3bpEFgHaEU?w=322&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://th.bing.com/th/id/OIP.Odfp54s2vkoDDb56M6PU7gHaJZ?w=159&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://th.bing.com/th/id/OIP.bMsOLnRhvVFyQ70OWZbm9AHaFI?w=266&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
