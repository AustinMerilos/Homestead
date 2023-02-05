import { Button, Grid, Typography } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";


export const Container = styled(Grid).attrs({
  container: true,
  direction: 'row',
})`
  display: flex;
  background-color: lightgrey;
  padding: 60px 120px 10px;
  margin-top: 2vw;

`
export const Loader = styled(CircularProgress).attrs({size: 250})`
  && {
    margin: 200px 800px;
    align-self: center;
    color: teal;
  }
`;
export const InnerContainer = styled(Grid).attrs({
  container: true,
  direction: 'row',
})`
  display: flex;
  padding: 60px 120px 10px;
  margin-top: 4vw;

`
export const NoResultsContainer = styled(Grid).attrs({
  container: true,
  direction: 'column',
})`
  display: flex;
  align-content: center;

`
export const Title= styled.div`

`
export const NoResultsTitle= styled(Typography).attrs({
  variant: 'h2',
})
`
  align-self: center;
  font-weight: bold;

`
export const FilterButton= styled(Button)`
    && {
    margin-left: inherit;
    margin-bottom: auto
  }
    
`

export const NoResults= styled.img`

  display: flex;
  width: 40%;
   

`
;