import Image from "next/image";
import apiService from "../services/apiService";

const MyReservationsPage = async () => {
  const reservations = await apiService.get("/api/auth/myreservations");
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My reservations</h1>
      <div className="space-y-4">
        {reservations.map((reservation: any) => (
          <div className="p-5 mt-4 grid grid-col-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                  src={reservation.property.image_url || "/default-image.jpg"}
                  fill
                  className="hover:scale-110 object-cover transition h-full w-full"
                  alt={reservation.property.name || "Property"}
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h1 className="mb-4 text-xl">{reservation.property.title}</h1>
              <p className="mb-2 md:mb-4">
                <strong>Check in date:</strong> {reservation.start_date}
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Check out date:</strong> {reservation.end_date}
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Number of nights:</strong>{" "}
                {reservation.number_of_nights}
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Total price:</strong> ₦{reservation.total}
              </p>
              <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark">
                Go to property
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyReservationsPage;
