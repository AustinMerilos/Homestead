import axios from "axios";

// GET request to the API using the Axios library
const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
const apiHost = "property-finder-api1.p.rapidapi.com";

export const propertyFinderUrl = `https://${apiHost}`;
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
      "X-RapidAPI-Host": apiHost,
    },
  });
  return data;
};
