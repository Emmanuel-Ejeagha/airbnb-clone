"use client";

import { useState, useEffect } from "react";
import { Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval } from "date-fns";

import apiService from "@/app/services/apiService";
import useLoginModal from "@/app/hooks/useLoginModal";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export type Property = {
  id: string;
  guests: number;
  price_per_night: number;
};

interface ReservationSidebarProps {
  userId: string | null;
  property: Property;
}
const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
  userId,
}) => {
  const loginModal = useLoginModal();
  const [fee, setFee] = useState<number>(0);
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<string>("1");
  const guestsRange = Array.from(
    { length: property.guests },
    (_, index) => index + 1
  );

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);
      if (dayCount && property.price_per_night) {
        const _fee = ((dayCount * property.price_per_night) / 100) * 5;
        setFee(_fee);
        setTotalPrice(dayCount * property.price_per_night + _fee);
        setNights(dayCount);
      } else {
        const _fee = (property.price_per_night / 100) * 5;
        setFee(_fee);
        setTotalPrice(property.price_per_night * _fee);
        setNights(1);
      }
    }
  }, [dateRange]);

  return (
    <aside className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl mt-6">
      <h2 className="mb-5 text-2xl">${property.price_per_night} per night </h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label htmlFor="" className="mb-2 block font-bold text-xs">
          Guests
        </label>
        <select
          onChange={(e) => setGuests(e.target.value)}
          value={guests}
          className="w-full -ml-1 text-xm"
        >
          {guestsRange.map((number) => (
            <option key={number} value={number}>
              (number)
            </option>
          ))}
        </select>
      </div>
      <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnb-dark">
        Book
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>
          ₦{property.price_per_night} * {nights} nights
        </p>
        <p>₦{property.price_per_night * nights}</p>
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>MyBnB fee</p>
        <p>₦{fee}</p>
      </div>
      <hr />
      <div className="mt-4 flex justify-between align-center font-bold">
        <p>Total </p>
        <p>₦{totalPrice}</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
