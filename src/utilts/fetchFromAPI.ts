import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "3267c4ba70msh62106c96c8c8f80p1de038jsnec2df486237f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// export const fetchChannelFromAPI = async (id: string) => {
//   const optionsChannel = {
//     method: "GET",
//     url: "https://youtube-v31.p.rapidapi.com/channels",
//     params: {
//       part: "snippet,statistics",
//       id,
//     },
//     headers: {
//       "X-RapidAPI-Key": "3267c4ba70msh62106c96c8c8f80p1de038jsnec2df486237f",
//       "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//     },
//   };
//   const { data } = await axios.request(optionsChannel);

//   return data;
// };
