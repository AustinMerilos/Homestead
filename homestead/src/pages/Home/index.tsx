import React from "react";
import images from "../../assets";
import Footer from "../../components/footer";
import SearchBar from "../../components/searchBar";
import constants from "./constants";
import {
  Container,
  HeaderContainer,
  Logo,
  RentBanner,
  BannerContainer,
  BannerContainerContent,
  BannerButton,
  BannerTitle,
  BannerDescription,
  BuyBanner,
} from "./styles";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Logo src={images.houseLogo}></Logo>
      </HeaderContainer>
      <SearchBar />
      <Container>
        <BannerContainer>
          <RentBanner />
          <BannerContainerContent>
            <BannerTitle>{constants.rentProperty.title}</BannerTitle>
            <BannerDescription>
              {constants.rentProperty.description}
            </BannerDescription>
            <BannerButton>{constants.rentProperty.button}</BannerButton>
          </BannerContainerContent>
        </BannerContainer>
      </Container>
      <div>slider</div>
      <Container>
        <BannerContainer>
          <BuyBanner />
          <BannerContainerContent>
            <BannerTitle>{constants.buyProperty.title}</BannerTitle>
            <BannerDescription>
              {constants.buyProperty.description}
            </BannerDescription>
            <BannerButton>CLick to buy</BannerButton>
          </BannerContainerContent>
        </BannerContainer>
      </Container>
      <div>slider</div>
      <Footer subtitle={"About"} title={"Carrer"}></Footer>
    </>
  );
}
