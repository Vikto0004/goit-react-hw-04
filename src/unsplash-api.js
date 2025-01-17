import axios from "axios";

export default async function fetchImages(query, page = 1) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      orientation: "landscape",
    },
    headers: {
      Authorization: "Client-ID 5knI-AnvTFL1idO7zkF8y4O3wT_bpZCyT5WL-n0Ruho",
    },
  });
  return response;
}
