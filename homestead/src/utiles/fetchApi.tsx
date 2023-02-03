import axios from "axios";

const apiKey = "";

export const bayutUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};

export const rentOptions = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-rent",
    page: "0",
    lang: "en",
    hitsPerPage: 3,
  },
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

export const saleOptions = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-sale",
    page: "0",
    lang: "en",
    hitsPerPage: 3,
  },
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};
