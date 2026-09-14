import { Typography, Grid } from "@material-ui/core";
import images from "../../assets";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import styled from "styled-components";
import { revealStyle } from "../../components/reveal";
import {
  colors,
  font,
  gradients,
  radius,
  shadow,
  spin,
  transition,
} from "../../theme";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vw;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  background: linear-gradient(
      180deg,
      rgba(11, 63, 63, 0.15) 0%,
      rgba(11, 63, 63, 0) 40%
    ),
    url(${images.banner});
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
  border-radius: ${radius.lg};
  overflow: hidden;
  box-shadow: ${shadow.card};
  transition: ${transition.slow};

  &:hover {
    box-shadow: ${shadow.cardHover};
    transform: translateY(-4px);
  }

  @media (max-width: 576px) {
    max-height: 180px;
  }
`;

const BannerContainerContent = styled.div`
  background: ${gradients.hero};
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
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.6vw;
  line-height: 160%;

  @media (max-width: 576px) {
    font-size: 2.2vw;
  }
`;

const BannerTitle = styled.div`
  color: white;
  font-family: ${font.display};
  font-weight: 600;
  font-size: 2.6vw;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.9vw;
  }
`;

const Banner = styled.img`
  display: flex;
  width: 50%;
  object-fit: cover;

  @media (max-width: 576px) {
    width: 80%;
  }
`;
const BannerButton = styled.button`
  background: ${gradients.button};
  border: none;
  padding: 0.6vw 1.4vw;
  color: white;
  border-radius: ${radius.pill};
  font-size: 1.7vw;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  margin-bottom: 1.2vw;
  box-shadow: ${shadow.button};
  transition: ${transition.base};

  &:hover {
    background: ${gradients.buttonHover};
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 12px 26px rgba(11, 63, 63, 0.35);
  }

  &:active {
    transform: translateY(0) scale(0.99);
  }

  @media (max-width: 576px) {
    font-size: 8px;
  }
`;

const PropertySectionContainer = styled.div<{
  $visible?: boolean;
  $delay?: number;
}>`
  display: flex;
  flex-direction: column;
  padding: 1.2vw 1.2vw 1.6vw;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background: ${colors.white};
  border-radius: ${radius.lg};
  box-shadow: ${shadow.card};
  transition: ${transition.slow};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${shadow.cardHover};
  }

  @media (max-width: 576px) {
    padding: 16px;
  }

  ${revealStyle}
`;

const PropertySectionInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1278px;
  margin: 0 auto 4vw;
  padding: 0 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    gap: 16px;
    margin: 0 auto 10vw;
  }
`;

const Bed = styled(BedIcon)`
  && {
    color: ${colors.teal};
    height: 25px;
    width: 25px;
  }
`;

const Area = styled(SquareFootIcon)`
  && {
    color: ${colors.teal};
    height: 25px;
    width: 25px;
  }
`;

const Bath = styled(BathtubIcon)`
  && {
    color: ${colors.teal};
    height: 25px;
    width: 25px;
  }
`;

const PropertySectionTitle = styled(Typography).attrs({
  variant: "h6",
})`
  color: ${colors.ink};
  font-family: ${font.display};
  font-weight: 600;
  font-size: 1.6vw;
  margin-top: 0.6vw;

  && {
    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
`;

const PropertySectionText = styled.div`
  margin: 12px 20px;
  font-size: 20px;
  color: ${colors.slate};
  font-weight: 600;

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
  width: 100%;
  aspect-ratio: 5 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.tealTint};
  overflow: hidden;
  border-radius: ${radius.md};
`;

const Spinner = styled.div`
  border: 4px solid ${colors.tealTint};
  border-top: 4px solid ${colors.teal};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 0.9s linear infinite;
  z-index: 1; /* stays above image */
  position: relative;
`;

const PropertySectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${radius.md};
  transition: ${transition.slow};

  &:hover {
    transform: scale(1.06);
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
