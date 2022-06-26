import axios from "axios";
export const registerUser = async (dummyData) => {
  console.log(JSON.stringify(dummyData));
  const res = await axios.post(
    "http://localhost:3001/users/adduser/",
    dummyData
  );
  return res;
};

export const getAllusers = async () => {
  const res = await axios("http://localhost:3001/users/all/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
