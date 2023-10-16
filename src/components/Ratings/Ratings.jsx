import useRatings from "./useRatings";
const Ratings = () => {
  const { rating, hover, setRatings, setHover } = useRatings();

  return (
    <div>
      {[...Array(3)].map((_, index) => (
        <button
          type="button"
          key={index}
          className={index <= (hover || rating) ? "on" : "off"}
          onClick={() => setRatings(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(rating)}
        >
          <span className="star">&#9733;</span>
        </button>
      ))}
    </div>
  );
};

export default Ratings;
