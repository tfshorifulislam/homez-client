"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

type DeleteDialogProps = {
  id: string;
};

const DeleteDialog = ({ id }: DeleteDialogProps) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/property/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0 || data.success) {
        toast.success("Property deleted successfully.");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete property.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="destructive"
            className="w-full"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        }
      />

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <Trash2 className="h-7 w-7 text-red-600" />
          </div>

          <DialogTitle className="text-center">
            Delete Property?
          </DialogTitle>

          <DialogDescription className="text-center">
            This action cannot be undone. Are you sure you want to delete this
            property?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2">
          <DialogClose
            render={
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
            }
          />

          <DialogClose
            render={
              <Button
                variant="destructive"
                className="flex-1"
                onClick={handleDelete}
              >
                Delete
              </Button>
            }
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;