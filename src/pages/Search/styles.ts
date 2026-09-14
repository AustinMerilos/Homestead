import { Button, Grid, Typography } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import { colors, font, gradients, radius, shadow, transition } from "../../theme";

export const Container = styled(Grid).attrs({
  container: true,
  direction: "row",
})`
  display: flex;
  align-items: center;
  background: ${gradients.hero};
  padding: 40px 120px;
  margin-top: 2vw;
  box-shadow: ${shadow.soft};

  @media (max-width: 576px) {
    padding: 20px 30px;
    margin-top: 20vw;
  }
`;
export const Loader = styled(CircularProgress).attrs({ size: 250 })`
  && {
    margin: 200px 620px;
    align-self: center;
    color: ${colors.teal};
  }

  && {
    @media (max-width: 576px) {
      margin: 100px 50px;
    }
  }
`;
export const InnerContainer = styled(Grid).attrs({
  container: true,
  direction: "row",
})`
  display: flex;
  padding: 60px 120px 10px;
  margin-top: 4vw;

  @media (max-width: 576px) {
    padding: 20px 60px 10px;
  }
`;
export const NoResultsContainer = styled(Grid).attrs({
  container: true,
  direction: "column",
})`
  display: flex;
  align-content: center;
`;
export const Title = styled.div`
  font-family: ${font.display};
  font-size: 1.4vw;
  font-weight: 600;
  color: ${colors.tealDark};
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
export const NoResultsTitle = styled(Typography).attrs({
  variant: "h2",
})`
  align-self: center;
  font-family: ${font.display};
  font-weight: 600;
  color: ${colors.ink};

  && {
    @media (max-width: 576px) {
      font-size: 24px;
    }
  }
`;
export const FilterButton = styled(Button)`
  && {
    margin-left: inherit;
    margin-bottom: auto;
    background: ${colors.white};
    color: ${colors.tealDark};
    border-radius: ${radius.pill};
    padding: 8px 20px;
    font-weight: 600;
    box-shadow: ${shadow.soft};
    transition: ${transition.base};

    &:hover {
      background: ${colors.tealTint};
      transform: translateY(-2px);
      box-shadow: ${shadow.card};
    }
  }
`;

export const NoResults = styled.img`
  display: flex;
  width: 40%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  place-content: space-evenly;

  .MuiPaginationItem-root {
    font-weight: 600;
    transition: ${transition.base};
  }

  .MuiPaginationItem-root.Mui-selected {
    background: ${gradients.button};
    color: ${colors.white};
    border-color: transparent;
    box-shadow: ${shadow.button};
  }

  .MuiPaginationItem-root:hover {
    transform: translateY(-2px);
  }
`;
