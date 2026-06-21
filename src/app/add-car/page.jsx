import AddCarForm from "@/components/add-car/AddCarForm";

export const metadata = {
  title: "Add Car | DriveFleet",
  description: "Add a new car to DriveFleet.",
};

const AddCarPage = () => {
  return (
    <main>
      <AddCarForm />
    </main>
  );
};

export default AddCarPage;
