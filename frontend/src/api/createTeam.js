import * as URL from "./urls";
import axios from "axios";
import requestHeaders from "./auth";

const createTeam = async (data) => {
  const requestURL = URL.baseURL + URL.createTeam;
  const data = {
    
  }
  try {
    const response = axios({
      method: "post",
      url: requestURL,
      headers: {}
      data: data,
    });
    return response;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
};

export default createTeam;