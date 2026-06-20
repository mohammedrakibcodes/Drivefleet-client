import ExploreCarCard from "./ExploreCarCard";

const CarsGrid = ({ cars }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <ExploreCarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default CarsGrid;
