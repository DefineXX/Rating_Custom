import Star from './Star';

const Rating = () => {
  const rating = 3.5;

  return (
    <div className="rating-container">
      {Array.from({ length: 5 }).map((_, index) => {
        const fillPercentage = Math.min(1, Math.max(0, rating - index));
        console.log('fillPercentage:', fillPercentage);

        return <Star key={index} fillPercentage={fillPercentage} />;
      })}
    </div>
  );
};

export default Rating;
