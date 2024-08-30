import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import apiService from "@/app/services/apiService";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}`);
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="mb-4 w-full h-[64vh] rounded-xl overflow-hidden relative">
        <Image
          fill
          src="/beachhouse.jpg"
          alt="beach house"
          className="object-cover w-full h-full"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} guests - {property.bedrooms} bedrooms -{" "}
            {property.bathroom} bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile1.jpg"
              alt="smile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              <strong>Emma Rich </strong>is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">{property.description}</p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
