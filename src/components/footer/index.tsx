import React from "react";
import { Container, Font } from "./styles";

interface FooterProps {
  siteName: string;
}
const Footer = ({ siteName }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Font>
        © {year} {siteName}
      </Font>
    </Container>
  );
};

export default Footer;
