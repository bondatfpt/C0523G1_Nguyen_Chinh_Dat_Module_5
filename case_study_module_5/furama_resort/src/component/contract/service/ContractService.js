import axios from "axios";
import queryString from "query-string";

export const getAll = async (pagination) => {
  const paramString = queryString.stringify(pagination);
  console.log(paramString);
  try {
    const response = await axios.get(
      "http://localhost:3001/contracts?_sort=startDate&_order=asc&" +
        paramString
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const create = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/contracts",
      values
    );
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const update = async (values, id) => {
  try {
    const response = await axios.put(
      "http://localhost:3001/contracts/" + id,
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
    const response = await axios.get("http://localhost:3001/contracts/" + id);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (id) => {
  try {
    const response = await axios.delete(
      "http://localhost:3001/contracts/" + id
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const findContractByStartDate = async (startDate,pagination) => {
  const paramString = queryString.stringify(pagination);
  const exam = "http://localhost:3001/contracts?startDate=" + startDate+"&"  + paramString;
  console.log(exam);
  try {
    const response = await axios.get(
      "http://localhost:3001/contracts?startDate=" + startDate  + "&" + paramString 
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
