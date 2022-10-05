import React from "react";
import { Container } from "./styles";

interface FooterProps {
  subtitle: string;
  title: string;
}
const Footer = ({ subtitle, title }: FooterProps) => {
  return (
    <Container>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{subtitle}</div>
      <div>{subtitle}</div>
    </Container>
  );
};

export default Footer;
