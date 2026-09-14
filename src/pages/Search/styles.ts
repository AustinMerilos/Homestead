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
  padding: 40px 60px;
  margin-top: 2vw;
  box-shadow: ${shadow.soft};

  @media (max-width: 576px) {
    padding: 20px 20px;
    margin-top: 0;
  }
`;
export const Loader = styled(CircularProgress).attrs({ size: 250 })`
  && {
    display: block;
    margin: 200px auto;
    color: ${colors.teal};
  }

  && {
    @media (max-width: 576px) {
      margin: 80px auto;
    }
  }
`;
export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1278px;
  margin: 4vw auto 0;
  padding: 0 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    gap: 16px;
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
  margin-top: 40px;
  padding-bottom: 48px;

  @media (max-width: 576px) {
    margin-top: 28px;
    padding-bottom: 32px;
  }

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
