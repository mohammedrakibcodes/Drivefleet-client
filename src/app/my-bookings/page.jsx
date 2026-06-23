import PrivateRoute from "@/components/shared/PrivateRoute";
import MyBookings from "@/components/my-bookings/MyBookings";

export const metadata = {
  title: "My Bookings | DriveFleet",
};

const MyBookingsPage = () => {
  return (
    <PrivateRoute>
      <MyBookings />
    </PrivateRoute>
  );
};

export default MyBookingsPage;
