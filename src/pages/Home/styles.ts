import { Typography, Grid } from '@material-ui/core';
import styled from 'styled-components';
import images from "../../assets";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vw;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  background:url(${images.banner});
  background-position-y: bottom;
  background-position-x: unset;
  background-size: cover;
  margin: 1vw 0 4vw;
  
  @media (max-width: 576px) {
    height: 30vw;
  }
`;

export const Container = styled(Grid).attrs({
  container: true,
  direction: 'column',
})<{ $fullWidth?: boolean }>`
  padding: 0 0 4vw 0;
  max-width: 1230px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 380px;
  border-radius: 18px;
  overflow: hidden;
  
  @media (max-width: 576px) {
    max-height: 180px;
  }
`

export const BannerContainerContent = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  padding: 2vw 3vw;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  
  @media (max-width: 576px) {
    padding: 1vw 1vw;
  }
`

export const BannerDescription = styled.p`
  color: white;
  font-size: 1.6vw;
  line-height: 160%;
  
  @media (max-width: 576px) {
    font-size: 2.2vw;
  }
`

export const BannerTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 2.5vw;
  
  @media (max-width: 576px) {
    font-size: 1.9vw;
  }
`

export const Banner = styled.img`
  display: flex;
  width: 50%;
  
  @media (max-width: 576px) {
    width: 80%;
  }
`
export const BannerButton = styled.button`
  background-color: teal;
  padding: 0 1vw 0 1vw;
  color: white;
  border-radius: 15px;
  font-size: 1.7vw;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.2vw;

  @media (max-width: 576px) {
    font-size: 8px;
  }
`;

export const PropertySectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3vw 4vw;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 50%;
  box-sizing: border-box;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const PropertySectionInnerContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Bed = styled(BedIcon)`
  && {
    color: teal;
    height: 25spx;
    width: 25px;
  }
`;

export const Area = styled(SquareFootIcon)`
  && {
    color: teal;
    height: 25spx;
    width: 25px;
  }
`;

export const Bath = styled(BathtubIcon)`
  && {
    color: teal;
    height: 25px;
    width: 25px;
  }
`;

export const PropertySectionTitle = styled(Typography).attrs({
  variant: 'h6',
})`
  color: black;
  font-weight: 700;
  font-size: 2.5vw;

 && {
   @media (max-width: 576px) {
    font-size: 15px;
  }
}
`;

export const PropertySectionText = styled.div`
  margin: 12px 20px;
  font-size: 20px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const PropertySectionIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

export const PropertySectionImage = styled.img`
  margin: 1vw;
  border-radius: 4px;
  border-style: solid;
  border-color: teal;
  float: left;
  width: 25vw;
  height: 20vw;
  object-fit: cover;

  @media (max-width: 576px) {
    width: 100%;
    height: 40vw;
    margin: 20px 0;
  }
`;