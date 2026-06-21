import CarDetails from "@/components/car-details/CarDetails";

export const metadata = {
  title: "Car Details | DriveFleet",
};

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;

  return <CarDetails id={id} />;
};

export default CarDetailsPage;
