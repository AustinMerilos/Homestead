import axios from "axios";
import React, { useEffect, useState } from "react";
import images from "../../assets";
import Footer from "../../components/footer";
import SearchBar from "../../components/searchBar";
import { rentOptions, saleOptions } from "../../utiles/fetchApi";
import BannerSections from "./bannerSections";
import constants from "./constants";
import PropertySection from "./sections";
import { HeaderContainer, Logo, PropertySectionInnerContainer } from "./styles";

export default function Home() {
  const [salePropertyArray, setSalePropertyArray] = useState([
    { title: "default 1", baths: "NA", rooms: "NA", price: "NA", image: "NA" },
    { title: "default 2", baths: "NA", rooms: "NA", price: "NA", image: "NA" },
    { title: "default 3", baths: "NA", rooms: "NA", price: "NA", image: "NA" },
  ]);
  const [rentPropertyArray, setRentPropertyArray] = useState([
    { title: "default 1", baths: "NA", rooms: "NA", price: "NA", image: "NA" },
    { title: "default 2", baths: "NA", rooms: "NA", price: "NA", image: "NA" },
    { title: "default 3", baths: "NA", rooms: "NA", price: "NA", image: "NA" },
  ]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .request(saleOptions)
      .then(function (response) {
        console.log(response.data);

        setSalePropertyArray([
          {
            title: response.data.hits[0].title,
            image: response.data.hits[0].coverPhoto.url,
            baths: response.data.hits[0].baths,
            rooms: response.data.hits[0].rooms,
            price: response.data.hits[0].price,
          },
          {
            title: response.data.hits[1].title,
            image: response.data.hits[1].coverPhoto.url,
            baths: response.data.hits[1].baths,
            rooms: response.data.hits[1].rooms,
            price: response.data.hits[1].price,
          },
          {
            title: response.data.hits[2].title,
            image: response.data.hits[2].coverPhoto.url,
            baths: response.data.hits[2].baths,
            rooms: response.data.hits[2].rooms,
            price: response.data.hits[2].price,
          },
        ]);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(rentOptions)
      .then(function (response) {
        console.log(response.data);
        setRentPropertyArray([
          {
            title: response.data.hits[0].title,
            image: response.data.hits[0].coverPhoto.url,
            baths: response.data.hits[0].baths,
            rooms: response.data.hits[0].rooms,
            price: response.data.hits[0].price,
          },
          {
            title: response.data.hits[1].title,
            image: response.data.hits[1].coverPhoto.url,
            baths: response.data.hits[1].baths,
            rooms: response.data.hits[1].rooms,
            price: response.data.hits[1].price,
          },
          {
            title: response.data.hits[2].title,
            image: response.data.hits[2].coverPhoto.url,
            baths: response.data.hits[2].baths,
            rooms: response.data.hits[2].rooms,
            price: response.data.hits[2].price,
          },
        ]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Logo src={images.houseLogo}></Logo>
      </HeaderContainer>
      <SearchBar />
      <BannerSections
        image={images.rentBanner}
        description={constants.rentProperty.description}
        title={constants.rentProperty.title}
        button={constants.rentProperty.button}
      ></BannerSections>
      <PropertySectionInnerContainer>
        {rentPropertyArray.map((array) => {
          return (
            <PropertySection
              title={array.title}
              baths={array.baths}
              rooms={array.rooms}
              price={array.price}
              image={array.image}
            ></PropertySection>
          );
        })}
      </PropertySectionInnerContainer>

      <BannerSections
        image={images.buyBanner}
        description={constants.buyProperty.description}
        title={constants.buyProperty.title}
        button={constants.buyProperty.button}
      ></BannerSections>

      <PropertySectionInnerContainer>
        {salePropertyArray.map((array) => {
          return (
            <PropertySection
              title={array.title}
              baths={array.baths}
              rooms={array.rooms}
              price={array.price}
              image={array.image}
            ></PropertySection>
          );
        })}
      </PropertySectionInnerContainer>
      <Footer title={"2022 Homestead"}></Footer>
    </>
  );
}
