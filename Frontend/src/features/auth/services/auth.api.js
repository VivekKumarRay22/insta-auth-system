import axios from "axios";

export async function register(username, email, password) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/register",
      {
        username,
        email,
        password,
      },
      { withCredentials: true },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
