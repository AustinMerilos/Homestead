import { Grid } from "@material-ui/core";
import styled from "styled-components";


export const Container = styled(Grid).attrs({
  container: true,
  direction: 'column',
})`
  background-color: teal;

  padding: 60px 120px 100px;

`;