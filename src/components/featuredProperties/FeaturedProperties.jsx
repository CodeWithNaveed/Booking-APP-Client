import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  console.log("Fetched Data:", data); // Debugging line

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : error ? (
        <p>Error fetching data</p>
      ) : !Array.isArray(data) ? ( // Check if data is an array
        <p>No properties available</p>
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos?.[0]} alt="Featured" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.cheapestPrice && (
                <div className="fpRating">
                  <button>{item.cheapestPrice}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;