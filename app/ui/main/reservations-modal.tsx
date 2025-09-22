"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReservationModal() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
      >
        Pick a Reservation Date
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 w-[400px] relative">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Choose a Date & Time
            </h2>

            {/* Date Picker */}
            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              showTimeSelect
              timeIntervals={30}
              dateFormat="PP • p"
              className="w-full rounded-md border px-3 py-2 outline-none"
            />

            {/* Show selected date */}
            {date && (
              <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                Selected: <span className="font-semibold">{date.toLocaleString()}</span>
              </p>
            )}

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
