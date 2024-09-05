import * as URL from "./urls";
import axios from "axios";
import header from "./headers";

const createTeam = async (name, stadium) => {
  const requestURL = URL.baseURL + URL.createTeam;
  const data = {
    name,
    stadium,
  };
  try {
    const response = axios({
      method: "post",
      url: requestURL,
      headers: header,
      data: data,
    });
    return response;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
};

export default createTeam;
