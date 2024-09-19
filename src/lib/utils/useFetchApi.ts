import axios from "axios";
import { toast } from "sonner";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "80",
  },
  headers: {
    "X-RapidAPI-Key": "67ecb319dbmsheef2301d2198794p18f9dcjsnec3eafe9c268",
    // "X-RapidAPI-Key": "67ecb319dbmsheef2301d2198794p18f9dcjsnec3eafe9c269",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const useFetchApi = async (url: any) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        toast.warning(
          "You have Crossed the Request Limit. Please try again after 24 hours"
        );
        return {
          error:
            "You have Crossed the Request Limit. Please try again after 24 hours",
        };
      } else {
        toast.error("An error occurred:");
        return { error: error.message };
      }
    } else {
      console.error("An unexpected error occurred:", error);
      return { error: "An unexpected error occurred." };
    }
  }
};
