import axios from "axios";
export const registerUser = async (dummyData) => {
  const res = await axios("http://localhost:3001/users/adduser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dummyData),
  });
  return res
};
