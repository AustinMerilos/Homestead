import { useCallback, useEffect, useState } from "react";
import images from "../../assets";
import { propertyFinderUrl, fetchApi } from "../../utiles/fetchApi";
import BannerSections from "./bannerSections";
import constants from "./constants";
import PropertySection from "./sections";
import { HeaderContainer, PropertySectionInnerContainer } from "./styles";

type HomeProperty = {
  title: string;
  baths: string;
  rooms: string;
  price: string;
  area: string;
  image: string;
  id: string;
};

const defaultProperty = (n: number): HomeProperty => ({
  title: `default ${n}`,
  baths: "NA",
  rooms: "NA",
  price: "NA",
  area: "NA",
  image: "NA",
  id: "",
});

type SearchResult = {
  title: string;
  images: string[];
  bathrooms: string;
  bedrooms: string;
  price: number;
  size: number;
  id: string;
};

const toHomeProperty = (property: SearchResult): HomeProperty => ({
  title: property.title,
  image: property.images?.[0],
  baths: property.bathrooms,
  rooms: property.bedrooms,
  price: String(property.price),
  area: String(property.size),
  id: property.id,
});

export default function Home() {
  const [salePropertyArray, setSalePropertyArray] = useState<HomeProperty[]>([
    defaultProperty(1),
    defaultProperty(2),
    defaultProperty(3),
  ]);
  const [rentPropertyArray, setRentPropertyArray] = useState<HomeProperty[]>([
    defaultProperty(1),
    defaultProperty(2),
    defaultProperty(3),
  ]);

  const getResults = useCallback(async () => {
    const results = await fetchApi(
      `${propertyFinderUrl}/search/bylocation?location=Dubai&searchType=For_Sale&resultCount=3&page=1`
    );
    const rentResults = await fetchApi(
      `${propertyFinderUrl}/search/bylocation?location=Dubai&searchType=For_Rent&resultCount=3&page=1`
    );
    const searchData: SearchResult[] = results.searchResults;
    const rentData: SearchResult[] = rentResults.searchResults;

    setSalePropertyArray(searchData.slice(0, 3).map(toHomeProperty));
    setRentPropertyArray(rentData.slice(0, 3).map(toHomeProperty));
  }, []);

  useEffect(() => {
    getResults();
  }, [getResults]);

  let urlString = "/search/property/";
  return (
    <>
      <HeaderContainer />
      <BannerSections
        image={images.rentBanner}
        description={constants.rentProperty.description}
        title={constants.rentProperty.title}
        button={constants.rentProperty.button}
        link={constants.rentProperty.link}
      ></BannerSections>
      <PropertySectionInnerContainer>
        {rentPropertyArray.map((array) => {
          if (array.id === "") {
            urlString = "";
          }
          return (
            <PropertySection
              title={array.title}
              baths={array.baths}
              rooms={array.rooms}
              price={Number(array.price)}
              area={Number(array.area)}
              image={array.image}
              link={`${urlString}${array.id}`}
            ></PropertySection>
          );
        })}
      </PropertySectionInnerContainer>

      <BannerSections
        image={images.buyBanner}
        description={constants.buyProperty.description}
        title={constants.buyProperty.title}
        button={constants.buyProperty.button}
        link={constants.buyProperty.link}
      ></BannerSections>

      <PropertySectionInnerContainer>
        {salePropertyArray.map((array) => {
          if (array.id === "") {
            urlString = "";
          }
          return (
            <PropertySection
              title={array.title}
              baths={array.baths}
              rooms={array.rooms}
              price={Number(array.price)}
              area={Number(array.area)}
              image={array.image}
              link={`${urlString}${array.id}`}
            ></PropertySection>
          );
        })}
      </PropertySectionInnerContainer>
    </>
  );
}
