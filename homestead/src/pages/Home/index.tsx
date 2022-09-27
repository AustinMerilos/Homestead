import React from "react";
import { BuyContainer, HeaderContainer, RentContainer } from "./styles";

export default function Home() {
  return (
    <div>
      <HeaderContainer> Homestead</HeaderContainer>
      <RentContainer> Rent homes here</RentContainer>
      <BuyContainer>Buy a home here</BuyContainer>
    </div>
  );
}
