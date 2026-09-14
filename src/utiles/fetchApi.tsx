import axios from "axios";

// GET request to the API using the Axios library
const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;

export const bayutUrl = "https://bayut.p.rapidapi.com";
//  passing in the URL and the API key in the headers
export const fetchApi = async (url: string) => {
  if (!apiKey) {
    throw new Error(
      "Missing REACT_APP_RAPIDAPI_KEY. Set it in a .env.local file (see .env.example)."
    );
  }
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
