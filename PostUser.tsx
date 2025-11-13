import axios from "axios";
export const createUser = async (userData: unknown) => {
  try {
    const response = await axios.post("/api/users", userData);
    if (!response) {
      throw new Error("Failed to create user");
    }

    const data = await response.data;
    console.log("User created successfully", data);
    return data;
  } catch (error) {
    console.log(userData);
    console.log("Error creating user", error);
  }
};

export default createUser;
