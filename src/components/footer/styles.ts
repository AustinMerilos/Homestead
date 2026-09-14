import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { gradientPan, gradients } from "../../theme";

export const Container = styled(Grid)`
  background: ${gradients.hero};
  background-size: 200% 200%;
  animation: ${gradientPan} 12s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  margin-top: 6vw;
  position: absolute;
  right: 0;
  left: 0;

  @media (max-width: 576px) {
    padding: 16px;
  }
`;

export const Font = styled.p`
  margin: 0;
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
