import { useMemo, useState } from "react";
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
  Spinner,
  ImageWrapper,
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
  const [imageLoading, setImageLoading] = useState(true);

  const formattedPrice = useMemo(() => numberFormat(price), [price]);
  const formattedArea = useMemo(() => areaFormat(area), [area]);

  return (
    <PropertySectionContainer>
      <Link to={link}>
        <ImageWrapper>
          {imageLoading && <Spinner />}
          <PropertySectionImage
            src={image}
            alt="property image"
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
            style={{ display: imageLoading ? "none" : "block" }}
          />
        </ImageWrapper>
      </Link>

      <PropertySectionTitle>
        {(title?.length ?? 0) > 30 ? `${title?.substring(0, 30)}...` : title}
      </PropertySectionTitle>

      <PropertySectionText>
        PRICE: {Number.isFinite(price) ? formattedPrice : "Loading..."}
      </PropertySectionText>

      <PropertySectionIconContainer>
        <Bed />
        <PropertySectionText>{rooms}</PropertySectionText>
        <Bath />
        <PropertySectionText>{baths}</PropertySectionText>
        <Area />
        <PropertySectionText>{formattedArea} sqft</PropertySectionText>
      </PropertySectionIconContainer>
    </PropertySectionContainer>
  );
}
