import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { gradientPan, gradients } from "../../theme";

export const Container = styled(Grid)`
  background: ${gradients.hero};
  background-size: 200% 200%;
  animation: ${gradientPan} 12s ease infinite;
  padding: 1% 46% 1%;
  margin-top: 6vw;
  position: absolute;
  right: 0;
  left: 0;
`;

export const Font = styled.p`
  color: white;
  font-size: 18px;
  letter-spacing: 0.04em;

  @media (max-width: 576px) {
    font-size: 12px;
    margin-top: 2vw;
    padding: 1% 12% 1%;
  }
`;
