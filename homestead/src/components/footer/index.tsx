import React from "react";

interface FooterProps {
  subtitle: string;
  title: string;
}
const Footer = ({ subtitle, title }: FooterProps) => {
  return (
    <>
      <div>{title}</div>
      <div>{subtitle}</div>
    </>
  );
};

export default Footer;
