import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0] || "https://cf.bstatic.com/xdata/images/hotel/max1024x768/261707778.jpg?k=96f39f6d85c802b97f689c84c5fe4d3978bf3f13b0d70d6f795f0e6c8790f9da&o="}
                alt="Featured"
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.cheapestPrice &&
                <div className="fpRating">
                  <button>{item.cheapestPrice}</button>
                  <span>Excellent</span>
                </div>
              }
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;