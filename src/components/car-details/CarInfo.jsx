import {
  CarFront,
  MapPin,
  Users,
  BadgeDollarSign,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";

const CarInfo = ({ car }) => {
  return (
    <div>
      <Image
        src={car.image}
        alt={car.carName}
        width={1200}
        height={500}
        className="h-125 w-full rounded-3xl object-cover shadow-xl"
      />

      <div className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              {car.carName}
            </h1>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              {car.description}
            </p>
          </div>

          <span
            className={`rounded-full px-5 py-2 text-sm font-semibold ${
              car.availability === "Available"
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
            }`}
          >
            {car.availability}
          </span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border p-5 dark:border-slate-800">
            <CarFront className="text-blue-600" />
            <div>
              <p className="text-sm text-slate-500">Car Type</p>
              <h3 className="font-semibold">{car.carType}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border p-5 dark:border-slate-800">
            <Users className="text-blue-600" />
            <div>
              <p className="text-sm text-slate-500">Seats</p>
              <h3 className="font-semibold">{car.seatCapacity}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border p-5 dark:border-slate-800">
            <MapPin className="text-blue-600" />
            <div>
              <p className="text-sm text-slate-500">Pickup</p>
              <h3 className="font-semibold">{car.pickupLocation}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border p-5 dark:border-slate-800">
            <BadgeDollarSign className="text-blue-600" />
            <div>
              <p className="text-sm text-slate-500">Price</p>
              <h3 className="font-bold">${car.dailyRentPrice}/day</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border p-5 dark:border-slate-800">
            <CalendarDays className="text-blue-600" />
            <div>
              <p className="text-sm text-slate-500">Total Bookings</p>
              <h3 className="font-semibold">{car.bookingCount}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
