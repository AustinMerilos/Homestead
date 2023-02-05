import { useMemo } from "react";
import { Link } from "react-router-dom";
import { numberFormat } from "../../utiles/numberFormater";
import {
  PropertySectionContainer,
  PropertySectionImage,
  PropertySectionText,
  PropertySectionTitle,
} from "./styles";

type BannerSectionItems = {
  title?: string;
  price: number;
  image?: string;
  rooms?: string;
  baths?: string;
  link: string;
};

export default function PropertySection({
  price,
  title,
  image,
  rooms,
  baths,
  link,
}: BannerSectionItems) {
  const formater = useMemo(() => numberFormat(price), [price]);

  return (
    <PropertySectionContainer>
      <Link to={link}>
        <PropertySectionImage src={image}></PropertySectionImage>
      </Link>
      <PropertySectionTitle>
        {(title?.length ?? 0) > 30 ? `${title?.substring(0, 30)}...` : title}
      </PropertySectionTitle>
      <PropertySectionText>PRICE:{formater}</PropertySectionText>
      <PropertySectionText>ROOMS: {rooms}</PropertySectionText>
      <PropertySectionText>BATHS: {baths}</PropertySectionText>
    </PropertySectionContainer>
  );
}
