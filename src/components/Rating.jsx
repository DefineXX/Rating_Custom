import Star from './Star';

const Rating = () => {
  const rating = 2;

  return (
    <div className="rating-container">
      {Array.from({ length: 5 }).map((_, index) => {
        let fillPercentage = 0;
        const fillCriteria = rating - (index + 1);

        if (fillCriteria >= 0) {
          fillPercentage = 100;
        } else if (Math.abs(fillCriteria) < 1) {
          fillPercentage = Math.abs(fillCriteria) * 100;
        } else {
          fillPercentage = 0;
        }
        return <Star key={index} fillPercentage={fillPercentage} />;
      })}
    </div>
  );
};

export default Rating;
