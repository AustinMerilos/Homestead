import { useMemo } from "react";
import { Link } from "react-router-dom";
import { numberFormat, areaFormat } from "../../utiles/numberFormater";
import {
  Area,
  Bath,
  Bed,
  PropertySectionContainer,
  PropertySectionIconContainer,
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
  area: number;
  link: string;
};

export default function PropertySection({
  price,
  title,
  image,
  rooms,
  baths,
  link,
  area,
}: BannerSectionItems) {
  const formater = useMemo(() => numberFormat(price), [price]);
  const areaformater = useMemo(() => areaFormat(area), [area]);

  return (
    <PropertySectionContainer>
      <Link to={link}>
        <PropertySectionImage src={image}></PropertySectionImage>
      </Link>
      <PropertySectionTitle>
        {(title?.length ?? 0) > 30 ? `${title?.substring(0, 30)}...` : title}
      </PropertySectionTitle>
      <PropertySectionText>PRICE: {formater}</PropertySectionText>
      <PropertySectionIconContainer>
        <Bed />
        <PropertySectionText>{rooms}</PropertySectionText>
        <Bath />
        <PropertySectionText>{baths}</PropertySectionText>
        <Area />
        <PropertySectionText>{areaformater} sqft</PropertySectionText>
      </PropertySectionIconContainer>
    </PropertySectionContainer>
  );
}
