import React, { useMemo } from "react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { propertyFinderUrl, fetchApi } from "../../utiles/fetchApi";
import { areaFormat, numberFormat } from "../../utiles/numberFormater";
import { useReveal } from "../../components/reveal";
import Carousel from "./carousel";
import {
  AmenitiesContainer,
  Amenitiesitem,
  AmenitiesTitle,
  Area,
  Bath,
  Bed,
  Container,
  Description,
  IconContainer,
  IconText,
  Loader,
  TextContainer,
  TextHeaders,
  Title,
  Verified,
} from "./styles";

// Property Details page

type PropertyType = {
  id: string;
};

export default function PropertyDetails() {
  const { id } = useParams<PropertyType>();
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState();
  const [baths, setBaths] = useState();
  const [area, setArea] = useState();
  const [rooms, setRooms] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [rentFrequency, setRentFrequency] = useState();
  const [photos, setPhotos] = useState([{ title: null as string | null, url: "" }]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [dealType, setDealType] = useState();
  const [furnishingStatus, setFurnishingStatus] = useState();
  const formater = useMemo(() => numberFormat(Number(price)), [price]);
  const areaFormater = useMemo(() => areaFormat(Number(area)), [area]);
  const iconsReveal = useReveal<HTMLDivElement>(0);
  const priceReveal = useReveal<HTMLDivElement>(80);
  const descriptionReveal = useReveal<HTMLDivElement>(160);
  const amenitiesReveal = useReveal<HTMLDivElement>(240);

  const getResults = useCallback(async () => {
    const results = await fetchApi(
      `${propertyFinderUrl}/details/byid?id=${id}`
    );
    const searchData = results.detail;

    setAmenities(searchData.amenities ?? []);
    setTitle(searchData.title);
    setRooms(searchData.bedrooms);
    setPrice(searchData.price);
    setBaths(searchData.bathrooms);
    setArea(searchData.size);
    setDealType(searchData.dealType);
    setFurnishingStatus(searchData.additionalDetails?.Furnishings);
    setRentFrequency(searchData.rentFrequency);
    setDescription(searchData.description);
    setPhotos(
      (searchData.images ?? []).map((url: string) => ({ title: null, url }))
    );
    setIsVerified(Boolean(searchData.isVerified));
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  let propertyType = "";
  if (dealType === "For_Rent") {
    propertyType = " Renting";
  }
  if (dealType === "For_Sale") {
    propertyType = "Selling";
  }

  return (
    <Container>
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <Title>{title} </Title>
          <Carousel photos={photos}></Carousel>

          <IconContainer {...iconsReveal}>
            {isVerified && <Verified />}
            <Bed />
            <IconText>{rooms}</IconText>
            <Bath />
            <IconText>{baths}</IconText>
            <Area />
            <IconText>{areaFormater} sqft</IconText>
          </IconContainer>
          <TextContainer {...priceReveal}>
            <TextHeaders>Price: {formater} </TextHeaders>
            {rentFrequency && <TextHeaders>{rentFrequency}</TextHeaders>}
            <TextHeaders>Property Type: {propertyType}</TextHeaders>
            <TextHeaders>Furnished Status: {furnishingStatus}</TextHeaders>
          </TextContainer>

          <Description {...descriptionReveal}>{description}</Description>
          {amenities.length > 0 && (
            <>
              <AmenitiesTitle>Amenities:</AmenitiesTitle>
              <AmenitiesContainer {...amenitiesReveal}>
                {amenities.map((amenity, index) => (
                  <Amenitiesitem key={index}>{amenity}</Amenitiesitem>
                ))}
              </AmenitiesContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
}
