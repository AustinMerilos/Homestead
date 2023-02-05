import { Grid } from "@material-ui/core";
import styled from "styled-components";
import BedIcon from "@mui/icons-material/Bed";
import VerifiedIcon from "@mui/icons-material/Verified";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CircularProgress from "@material-ui/core/CircularProgress";
export const Container = styled(Grid).attrs({
  container: true,
  direction: "column",
})`
  display: flex;
  padding: 60px 120px 10px;
  margin-top: 2vw;
  margin-bottom: 10vw
`;

export const Loader = styled(CircularProgress).attrs({ size: 250 })`
  && {
    margin: 250px;
    align-self: center;
    color: teal;
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
  border-radius: 4px;
  border-color: teal;
  border-style: solid;
  width: 60%;
  object-fit: cover;
`;

export const IconContainer = styled(Grid).attrs({
  container: true,
  direction: "row",
})`
  display: flex;
  margin-bottom: 10px;
`;
export const PriceContainer = styled(Grid).attrs({
  container: true,
  direction: "row",
})`
  display: flex;
  white-space: break-spaces;
  margin-top: 20px;
`;
export const Title = styled.div`
  align-self: center;
  font-size: 35px;
`;
export const Description = styled.div`
  font-size: 25px;
  padding: 40px 40px;
`;
export const PriceText = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
export const PropertyText = styled.div`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
`;
export const IconText = styled.div`
  margin: 0 30px 0 10px;
  font-size: 20px;
  font-weight: bold;
`;
export const Bed = styled(BedIcon)`
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
export const Verified = styled(VerifiedIcon)`
  && {
    color: gold;
    height: 30px;
    width: 30px;
    margin-right: 30px;
  }
`;
export const Area = styled(SquareFootIcon)`
  && {
    color: teal;
    height: 25px;
    width: 25px;
  }
`;
