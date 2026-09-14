import { useCallback, useEffect, useState } from "react";
import {
  Container,
  Title,
  InnerContainer,
  FilterButton,
  NoResults,
  NoResultsContainer,
  NoResultsTitle,
  Loader,
} from "./styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import PropertySection from "../Home/sections";
import SearchFilters from "../../components/searchFilters";
import { propertyFinderUrl, fetchApi } from "../../utiles/fetchApi";
import { useSearchParams } from "react-router-dom";
import images from "../../assets";
import SearchPagination from "./pagination";

type PropertyType = {
  title?: string;
  price: number;
  images: string[];
  bedrooms?: string | null;
  bathrooms?: string | null;
  id: string;
  size: number;
};

function Search() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchFilters, setSearchFilters] = useState(false);
  const [propertyArray, setPropertyArray] = useState<PropertyType[]>([]);
  const [searchParams] = useSearchParams();

  const location = searchParams.get("location") || "Dubai";
  const purpose = searchParams.get("purpose") || "for-sale";
  const priceMin = searchParams.get("priceMin") || "0";
  const priceMax = searchParams.get("priceMax") || "1000000";
  const areaMax = searchParams.get("areaMax") || "35000";
  const bedrooms = searchParams.get("bedrooms") || "";
  const bathrooms = searchParams.get("bathrooms") || "";
  const propertyType = searchParams.get("propertyType") || "";
  const furnishing = searchParams.get("furnishing") || "";

  const getResults = useCallback(async () => {
    const params = new URLSearchParams({
      location,
      searchType: purpose === "for-rent" ? "For_Rent" : "For_Sale",
      page: String(page + 1),
      resultCount: "12",
      priceRange: `min:${priceMin},max:${priceMax}`,
      areaRange: `max:${areaMax}`,
    });
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (bathrooms) params.set("bathrooms", bathrooms);
    if (propertyType) params.set("propertyType", propertyType);
    if (furnishing) params.set("furnishing", furnishing);

    const results = await fetchApi(
      `${propertyFinderUrl}/search/bylocation?${params.toString()}`
    );
    setLoading(true);
    setPropertyArray(results.searchResults ?? []);
  }, [
    location,
    purpose,
    page,
    priceMin,
    priceMax,
    areaMax,
    bedrooms,
    bathrooms,
    propertyType,
    furnishing,
  ]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  return (
    <>
      <Container>
        <FilterButton
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
          <Title>Search Properities</Title>
          <FilterListIcon />
        </FilterButton>
        {searchFilters && (
          <>
            <SearchFilters
              purpose={searchParams.get("purpose") || ""}
            ></SearchFilters>
          </>
        )}
      </Container>
      {loading === false ? (
        <Loader />
      ) : (
        <>
          <InnerContainer>
            {propertyArray.map((property, index) => (
              <PropertySection
                key={property.id}
                delay={index * 60}
                image={property.images?.[0]}
                title={property.title}
                price={property.price}
                rooms={property.bedrooms ?? undefined}
                baths={property.bathrooms ?? undefined}
                area={property.size}
                link={`/search/property/${property.id}`}
              ></PropertySection>
            ))}
          </InnerContainer>
          {propertyArray.length === 0 && (
            <NoResultsContainer>
              <NoResults src={images.noresults} alt="no results"></NoResults>
              <NoResultsTitle> No Results Found</NoResultsTitle>
            </NoResultsContainer>
          )}
          <SearchPagination setPage={setPage} page={page} />
        </>
      )}
    </>
  );
}

export default Search;
