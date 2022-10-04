import React from "react";
import styled from 'styled-components';
import images from "../../assets";

export const HeaderContainer = styled.div`
  background-color: grey;
  background: 
 url(${images.banner});

 background-position-y: bottom;
 background-position-x: unset;
 background-size: cover;
  
	
  height: 15vw;
  width: 100vw;
`;

export const Logo = styled.img`
  

  height: 12%;
  width: 12%;
  
`;
export const RentContainer = styled.div``;
export const RentButton = styled.button``;
export const BuyContainer = styled.div``;
export const BuyButton = styled.button``;
