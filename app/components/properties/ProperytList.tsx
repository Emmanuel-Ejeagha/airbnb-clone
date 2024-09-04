"use client";
import React, { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
  is_favorite: boolean;
};

interface PropertyListProps {
  landlord_id?: string | null;
  favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
  landlord_id,
  favorites,
}) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id == id) {
        property.is_favorite = is_favorite;
        if (is_favorite) {
          console.log("added to list of favorite proprties");
        } else {
          console.log("removed from list  ");
        }
      }
      return property;
    });
    setProperties(tmpProperties);
  };

  const getProperties = async () => {
    let url = "/api/properties/";
    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`;
    } else if (favorites) {
      url += "?is_favorites=true";
    }
    const tmpProperties = await apiService.get(url);

    setProperties(
      tmpProperties.data.map((property: PropertyType) => {
        if (tmpProperties.favorites.includes(property.id)) {
          property.is_favorite = true;
        } else {
          property.is_favorite = false;
        }
        return property;
      })
    );
  };
  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return (
          <PropertyListItem
            markFavorite={(is_favorite) =>
              markFavorite(property.id, is_favorite)
            }
            key={property.id}
            property={property}
          />
        );
      })}
    </>
  );
};

export default PropertyList;
