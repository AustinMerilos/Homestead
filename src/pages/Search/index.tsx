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
import { bayutUrl, fetchApi } from "../../utiles/fetchApi";
import { useSearchParams } from "react-router-dom";
import images from "../../assets";
import SearchPagination from "./pagination";

type PropertyType = {
  title?: string;
  price: number;
  coverPhoto: { url: string };
  rooms?: string;
  baths?: string;
  externalID: string;
  area: number;
};

function Search() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchFilters, setSearchFilters] = useState(false);
  const [propertyArray, setPropertyArray] = useState([]);
  const [searchParams] = useSearchParams();

  const locationExternalIDs =
    searchParams.get("locationExternalIDs") || "5002,6020";
  const purpose = searchParams.get("purpose") || "for-sale";
  const rentFrequency = searchParams.get("rentFrequency") || "yearly";
  const priceMin = searchParams.get("priceMin") || "0";
  const priceMax = searchParams.get("priceMax") || "1000000";
  const roomsMin = searchParams.get("roomsMin") || "0";
  const bathsMin = searchParams.get("bathsMin") || "0";
  const sort = searchParams.get("sort") || "price-desc";
  const areaMax = searchParams.get("areaMax") || "35000";
  const categoryExternalID = searchParams.get("categoryExternalID") || "4";
  const furnishingStatus =
    searchParams.get("furnishingStatus") || "unfurnished";

  const getResults = useCallback(async () => {
    const results = await fetchApi(
      `${bayutUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=10&page=${page}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${priceMin}&priceMax=${priceMax}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&furnishingStatus=${furnishingStatus}`
    );
    const searchData = results.hits;
    setLoading(true);
    setPropertyArray(searchData);
  }, [
    areaMax,
    bathsMin,
    categoryExternalID,
    furnishingStatus,
    locationExternalIDs,
    page,
    priceMax,
    priceMin,
    purpose,
    rentFrequency,
    roomsMin,
    sort,
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
            {propertyArray.map((property: PropertyType) => (
              <PropertySection
                image={property.coverPhoto.url}
                title={property.title}
                price={property.price}
                rooms={property.rooms}
                baths={property.baths}
                area={property.area}
                link={`/search/property/${property.externalID}`}
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
