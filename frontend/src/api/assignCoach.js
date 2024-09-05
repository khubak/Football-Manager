import * as URL from "./urls";
import axios from "axios";
import header from "./headers";

const assignCoach = async (team_id, name, position) => {
  const requestURL = URL.baseURL + URL.assignCoach;
  const data = {
    team_id,
    name,
    position,
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
    throw error; // Rethrow the error so it can be caught by the caller
  }
};

export default assignCoach;