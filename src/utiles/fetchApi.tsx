import axios from "axios";

const apiKey = "ce154ae15emsha0032936ce79634p1fc946jsn77a9d9e58420";

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
