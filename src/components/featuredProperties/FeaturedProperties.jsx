import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="fp">
      {data.length > 0 ? (
        data.map((item) => (
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
        ))
      ) : (
        <p>No properties found</p>
      )}
    </div>
  );
};

export default FeaturedProperties;
