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
  const [loading, setLoading] = useState(true);

  const formattedPrice = useMemo(() => numberFormat(price), [price]);
  const formattedArea = useMemo(() => areaFormat(area), [area]);

  return (
    <PropertySectionContainer>
      <Link to={link}>
        <ImageWrapper>
          {loading && <Spinner />}
          <PropertySectionImage
            src={image}
            alt="property image"
            onLoad={() => setLoading(false)}
            style={{ display: loading ? "none" : "block" }}
          />
        </ImageWrapper>
      </Link>

      <PropertySectionTitle>
        {(title?.length ?? 0) > 30 ? `${title?.substring(0, 30)}...` : title}
      </PropertySectionTitle>

      {/* Show "Loading..." until the image is loaded */}
      <PropertySectionText>
        PRICE: {loading ? "Loading..." : formattedPrice}
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
