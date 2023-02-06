import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import images from "../../assets";
import { bayutUrl, fetchApi } from "../../utiles/fetchApi";
import BannerSections from "./bannerSections";
import constants from "./constants";
import PropertySection from "./sections";
import { HeaderContainer, PropertySectionInnerContainer } from "./styles";

export default function Home() {
  const [salePropertyArray, setSalePropertyArray] = useState([
    {
      title: "default 1",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      area: "NA",
      image: "NA",
      externalID: "",
    },
    {
      title: "default 2",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      area: "NA",
      image: "NA",
      externalID: "",
    },
    {
      title: "default 3",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      area: "NA",
      image: "NA",
      externalID: "",
    },
  ]);
  const [rentPropertyArray, setRentPropertyArray] = useState([
    {
      title: "default 1",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      area: "NA",
      image: "NA",
      externalID: "",
    },
    {
      title: "default 2",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      area: "NA",
      image: "NA",
      externalID: "",
    },
    {
      title: "default 3",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      area: "NA",
      image: "NA",
      externalID: "",
    },
  ]);

  const getResults = useCallback(async () => {
    const results = await fetchApi(
      `${bayutUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=3&page=0&lang=en`
    );
    const rentResults = await fetchApi(
      `${bayutUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=3&page=0&lang=en`
    );
    const searchData = results.hits;
    const rentData = rentResults.hits;
    setSalePropertyArray([
      {
        title: searchData[0].title,
        image: searchData[0].coverPhoto.url,
        baths: searchData[0].baths,
        rooms: searchData[0].rooms,
        price: searchData[0].price,
        area: searchData[0].area,
        externalID: searchData[0].externalID,
      },
      {
        title: searchData[1].title,
        image: searchData[1].coverPhoto.url,
        baths: searchData[1].baths,
        rooms: searchData[1].rooms,
        price: searchData[1].price,
        area: searchData[1].area,
        externalID: searchData[1].externalID,
      },
      {
        title: searchData[2].title,
        image: searchData[2].coverPhoto.url,
        baths: searchData[2].baths,
        rooms: searchData[2].rooms,
        price: searchData[2].price,
        area: searchData[2].area,
        externalID: searchData[2].externalID,
      },
    ]);
    setRentPropertyArray([
      {
        title: rentData[0].title,
        image: rentData[0].coverPhoto.url,
        baths: rentData[0].baths,
        rooms: rentData[0].rooms,
        price: rentData[0].price,
        area: rentData[0].area,
        externalID: rentData[0].externalID,
      },
      {
        title: rentData[1].title,
        image: rentData[1].coverPhoto.url,
        baths: rentData[1].baths,
        rooms: rentData[1].rooms,
        price: rentData[1].price,
        area: rentData[1].area,
        externalID: rentData[1].externalID,
      },
      {
        title: rentData[2].title,
        image: rentData[2].coverPhoto.url,
        baths: rentData[2].baths,
        rooms: rentData[2].rooms,
        price: rentData[2].price,
        area: rentData[2].area,
        externalID: rentData[2].externalID,
      },
    ]);
  }, []);

  useEffect(() => {
    getResults();
  }, [getResults]);

  let urlString = "/search/property/";
  return (
    <>
      <HeaderContainer />
      <BannerSections
        image={images.rentBanner}
        description={constants.rentProperty.description}
        title={constants.rentProperty.title}
        button={constants.rentProperty.button}
        link={constants.rentProperty.link}
      ></BannerSections>
      <PropertySectionInnerContainer>
        {rentPropertyArray.map((array) => {
          if (array.externalID === "") {
            urlString = "";
          }
          return (
            <PropertySection
              title={array.title}
              baths={array.baths}
              rooms={array.rooms}
              price={Number(array.price)}
              area={Number(array.area)}
              image={array.image}
              link={`${urlString}${array.externalID}`}
            ></PropertySection>
          );
        })}
      </PropertySectionInnerContainer>

      <BannerSections
        image={images.buyBanner}
        description={constants.buyProperty.description}
        title={constants.buyProperty.title}
        button={constants.buyProperty.button}
        link={constants.buyProperty.link}
      ></BannerSections>

      <PropertySectionInnerContainer>
        {salePropertyArray.map((array) => {
          if (array.externalID === "") {
            urlString = "";
          }
          return (
            <PropertySection
              title={array.title}
              baths={array.baths}
              rooms={array.rooms}
              price={Number(array.price)}
              area={Number(array.area)}
              image={array.image}
              link={`${urlString}${array.externalID}`}
            ></PropertySection>
          );
        })}
      </PropertySectionInnerContainer>
    </>
  );
}
