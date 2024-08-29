import Image from "next/image";
import { PropertyType } from "./ProperytList";
import React from "react";
import { useRouter } from "next/navigation";

interface PropertyProps {
  property: PropertyType;
}

const PropertyListItem: React.FC<PropertyProps> = ({ property }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/properties/${property.Id}`)}
      className="cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={property.image_url}
          alt="beach house"
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm">
          <strong className="text-sm text-gray-500">
            ₦{property.price_per_night}{" "}
          </strong>
          per night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
