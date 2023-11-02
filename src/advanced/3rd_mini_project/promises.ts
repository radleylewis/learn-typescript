/**
 * Promises
 **/

import { API, CEO_FILE as file } from "./api";

const callApi = async () => {
  const leaders = await API.init(file);

  console.table(leaders.getStoredData);
};

callApi();
