/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

export function DesktopViewAlert() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, []);

  return (
    <AlertDialog
      open={showAlert}
      onOpenChange={() => {
        setShowAlert(false);
      }}
    >
      <AlertDialogContent>
        <h1 className="text-sm font-poppins font-semibold">
          Would you like to switch to the desktop view?
        </h1>
        <AlertDialogDescription>
          <p className="text-xs text-gray-600">
            You're currently viewing the mobile version. Moving to the desktop
            view may provide additional features and functionalities.
          </p>
        </AlertDialogDescription>
        <div className="flex space-x-3">
          <Link href="https://intezar-dev.netlify.app" passHref>
            <button className="bg-green-500 text-sm text-white rounded-md px-2 py-1 font-poppins">
              Submit
            </button>
          </Link>
          <button
            className="bg-red-500 rounded-md text-sm text-white px-2 py-1 font-poppins"
            onClick={() => {
              setShowAlert(false);
            }}
          >
            Cancel
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DesktopViewAlert;
