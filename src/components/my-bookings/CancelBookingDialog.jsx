"use client";

import { Button, Modal } from "@heroui/react";
import { toast } from "sonner";

const CancelBookingDialog = ({ open, onClose, bookingId, refresh }) => {
  const handleCancelBooking = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${bookingId}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success(data.message);

      refresh();

      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal isOpen={open} onOpenChange={onClose}>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="max-w-md">
            <Modal.CloseTrigger className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition" />

            <Modal.Header>
              <Modal.Heading>Cancel Booking</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-slate-600 dark:text-slate-300">
                Are you sure you want to cancel this booking?
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="outline" slot="close">
                No
              </Button>

              <Button variant="danger" onPress={handleCancelBooking}>
                Yes, Cancel
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CancelBookingDialog;
