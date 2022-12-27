export const rentOptions = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-rent",
    hitsPerPage: 3,
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
    categoryExternalID: "4",
  },
  headers: {
    "X-RapidAPI-Key": "f70ffcc128mshc1103c9be8425e4p116977jsn8314758befb5",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};
export const saleOptions = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-sale",
    hitsPerPage: 3,
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
    categoryExternalID: "4",
  },
  headers: {
    "X-RapidAPI-Key": "f70ffcc128mshc1103c9be8425e4p116977jsn8314758befb5",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};
