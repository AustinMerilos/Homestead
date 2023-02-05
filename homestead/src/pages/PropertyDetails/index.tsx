import React, { useMemo } from "react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bayutUrl, fetchApi } from "../../utiles/fetchApi";
import { areaFormat, numberFormat } from "../../utiles/numberFormater";
import Carousel from "./carousel";
import {
  Area,
  Bath,
  Bed,
  Container,
  IconContainer,
  IconText,
  Loader,
  PriceContainer,
  PriceText,
  SubText,
  Title,
  Verified,
} from "./styles";

type PropertyType = {
  id: string;
};

export default function PropertyDetails() {
  const { id } = useParams<PropertyType>();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState();
  const [baths, setBaths] = useState();
  const [area, setArea] = useState();
  const [rooms, setRooms] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [rentFrequency, setRentFrequency] = useState();
  const [photos, setPhotos] = useState([{ title: "", url: "" }]);
  const [amenitites, setAmenitites] = useState([{ text: "" }]);
  const [verification, setVerification] = useState();
  const [purpose, setPurpose] = useState();
  const formater = useMemo(() => numberFormat(Number(price)), [price]);
  const areaFormater = useMemo(() => areaFormat(Number(area)), [area]);

  const getResults = useCallback(async () => {
    const results = await fetchApi(
      `${bayutUrl}/properties/detail?externalID=${id}`
    );
    const searchData = results;
    setTitle(searchData.title);
    setRooms(searchData.rooms);
    setPrice(searchData.price);
    setBaths(searchData.baths);
    setArea(searchData.area);
    setPurpose(searchData.purpose);
    setRentFrequency(searchData.rentFrequency);
    setDescription(searchData.description);
    setPhotos(searchData.photos);
    setAmenitites(searchData.amenitites);
    setVerification(searchData.verification.status);
    setLoading(true);
    console.log(searchData);
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
      {loading === false ? (
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
            <Bath />
            <IconText>{baths}</IconText>
            <Bed />
            <IconText>{rooms}</IconText>
            <Area />
            <IconText>{areaFormater} sqft</IconText>
          </IconContainer>

          <PriceContainer>
            <PriceText>Price: {formater} </PriceText>
            {rentFrequency && <PriceText>{rentFrequency}</PriceText>}
          </PriceContainer>
          <SubText>PropertyType: {propertyType}</SubText>

          <SubText>{description}</SubText>
          {/* <>{amenitites.map((item) => ({ text: item.text }))}</> */}
        </>
      )}
    </Container>
  );
}
