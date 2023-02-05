import axios from "axios";
import React, { useEffect, useState } from "react";
import images from "../../assets";
import { rentOptions, saleOptions } from "../../utiles/fetchApi";
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
      image: "NA",
      externalID: "",
    },
    {
      title: "default 2",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      image: "NA",
      externalID: "",
    },
    {
      title: "default 3",
      baths: "NA",
      rooms: "NA",
      price: "NA",
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
      image: "NA",
      externalID: "",
    },
    {
      title: "default 2",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      image: "NA",
      externalID: "",
    },
    {
      title: "default 3",
      baths: "NA",
      rooms: "NA",
      price: "NA",
      image: "NA",
      externalID: "",
    },
  ]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .request(saleOptions)
      .then(function (response) {
        setSalePropertyArray([
          {
            title: response.data.hits[0].title,
            image: response.data.hits[0].coverPhoto.url,
            baths: response.data.hits[0].baths,
            rooms: response.data.hits[0].rooms,
            price: response.data.hits[0].price,
            externalID: response.data.hits[0].externalID,
          },
          {
            title: response.data.hits[1].title,
            image: response.data.hits[1].coverPhoto.url,
            baths: response.data.hits[1].baths,
            rooms: response.data.hits[1].rooms,
            price: response.data.hits[1].price,
            externalID: response.data.hits[1].externalID,
          },
          {
            title: response.data.hits[2].title,
            image: response.data.hits[2].coverPhoto.url,
            baths: response.data.hits[2].baths,
            rooms: response.data.hits[2].rooms,
            price: response.data.hits[2].price,
            externalID: response.data.hits[2].externalID,
          },
        ]);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(rentOptions)
      .then(function (response) {
        setRentPropertyArray([
          {
            title: response.data.hits[0].title,
            image: response.data.hits[0].coverPhoto.url,
            baths: response.data.hits[0].baths,
            rooms: response.data.hits[0].rooms,
            price: response.data.hits[0].price,
            externalID: response.data.hits[0].externalID,
          },
          {
            title: response.data.hits[1].title,
            image: response.data.hits[1].coverPhoto.url,
            baths: response.data.hits[1].baths,
            rooms: response.data.hits[1].rooms,
            price: response.data.hits[1].price,
            externalID: response.data.hits[1].externalID,
          },
          {
            title: response.data.hits[2].title,
            image: response.data.hits[2].coverPhoto.url,
            baths: response.data.hits[2].baths,
            rooms: response.data.hits[2].rooms,
            price: response.data.hits[2].price,
            externalID: response.data.hits[2].externalID,
          },
        ]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
              image={array.image}
              link={`${urlString}${array.externalID}`}
            ></PropertySection>
          );
        })}
      </PropertySectionInnerContainer>
    </>
  );
}
