import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled(Grid).attrs({
  container: true,
  direction: 'column',
})<{ $fullWidth?: boolean }>`
  padding: 0 0 4vw 0;
  max-width: 1230px;
  margin: 0 auto;
  @media (max-width: 576px) {
    padding: 1vw;
  }
  `;
export const FilterContainer = styled(Grid).attrs({
  container: true,
  direction: 'row',
})<{ $fullWidth?: boolean }>`
  padding: 0 0 4vw 0;
  max-width: 1230px;
  margin: 0 auto;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const FilterTitle = styled.div``