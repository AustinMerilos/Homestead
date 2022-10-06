import React from "react";
import images from "../../assets";
import Footer from "../../components/footer";
import SearchBar from "../../components/searchBar";
import BannerSections from "./bannerSections";
import constants from "./constants";
import Slider from "./slides";
import { HeaderContainer, Logo } from "./styles";

export default function Home() {
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
      <Slider
        title={"Checkout our properties to rent"}
        subtitle={"s"}
        description={"s"}
        image={"s"}
      ></Slider>
      <BannerSections
        image={images.buyBanner}
        description={constants.buyProperty.description}
        title={constants.buyProperty.title}
        button={constants.buyProperty.button}
      ></BannerSections>
      <Slider
        title={"Checkout our properties to buy"}
        subtitle={"s"}
        description={"s"}
        image={"s"}
      ></Slider>
      <Footer title={"2022 Homestead"}></Footer>
    </>
  );
}
