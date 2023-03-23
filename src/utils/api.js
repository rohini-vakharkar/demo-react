import axios from "axios";

export const BASE_URL = "http://localhost:9000/api";

const allUsersUrl = `${BASE_URL}/uselist`;
const getApi = async (url) => {
  const res = await axios({
    method: "GET",
    url: url,
    headers: { "Content-Type": "application/json" },
  });
  console.log("res====", res);
  return res.data;
};

const allUsers = () => getApi(allUsersUrl);

export { allUsers };
