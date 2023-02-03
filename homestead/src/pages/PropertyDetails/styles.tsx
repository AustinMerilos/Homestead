import { Grid } from "@material-ui/core";
import styled from "styled-components";
export const Container = styled(Grid).attrs({
  container: true,
  direction: "column",
})`
  display: flex;
  padding: 60px 120px 10px;
  margin-top: 2vw;
`;

export const PropertyImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3vw 4vw;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const PropertyImage = styled.img`
  margin: 1vw;
  border-radius: 4px;
  border-style: solid;
  width: 60%;
  object-fit: cover;
`;

export const TextContainer = styled.div``;
export const Title = styled.div``;
export const SubText = styled.div``;
