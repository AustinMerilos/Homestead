import axios from "axios";

// GET request to the API using the Axios library
const apiKey = "be5f4ccafdmshe94afdfe47c9ed6p1528dfjsn1ea943755660";

export const bayutUrl = "https://bayut.p.rapidapi.com";
//  passing in the URL and the API key in the headers
export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
