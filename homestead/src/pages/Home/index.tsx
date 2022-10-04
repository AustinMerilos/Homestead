import React from "react";
import images from "../../assets";
import houseLogo from "../../assets";
import {
  BuyButton,
  BuyContainer,
  HeaderContainer,
  Logo,
  RentButton,
  RentContainer,
} from "./styles";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Logo src={images.houseLogo}></Logo>
      </HeaderContainer>
      Navbar placeholder
      <RentContainer>
        Rent homes here
        <RentButton>Click to rent</RentButton>
        <div>slider</div>
      </RentContainer>
      <BuyContainer>
        Buy a home here
        <BuyButton>CLick to buy</BuyButton>
        <div>slider</div>
      </BuyContainer>
    </>
  );
}
