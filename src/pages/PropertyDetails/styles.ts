import { Grid } from "@material-ui/core";
import styled from "styled-components";
import BedIcon from "@mui/icons-material/Bed";
import VerifiedIcon from "@mui/icons-material/Verified";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CircularProgress from "@material-ui/core/CircularProgress";
import { revealStyle } from "../../components/reveal";
import { colors, fadeIn, font, gradients, pulse, radius, shadow, transition } from "../../theme";

export const Container = styled(Grid).attrs({
  container: true,
  direction: "column",
})`
  display: flex;
  padding: 60px 120px 10px;
  margin-top: 2vw;
  margin-bottom: 10vw;
  @media (max-width: 576px) {
    padding: 50px 20px 10px;
    margin-top: 12vw;
  }
`;
export const Loader = styled(CircularProgress).attrs({ size: 250 })`
  && {
    margin: 250px;
    align-self: center;
    color: ${colors.teal};

    @media (max-width: 576px) {
      && {
        size: 25;
        margin: 25px;
      }
    }
  }
`;
export const PropertyImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3vw;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;
export const PropertyImage = styled.img`
  margin: 1vw;
  border-radius: ${radius.lg};
  width: 60%;
  object-fit: cover;
  box-shadow: ${shadow.card};
  animation: ${fadeIn} 0.4s ease;
`;

export const ThumbnailStrip = styled.div`
  display: flex;
  gap: 8px;
  width: 60%;
  padding: 4px 0 8px;
  margin-bottom: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;

  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const Thumbnail = styled.img<{ $active: boolean }>`
  width: 72px;
  height: 52px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: ${radius.sm};
  cursor: pointer;
  border: 2px solid
    ${({ $active }) => ($active ? colors.teal : "transparent")};
  opacity: ${({ $active }) => ($active ? 1 : 0.55)};
  transition: ${transition.base};

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 52px;
    height: 38px;
  }
`;

export const IconContainer = styled(Grid).attrs({
  container: true,
  direction: "row",
})`
  display: flex;
  align-items: center;
  margin-top: 24px;
  ${revealStyle}
`;
export const TextContainer = styled(Grid).attrs({
  container: true,
  direction: "row",
})`
  display: flex;
  white-space: break-spaces;
  margin-top: 24px;
  padding: 24px 28px;
  background: ${colors.tealTint};
  border-radius: ${radius.md};
  justify-content: space-between;
  ${revealStyle}
`;
export const TextHeaders = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${colors.ink};
  @media (max-width: 576px) {
    font-size: 15px;
  }
`;
export const Title = styled.div`
  align-self: center;
  font-family: ${font.display};
  font-size: 35px;
  font-weight: 600;
  background: ${gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 576px) {
    font-size: 22px;
  }
`;
export const Description = styled.div`
  font-size: 20px;
  line-height: 165%;
  color: ${colors.slate};
  margin-top: 24px;
  padding: 8px 0 8px 28px;
  border-left: 4px solid ${colors.teal};
  ${revealStyle}

  @media (max-width: 576px) {
    font-size: 15px;
    padding: 4px 0 4px 16px;
  }
`;
export const IconText = styled.div`
  margin: 0 30px 0 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.ink};

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;
export const Bed = styled(BedIcon)`
  && {
    color: ${colors.teal};
    height: 25px;
    width: 25px;
  }
`;
export const Bath = styled(BathtubIcon)`
  && {
    color: ${colors.teal};
    height: 25px;
    width: 25px;
  }
`;
export const Verified = styled(VerifiedIcon)`
  && {
    color: ${colors.gold};
    height: 30px;
    width: 30px;
    margin-right: 30px;
    animation: ${pulse} 2.4s ease-in-out infinite;
  }
`;
export const Area = styled(SquareFootIcon)`
  && {
    color: ${colors.teal};
    height: 25px;
    width: 25px;
  }
`;
export const AmenitiesContainer = styled(Grid).attrs({
  container: true,
  direction: "row",
})`
  display: flex;
  white-space: break-spaces;
  margin-top: 16px;
  justify-content: space-evenly;
  font-size: 20px;
  gap: 16px;
  ${revealStyle}
`;
export const AmenitiesTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.ink};
  margin-top: 24px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;
export const Amenitiesitem = styled.div`
  margin-top: inherit;
  background: ${gradients.button};
  color: ${colors.white};
  padding: 14px 22px;
  border-radius: ${radius.pill};
  box-shadow: ${shadow.soft};
  transition: ${transition.base};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${shadow.button};
    background: ${gradients.buttonHover};
  }

  @media (max-width: 576px) {
    padding: 8px 14px;
  }
`;
