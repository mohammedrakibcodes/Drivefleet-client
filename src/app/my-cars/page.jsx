import PrivateRoute from "@/components/shared/PrivateRoute";
import MyCars from "@/components/my-cars/MyCars";

export const metadata = {
  title: "My Added Cars | DriveFleet",
};

const MyCarsPage = () => {
  return (
    <PrivateRoute>
      <MyCars />
    </PrivateRoute>
  );
};

export default MyCarsPage;
