import axios from "axios";

export const remove = async (id) => {
  try {
    await axios.delete("http://localhost:8080/api/customers/" + id);
  } catch (error) {
    console.log(error);
  }
};
