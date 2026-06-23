import PrivateRoute from "@/components/shared/PrivateRoute";
import AddCarForm from "@/components/add-car/AddCarForm";

export const metadata = {
  title: "Add Car | DriveFleet",
  description: "Add a new car to DriveFleet.",
};

const AddCarPage = () => {
  return (
    <PrivateRoute>
      <main>
        <AddCarForm />
      </main>
    </PrivateRoute>
  );
};

export default AddCarPage;
