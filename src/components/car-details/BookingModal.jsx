"use client";

import { useState, useMemo, useContext } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "sonner";
import { AuthContext } from "@/context/AuthProvider";

const BookingModal = ({ open, onClose, car }) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [bookingDate, setBookingDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isAvailable = car?.availability === "Available";

  const totalCost = useMemo(() => {
    if (!bookingDate || !returnDate) return 0;

    const start = new Date(bookingDate);
    const end = new Date(returnDate);

    const startUTC = Date.UTC(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
    );

    const endUTC = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());

    const diff = Math.floor((endUTC - startUTC) / (1000 * 60 * 60 * 24)) + 1;

    if (diff <= 0) return 0;

    const price = Number(car?.dailyRentPrice || 0);
    return diff * price;
  }, [bookingDate, returnDate, car]);

  const resetForm = () => {
    setBookingDate("");
    setReturnDate("");
    setError("");
  };

  const validateDates = () => {
    const today = new Date().toISOString().split("T")[0];

    if (!bookingDate || !returnDate) {
      setError("Please select both booking and return dates");
      return false;
    }

    if (returnDate < bookingDate) {
      setError("Return date cannot be before booking date");
      return false;
    }

    setError("");
    return true;
  };

  const handleBooking = async () => {
    if (!validateDates()) return;

    if (!user) {
      router.push("/login");
      return;
    }

    try {
      setLoading(true);

      const bookingData = {
        carId: car._id,
        bookingDate,
        returnDate,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookings`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success(data.message);

      resetForm();
      onClose();
      router.push("/my-bookings");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Modal isOpen={open} onOpenChange={onClose}>
      <Modal.Backdrop>
        <div className="fixed flex items-center justify-center p-2 sm:p-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: open ? 1 : 0,
              scale: open ? 1 : 0.95,
            }}
            transition={{ duration: 0.2 }}
            className="w-full flex items-center justify-center"
          >
            <Modal.Container placement="auto">
              <Modal.Dialog className="w-[96vw] sm:w-full max-w-sm sm:max-w-xl max-h-[88dvh] bg-white dark:bg-slate-900 rounded-xl flex flex-col overflow-hidden">
                {/* Close Button FIXED */}
                <Modal.CloseTrigger
                  onPress={() => {
                    resetForm();
                    onClose();
                  }}
                  className="absolute right-2 top-2 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                />

                <Modal.Header className="px-3 sm:px-6 pt-3 shrink-0">
                  <Modal.Heading className="text-base font-semibold sm:text-2xl">
                    Book Car
                  </Modal.Heading>
                </Modal.Header>

                <Modal.Body className="p-3 sm:p-6 overflow-y-auto flex-1">
                  <Surface>
                    <div className="flex flex-col gap-3 sm:gap-5">
                      {/* ✅ NAME FIELD */}
                      <TextField>
                        <Label>Name</Label>
                        <Input readOnly value={user?.displayName || ""} />
                      </TextField>

                      {/* ✅ EMAIL FIELD */}
                      <TextField>
                        <Label>Email</Label>
                        <Input readOnly value={user?.email || ""} />
                      </TextField>

                      <TextField>
                        <Label>Car</Label>
                        <Input readOnly value={car?.carName || ""} />
                      </TextField>

                      <TextField>
                        <Label>Daily Rent</Label>
                        <Input
                          readOnly
                          value={`$${car?.dailyRentPrice || 0}`}
                        />
                      </TextField>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <TextField>
                          <Label>Booking Date</Label>
                          <Input
                            type="date"
                            min={today}
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                          />
                        </TextField>

                        <TextField>
                          <Label>Return Date</Label>
                          <Input
                            type="date"
                            min={bookingDate || today}
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                          />
                        </TextField>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label>Total Cost</Label>
                        <span className="font-semibold">
                          ${totalCost.toLocaleString()}
                        </span>
                      </div>

                      {error && <p className="text-xs text-red-500">{error}</p>}
                    </div>
                  </Surface>
                </Modal.Body>

                <Modal.Footer className="flex flex-col sm:flex-row gap-2 p-2 sm:p-6">
                  <Button
                    slot="close"
                    variant="danger"
                    onPress={() => {
                      resetForm();
                      onClose();
                    }}
                  >
                    Cancel
                  </Button>

                  <Button
                    color="primary"
                    isDisabled={!isAvailable || loading}
                    isLoading={loading}
                    onPress={handleBooking}
                  >
                    Confirm Booking
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </motion.div>
        </div>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModal;
