import { Grid } from "@material-ui/core";
import styled from "styled-components";


export const Container = styled(Grid).attrs({
  direction: 'row',
})`
  background-color: teal;
  padding: 1% 46% 1%;
  margin-top: 6vw;
  position: absolute;
  right: 0;
  left: 0;
`;

export const Font = styled.p`
color: white;
font-size: 18px;

@media (max-width: 576px) {
    font-size: 12px;
    margin-top: 2vw;
    padding: 1% 12% 1%;
  }
`