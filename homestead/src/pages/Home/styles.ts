import { Typography,Grid } from '@material-ui/core';
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

`;



export const Container = styled(Grid).attrs({
  container: true,
  direction: 'column',
})<{ $fullWidth?: boolean }>`
  padding: 0 0 4vw 0;
  max-width: 1230px;
  margin: 0 auto;`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 380px;
  border-radius: 18px;
  overflow: hidden;`

  export const BannerContainerContent = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  padding: 2vw 3vw;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;`

  export const BannerDescription = styled.p`
  color: white;
  font-size: 1.6vw;
  line-height: 160%;`

  export const BannerTitle = styled(Typography).attrs({
  variant: 'h3',
})`
  color: white;
  font-weight: 700;
  font-size: 2.5vw;
`

export const Banner = styled.img`
  display: flex;
  width: 50%;
  `
export const BannerButton = styled.button`
  
  background-color: teal;
  padding: 0 1vw 0 1vw;
  color: white;
  border-radius: 15px;
  font-size: 1.7vw;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.2vw`


  export const PropertySectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3vw 4vw;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 50%;
  box-sizing: border-box;`

  export const PropertySectionInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  `
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
`
  export const PropertySectionText = styled.div` 
  margin: 12px 20px;
  font-size: 20px;
  `

  export const PropertySectionIconContainer = styled.div
 `
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
  width:  25vw;
  height: 20vw;
  object-fit: cover;`

