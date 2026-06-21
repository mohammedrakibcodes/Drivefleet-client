"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  Button,
  Input,
  TextArea,
  Surface,
  Form,
  Fieldset,
  TextField,
  Label,
} from "@heroui/react";

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

const EditCarDialog = ({ open, onClose, car, refresh }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    dailyRentPrice: "",
    description: "",
    availability: "",
    image: "",
    carType: "",
    pickupLocation: "",
  });

  useEffect(() => {
    if (car) {
      setFormData({
        dailyRentPrice: car.dailyRentPrice || "",
        description: car.description || "",
        availability: car.availability || "Available",
        image: car.image || "",
        carType: car.carType || "",
        pickupLocation: car.pickupLocation || "",
      });
    }
  }, [car]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const payload = {
        dailyRentPrice: Number(formData.dailyRentPrice),
        description: formData.description,
        availability: formData.availability,
        image: formData.image,
        carType: formData.carType,
        pickupLocation: formData.pickupLocation,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cars/${car._id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      toast.success(result.message);

      refresh?.();
      onClose();
    } catch (error) {
      toast.error(error.message || "Failed to update car.");
    } finally {
      setLoading(false);
    }
  };

  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Surface className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate();
          }}
        >
          <Fieldset>
            <Fieldset.Legend className="text-xl font-bold">
              Update Car
            </Fieldset.Legend>

            <Fieldset.Group className="mt-6 space-y-4">
              <TextField>
                <Label>Daily Rent Price</Label>
                <Input
                  type="number"
                  name="dailyRentPrice"
                  value={formData.dailyRentPrice}
                  onChange={handleChange}
                />
              </TextField>

              <TextField>
                <Label>Image URL</Label>
                <Input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </TextField>

              <TextField>
                <Label>Car Type</Label>
                <select
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-3 py-2"
                >
                  {carTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </TextField>

              <TextField>
                <Label>Availability</Label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-3 py-2"
                >
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </TextField>

              <TextField>
                <Label>Pickup Location</Label>
                <Input
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                />
              </TextField>

              <TextField>
                <Label>Description</Label>
                <TextArea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </TextField>
            </Fieldset.Group>

            <Fieldset.Actions className="mt-6 flex gap-3">
              <Button
                type="button"
                variant="outline"
                onPress={onClose}
                className="w-full"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                isLoading={loading}
                className="w-full bg-blue-600 text-white"
              >
                Update Car
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  ) : null;
};

export default EditCarDialog;
