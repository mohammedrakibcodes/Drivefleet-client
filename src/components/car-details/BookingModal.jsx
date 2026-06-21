"use client";

import { useState, useMemo, useContext } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  FieldError,
} from "@heroui/react";
import { toast } from "sonner";
import { AuthContext } from "@/context/AuthProvider";

const BookingModal = ({ open, onClose, car }) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [bookingDate, setBookingDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [driverNeeded, setDriverNeeded] = useState("");
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
    setDriverNeeded("");
    setError("");
  };

  const validateDates = () => {
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

    if (!driverNeeded) {
      toast.error("Please select Driver Needed option");
      return;
    }

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
        driverNeeded,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookings`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
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
        <div className="fixed inset-0 flex items-center justify-center p-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: open ? 1 : 0,
              scale: open ? 1 : 0.96,
            }}
            transition={{ duration: 0.2 }}
            className="w-full flex items-center justify-center"
          >
            <Modal.Container placement="auto">
              <Modal.Dialog className="w-[96vw] sm:w-full max-w-4xl max-h-[85dvh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                <Modal.CloseTrigger
                  onPress={() => {
                    resetForm();
                    onClose();
                  }}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                />

                <Modal.Header className="px-6 pt-5 pb-2 shrink-0">
                  <Modal.Heading className="text-xl sm:text-2xl font-bold">
                    Book Car
                  </Modal.Heading>
                </Modal.Header>

                <Modal.Body className="px-6 pb-4 overflow-y-auto">
                  <Surface className="bg-transparent shadow-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextField>
                        <Label>Name</Label>
                        <Input readOnly value={user?.displayName || ""} />
                      </TextField>

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

                      <div className="w-full">
                        <Select
                          selectedKeys={driverNeeded ? [driverNeeded] : []}
                          onSelectionChange={(keys) =>
                            setDriverNeeded(Array.from(keys)[0])
                          }
                          placeholder="Select option"
                          fullWidth
                        >
                          <Label className="text-black dark:text-white">
                            Driver Needed
                          </Label>

                          <Select.Trigger className="h-10 rounded-lg bg-white text-black border border-gray-300 dark:bg-black dark:text-white dark:border-gray-700">
                            <Select.Value className="text-black dark:text-white" />
                            <Select.Indicator className="text-black dark:text-white" />
                          </Select.Trigger>

                          <Select.Popover className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
                            <ListBox>
                              <ListBox.Item
                                id="yes"
                                textValue="Yes"
                                className="text-black dark:text-white"
                              >
                                Yes
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="no"
                                textValue="No"
                                className="text-black dark:text-white"
                              >
                                No
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>
                      <div />

                      <TextField>
                        <Label>Booking Date</Label>
                        <Input
                          type="date"
                          min={today}
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                        />
                        <FieldError />
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

                      <TextField className="md:col-span-2">
                        <Label className="text-black dark:text-white">
                          Total Cost
                        </Label>

                        <Input
                          readOnly
                          value={`$${totalCost.toLocaleString()}`}
                          className="bg-white text-black dark:bg-slate-900 dark:text-white"
                        />
                      </TextField>

                      {error && (
                        <p className="md:col-span-2 text-sm text-red-500">
                          {error}
                        </p>
                      )}
                    </div>
                  </Surface>
                </Modal.Body>

                <Modal.Footer className="flex justify-end gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800">
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
