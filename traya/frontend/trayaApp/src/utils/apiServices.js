import axios from "axios";

const login = async (data) => {
  try {
    const url = `https://clean-sunglasses-foal.cyclic.app/users/login`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return { error: error };
  }
};

const register = async (data) => {
  try {
    const url = `https://clean-sunglasses-foal.cyclic.app/users/register`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return { error: error };
  }
};

const addOrEditReview = async (email, data) => {
  console.log(email, data);
  try {
    const url = `https://clean-sunglasses-foal.cyclic.app/users/${email}/add-review/`;
    console.log(url);
    const response = await axios.post(url, { lastOrder: data });
    return response.data;
  } catch (error) {
    return { error: error };
  }
};

export { login, register, addOrEditReview };
