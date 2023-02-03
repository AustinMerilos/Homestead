import React, { useMemo } from "react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bayutUrl, fetchApi } from "../../utiles/fetchApi";
import Carousel from "./carousel";
import { Container, SubText, TextContainer, Title } from "./styles";

type PropertyType = {
  id: string;
};

export default function PropertyDetails() {
  const { id } = useParams<PropertyType>();

  const [title, setTitle] = useState();
  const [baths, setBaths] = useState();
  const [rooms, setRooms] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [rentFrequency, setRentFrequency] = useState();
  const [photos, setPhotos] = useState([{ title: "", url: "" }]);
  const [amenitites, setAmenitites] = useState([{ text: "" }]);
  const [verification, setVerification] = useState();

  const getResults = useCallback(async () => {
    const results = await fetchApi(
      `${bayutUrl}/properties/detail?externalID=${id}`
    );
    const searchData = results;
    setTitle(searchData.title);
    setRooms(searchData.baths);
    setPrice(searchData.price);
    setBaths(searchData.baths);
    setRentFrequency(searchData.rentFrequency);
    setDescription(searchData.description);
    setPhotos(searchData.photos);
    setAmenitites(searchData.amenitites);
    setVerification(searchData.verification.status);
    console.log(searchData);
  }, [id]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  return (
    <Container>
      <Title>{title} </Title>
      <Carousel
        photos={photos.map((property) => ({
          title: property.title,
          url: property.url,
        }))}
      ></Carousel>
      <TextContainer>
        <SubText>baths={baths}</SubText>
        <SubText>
          price={Number(price)} /{rentFrequency && rentFrequency}
        </SubText>

        <SubText>rooms={rooms}</SubText>
        <SubText>description={description}</SubText>
        {verification === "verified" && (
          <SubText>verification={verification}</SubText>
        )}
      </TextContainer>

      {/* <>
        {amenitites.map((item) => (
          <SubText>{item.text}</SubText>
        ))}
      </> */}
    </Container>
  );
}
