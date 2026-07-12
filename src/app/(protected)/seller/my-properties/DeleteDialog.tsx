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

const DeleteDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="destructive" size="icon">
            <Trash2 className="h-4 w-4" />
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

          <Button variant="destructive" className="flex-1">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;