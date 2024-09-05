import * as URL from "./urls";
import axios from "axios";
import requestHeaders from "./auth";
import header from "./headers";

const getTeams = async () => {
  const requestURL = URL.baseURL + URL.getTeams;

  try {
    const response = axios({
      method: "get",
      url: requestURL,
      headers: header,
    });
    return response;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
};

export default getTeams;