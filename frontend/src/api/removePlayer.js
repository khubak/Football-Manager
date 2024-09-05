import header from "./headers";
import * as URL from "./urls";
import axios from "axios";

const removePlayer = async (player_id) => {
  const requstURL = URL.baseURL + URL.removePlayer + player_id;

  try {
    const response = await axios({
      method: "del",
      url: requstURL,
      headers: header,
      params: { player_id },
    });
    return response;
  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
};

export default removePlayer;
