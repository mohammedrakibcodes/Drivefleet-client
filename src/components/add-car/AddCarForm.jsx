"use client";

import { ArrowUpFromSquare, Eraser } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Surface,
} from "@heroui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const carTypes = [
  "SUV",
  "Luxury SUV",
  "Luxury Sedan",
  "Sedan",
  "Sports",
  "Sports Coupe",
  "Supercar",
  "Pickup",
  "MPV",
  "Hatchback",
];

export default function AddCarForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      dailyRentPrice: Number(data.dailyRentPrice),
      seatCapacity: Number(data.seatCapacity),
      availability: "Available",
    };

    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cars`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      toast.success("Car added successfully");
      e.target.reset();
      router.push("/my-cars");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500";

  const selectClass =
    "w-full rounded-xl border px-3 py-2 text-sm bg-white text-slate-900 dark:bg-slate-800 dark:text-white dark:border-slate-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center rounded-3xl bg-slate-50 p-6 dark:bg-slate-950"
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl"
      >
        <Surface className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <Form onSubmit={onSubmit}>
            <Fieldset>
              <Fieldset.Legend className="text-xl font-bold text-slate-900 dark:text-white">
                Add New Car
              </Fieldset.Legend>

              <Description className="text-slate-500 dark:text-slate-400">
                Fill in vehicle information to publish listing.
              </Description>

              <Fieldset.Group className="mt-6 space-y-4">
                <TextField isRequired name="carName">
                  <Label className="text-slate-900 dark:text-white">
                    Car Name
                  </Label>
                  <Input placeholder="BMW M4" className={inputClass} />
                  <FieldError />
                </TextField>

                <TextField isRequired name="dailyRentPrice">
                  <Label className="text-slate-900 dark:text-white">
                    Daily Rent Price
                  </Label>
                  <Input
                    type="number"
                    placeholder="150"
                    className={inputClass}
                  />
                  <FieldError />
                </TextField>

                <TextField isRequired name="carType">
                  <Label className="text-slate-900 dark:text-white">
                    Car Type
                  </Label>

                  <select name="carType" className={selectClass}>
                    <option value="">Select Type</option>
                    {carTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  <FieldError />
                </TextField>

                <TextField isRequired name="seatCapacity">
                  <Label className="text-slate-900 dark:text-white">
                    Seat Capacity
                  </Label>
                  <Input type="number" placeholder="5" className={inputClass} />
                  <FieldError />
                </TextField>

                <TextField isRequired name="pickupLocation">
                  <Label className="text-slate-900 dark:text-white">
                    Pickup Location
                  </Label>
                  <Input placeholder="Dhaka" className={inputClass} />
                  <FieldError />
                </TextField>

                <TextField isRequired name="image">
                  <Label className="text-slate-900 dark:text-white">
                    Image URL
                  </Label>
                  <Input placeholder="https://..." className={inputClass} />
                  <FieldError />
                </TextField>

                <TextField isRequired name="description">
                  <Label className="text-slate-900 dark:text-white">
                    Description
                  </Label>

                  <TextArea
                    placeholder="Write about your vehicle..."
                    className={inputClass}
                  />

                  <FieldError />
                </TextField>
              </Fieldset.Group>

              <Fieldset.Actions className="mt-6 flex gap-3">
                <Button
                  type="submit"
                  isLoading={loading}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <ArrowUpFromSquare />
                  Publish Car
                </Button>

                <Button
                  type="reset"
                  variant="danger"
                  className="w-full border-slate-300 dark:border-slate-700"
                >
                  <Eraser />
                  Reset
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </Surface>
      </motion.div>
    </motion.div>
  );
}
