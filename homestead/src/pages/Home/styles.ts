import React from "react";
import { Typography,Grid } from '@material-ui/core';
import styled from 'styled-components';
import images from "../../assets";

export const HeaderContainer = styled.div`
  background-color: grey;
  background:url(${images.banner});

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


export const Container = styled(Grid).attrs({
  container: true,
  direction: 'column',
})<{ $fullWidth?: boolean }>`
  padding: 50px 0;
  max-width: 1230px;

  margin: 0 auto;`;

export const BannerContainer = styled.div`
display: flex;
  flex-direction: row;
  height: 40vw;
  max-height: 380px;
  border-radius: 18px;
  overflow: hidden;`

  export const BannerContainerContent = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  padding: 0 3vw;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 50%;
  box-sizing: border-box;`

  export const BannerDescription = styled.p`
  color: white;
  font-size: 1.8vw;
  line-height: 160%;`

  export const BannerTitle = styled(Typography).attrs({
  variant: 'h2',
})`

  color: white;
  font-weight: 700;
  font-size: 2.5vw;
`

export const Banner = styled.img`

  height: 100%;
  width: 50%;
  `
export const BannerButton = styled.button`
  
  background-color: teal;
  border-radius: 15px;
  font-size: 1.7vw;
  font-weight: 500;
  margin-top: 6vw;
  cursor: pointer;`


  export const SliderContainer = styled.div``
  export const SliderTitle = styled.div``
  export const SliderText = styled.div``
  export const SliderSubText = styled.div``
  export const SliderImage = styled.img``

