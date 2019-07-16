import axios from "axios";

export const fetchData = async apiEndPoint => {
  let { data } = await axios.get(apiEndPoint);
  return data;
};
