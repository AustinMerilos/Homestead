import { Grid } from "@material-ui/core";
import styled from "styled-components";


export const Container = styled(Grid).attrs({
  container: true,
  direction: 'column',
})`
  background-color: teal;
  padding: 1% 46% 1%;
  margin-top: 6vw
`;

export const Font = styled.p`
color: white;
font-size: 18px;
`