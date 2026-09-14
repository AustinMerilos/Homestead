interface FilterItems {
  items: { name: string; value: string }[];
  placeholder: string;
  queryName: keyof FilterValues;
}

type FilterValues = {
  purpose: string;
  propertyType: string;
  priceMin: string;
  priceMax: string;
  areaMax: string;
  bedrooms: string;
  bathrooms: string;
  furnishing: string;
};

export const filterData: FilterItems[] = [
  {
    items: [
      { name: "Buy", value: "for-sale" },
      { name: "Rent", value: "for-rent" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  {
    items: [
      { name: "10,000", value: "10000" },
      { name: "20,000", value: "20000" },
      { name: "30,000", value: "30000" },
      { name: "40,000", value: "40000" },
      { name: "50,000", value: "50000" },
      { name: "60,000", value: "60000" },
      { name: "85,000", value: "85000" },
    ],
    placeholder: "Min Price",
    queryName: "priceMin",
  },
  {
    items: [
      { name: "50,000", value: "50000" },
      { name: "60,000", value: "60000" },
      { name: "85,000", value: "85000" },
      { name: "110,000", value: "110000" },
      { name: "135,000", value: "135000" },
      { name: "160,000", value: "160000" },
      { name: "185,000", value: "185000" },
      { name: "200,000", value: "200000" },
      { name: "300,000", value: "300000" },
      { name: "400,000", value: "400000" },
      { name: "500,000", value: "500000" },
      { name: "600,000", value: "600000" },
      { name: "700,000", value: "700000" },
      { name: "800,000", value: "800000" },
      { name: "900,000", value: "900000" },
      { name: "1000,000", value: "1000000" },
    ],
    placeholder: "Max Price",
    queryName: "priceMax",
  },
  {
    items: [
      { name: "1000", value: "1000" },
      { name: "2000", value: "2000" },
      { name: "3000", value: "3000" },
      { name: "4000", value: "4000" },
      { name: "5000", value: "5000" },
      { name: "10000", value: "10000" },
      { name: "20000", value: "20000" },
    ],
    placeholder: "Max Area(sqft)",
    queryName: "areaMax",
  },
  {
    items: [
      { name: "Studio", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7+", value: "8" },
    ],
    placeholder: "Bedrooms",
    queryName: "bedrooms",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Bathrooms",
    queryName: "bathrooms",
  },
  {
    items: [
      { name: "Furnished", value: "Furnished" },
      { name: "Unfurnished", value: "Unfurnished" },
    ],
    placeholder: "Furnish Type",
    queryName: "furnishing",
  },
  {
    items: [
      { name: "Apartment", value: "Apartment" },
      { name: "Townhouse", value: "Townhouse" },
      { name: "Villa", value: "Villa" },
      { name: "Penthouse", value: "Penthouse" },
      { name: "Duplex", value: "Duplex" },
      { name: "Compound", value: "Compound" },
      { name: "Hotel Apartment", value: "Hotel Apartment" },
      { name: "Bungalow", value: "Bungalow" },
      { name: "Land", value: "Land" },
    ],
    placeholder: "Property Type",
    queryName: "propertyType",
  },
];

type Values = {
  name: keyof FilterValues;
  value: string;
};

export const getFilterValues = (filterValues: FilterValues) => {
  const {
    purpose,
    propertyType,
    priceMin,
    priceMax,
    areaMax,
    bedrooms,
    bathrooms,
    furnishing,
  } = filterValues;

  const values: Values[] = [
    { name: "purpose", value: purpose },
    { name: "priceMin", value: priceMin },
    { name: "priceMax", value: priceMax },
    { name: "areaMax", value: areaMax },
    { name: "bedrooms", value: bedrooms },
    { name: "bathrooms", value: bathrooms },
    { name: "propertyType", value: propertyType },
    { name: "furnishing", value: furnishing },
  ];

  return values;
};
