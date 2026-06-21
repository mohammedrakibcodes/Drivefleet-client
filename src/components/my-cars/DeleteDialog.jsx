"use client";

import { useState } from "react";
import { Button, Modal } from "@heroui/react";
import { toast } from "sonner";

const DeleteDialog = ({ open, onClose, carId, refresh }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cars/${carId}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);

      refresh();
      onClose();
    } catch (error) {
      toast.error(error.message || "Failed to delete.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={open} onOpenChange={onClose}>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="max-w-md">
            <Modal.CloseTrigger className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition" />

            <Modal.Header>
              <Modal.Heading>Delete Car</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-slate-600 dark:text-slate-300">
                Are you sure you want to delete this car?
                <br />
                This action cannot be undone.
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="outline" slot="close" onPress={onClose}>
                Cancel
              </Button>

              <Button
                variant="danger"
                isLoading={loading}
                isDisabled={loading}
                onPress={handleDelete}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteDialog;
