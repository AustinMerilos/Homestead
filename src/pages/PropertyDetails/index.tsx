import { OtherHouses } from "@mui/icons-material";
import React, { useMemo } from "react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bayutUrl, fetchApi } from "../../utiles/fetchApi";
import { areaFormat, numberFormat } from "../../utiles/numberFormater";
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
  const [photos, setPhotos] = useState([{ title: "", url: "" }]);
  const [amenities, setAmenities] = useState([]);
  const [verification, setVerification] = useState();
  const [purpose, setPurpose] = useState();
  const [furnishingStatus, setFurnishingStatus] = useState();
  const formater = useMemo(() => numberFormat(Number(price)), [price]);
  const areaFormater = useMemo(() => areaFormat(Number(area)), [area]);

  const getResults = useCallback(async () => {
    const results = await fetchApi(
      `${bayutUrl}/properties/detail?externalID=${id}`
    );
    const searchData = results;
    const amenitiesText = searchData.amenities.map(
      (amenity: { text: string }) => amenity.text
    );

    setAmenities(amenitiesText);
    setTitle(searchData.title);
    setRooms(searchData.rooms);
    setPrice(searchData.price);
    setBaths(searchData.baths);
    setArea(searchData.area);
    setPurpose(searchData.purpose);
    setFurnishingStatus(searchData.furnishingStatus);
    setRentFrequency(searchData.rentFrequency);
    setDescription(searchData.description);
    setPhotos(searchData.photos);
    setVerification(searchData.verification.status);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  let propertyType = "";
  if (purpose === "for-rent") {
    propertyType = " Renting";
  }
  if (purpose === "for-sale") {
    propertyType = "Selling";
  }

  return (
    <Container>
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <Title>{title} </Title>
          <Carousel
            photos={photos.map((property) => ({
              title: property.title,
              url: property.url,
            }))}
          ></Carousel>

          <IconContainer>
            {verification === "verified" && <Verified />}
            <Bed />
            <IconText>{rooms}</IconText>
            <Bath />
            <IconText>{baths}</IconText>
            <Area />
            <IconText>{areaFormater} sqft</IconText>
          </IconContainer>
          <IconContainer>
            <TextContainer>
              <TextHeaders>Price: {formater} </TextHeaders>
              {rentFrequency && <TextHeaders>{rentFrequency}</TextHeaders>}
              <TextHeaders>Property Type: {propertyType}</TextHeaders>
              <TextHeaders>Furnished Status: {furnishingStatus}</TextHeaders>
            </TextContainer>
          </IconContainer>

          <Description>{description}</Description>
          {amenities.length > 0 && (
            <>
              <AmenitiesTitle>Amenities:</AmenitiesTitle>
              <AmenitiesContainer>
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
