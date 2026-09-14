import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { colors, font, radius, shadow } from "../../theme";

export const Container = styled(Grid).attrs({
  container: true,
  direction: "column",
})<{ $fullWidth?: boolean }>`
  padding: 20px 24px;
  max-width: 1230px;
  margin: 16px auto 0;
  background: ${colors.white};
  border-radius: ${radius.md};
  box-shadow: ${shadow.card};

  @media (max-width: 576px) {
    padding: 1vw;
  }
`;
export const FilterContainer = styled(Grid).attrs({
  container: true,
  direction: "row",
})<{ $fullWidth?: boolean }>`
  padding: 4px 0 0;
  max-width: 1230px;
  margin: 0 auto;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const FilterTitle = styled.div`
  font-family: ${font.display};
  font-size: 20px;
  font-weight: 600;
  color: ${colors.ink};
  margin-bottom: 8px;
`;
