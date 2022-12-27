import {
  PropertySectionContainer,
  PropertySectionImage,
  PropertySectionSubText,
  PropertySectionText,
  PropertySectionTitle,
} from "./styles";

type bannerSectionItems = {
  title?: string;
  price?: string;
  image?: string;
  rooms?: string;
  baths?: string;
};

export default function PropertySection({
  price,
  title,
  image,
  rooms,
  baths,
}: bannerSectionItems) {
  return (
    <PropertySectionContainer>
      <PropertySectionTitle>{title}</PropertySectionTitle>
      <PropertySectionImage src={image}></PropertySectionImage>
      <PropertySectionSubText>PRICE:{price}$</PropertySectionSubText>
      <PropertySectionText>ROOMS:{rooms}</PropertySectionText>
      <PropertySectionText>BATHS:{baths}</PropertySectionText>
    </PropertySectionContainer>
  );
}
