import React from "react";
import { Container, Font } from "./styles";

interface FooterProps {
  title: string;
}
const Footer = ({ title }: FooterProps) => {
  return (
    <Container>
      <Font>{title}</Font>
    </Container>
  );
};

export default Footer;
