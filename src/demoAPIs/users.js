import axios from "axios";
import { serverURL } from "./serverlURL";
const PATH = {
  adduser: "/users/adduser",
  getallusers: "/users/all",
};
export const registerUser = async (dummyData) => {
  console.log(JSON.stringify(dummyData));
  const res = await axios.post(`${serverURL}${PATH.adduser}`, dummyData);
  return res;
};

export const getAllusers = async () => {
  const res = await axios(`${serverURL}${PATH.getallusers}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
