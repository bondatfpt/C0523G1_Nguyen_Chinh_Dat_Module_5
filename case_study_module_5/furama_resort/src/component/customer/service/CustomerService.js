import axios from "axios";

export const remove = async (id) => {
  try {
    const response = await axios.delete(
      "http://localhost:8080/api/customers/" + id
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/customers/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const update = async (values, id) => {
  try {
    const response = await axios.put(
      "http://localhost:8080/api/customers/" + id,
      values
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const findById = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/customers/" + id
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomerTypes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/customer-types/"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const create = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/customers",
      values
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
