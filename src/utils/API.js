import axios from "axios";

// export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const API = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "70e145b673msh57eb1e7f5c65d5fp1512ebjsn587c04828395",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const API = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};