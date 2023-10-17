import useRatings from "./useRatings";
const Ratings = () => {
  const { rating, hover, setRatings, setHover } = useRatings();

  return (
    <div>
      {[...Array(3)].map((_, index) => (
        <button
          type="button"
          key={index}
          className={
            index <= (hover || rating)
              ? "text-yellow-200 text-[6rem]"
              : "text-gray-500 text-[6rem]"
          }
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
