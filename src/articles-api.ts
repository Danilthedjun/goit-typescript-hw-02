import axios, { AxiosResponse } from "axios";
import { FetchImagesResponse } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse["results"]> => {
  const response: AxiosResponse<FetchImagesResponse> =
    await axios.get<FetchImagesResponse>("/search/photos", {
      params: {
        client_id: "WZdTFI3eyM_W7c8oSi6VRj4Atrv7yt8wsOUevo1Qg7g",
        query: query,
        per_page: 10,
        page: page,
      },
    });
  return response.data.results;
};
