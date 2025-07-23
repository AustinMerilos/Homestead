import { Typography, Grid } from "@material-ui/core";
import images from "../../assets";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import styled, { keyframes } from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vw;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  background: url(${images.banner});
  background-position-y: bottom;
  background-position-x: unset;
  background-size: cover;
  margin: 1vw 0 4vw;

  @media (max-width: 576px) {
    height: 30vw;
  }
`;

const Container = styled(Grid).attrs({
  container: true,
  direction: "column",
})<{ $fullWidth?: boolean }>`
  padding: 0 0 4vw 0;
  max-width: 1230px;
  margin: 0 auto;

  @media (max-width: 576px) {
  }
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 380px;
  border-radius: 18px;
  overflow: hidden;

  @media (max-width: 576px) {
    max-height: 180px;
  }
`;

const BannerContainerContent = styled.div`
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
`;

const BannerDescription = styled.p`
  color: white;
  font-size: 1.6vw;
  line-height: 160%;

  @media (max-width: 576px) {
    font-size: 2.2vw;
  }
`;

const BannerTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 2.5vw;

  @media (max-width: 576px) {
    font-size: 1.9vw;
  }
`;

const Banner = styled.img`
  display: flex;
  width: 50%;

  @media (max-width: 576px) {
    width: 80%;
  }
`;
const BannerButton = styled.button`
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

const PropertySectionContainer = styled.div`
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

const PropertySectionInnerContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Bed = styled(BedIcon)`
  && {
    color: teal;
    height: 25px;
    width: 25px;
  }
`;

const Area = styled(SquareFootIcon)`
  && {
    color: teal;
    height: 25px;
    width: 25px;
  }
`;

const Bath = styled(BathtubIcon)`
  && {
    color: teal;
    height: 25px;
    width: 25px;
  }
`;

const PropertySectionTitle = styled(Typography).attrs({
  variant: "h6",
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

const PropertySectionText = styled.div`
  margin: 12px 20px;
  font-size: 20px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const PropertySectionIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 25vw;
  height: 20vw; /* Match the image’s sizing */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid teal;

  @media (max-width: 576px) {
    width: 100%;
    height: 40vw;
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  z-index: 1; /* stays above image */
  position: relative;
`;

const PropertySectionImage = styled.img`
  width: 25vw;
  height: 20vw;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid teal;

  @media (max-width: 576px) {
    width: 100%;
    height: 40vw;
    margin: 20px 0;
  }
`;
export {
  Bath,
  Area,
  Bed,
  HeaderContainer,
  Container,
  Banner,
  BannerTitle,
  BannerButton,
  BannerContainer,
  BannerContainerContent,
  BannerDescription,
  Spinner,
  PropertySectionContainer,
  PropertySectionIconContainer,
  PropertySectionImage,
  PropertySectionInnerContainer,
  PropertySectionText,
  PropertySectionTitle,
  ImageWrapper,
};
