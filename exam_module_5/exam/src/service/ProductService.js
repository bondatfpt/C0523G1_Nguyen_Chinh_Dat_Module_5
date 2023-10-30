import axios from "axios";
import queryString from "query-string";

export const getAll = async (pagination) => {
  const paramString = queryString.stringify(pagination);
  const path =
    "http://localhost:3001/products?_sort=harvestDate&_order=asc&" +
    paramString;
  console.log(path);
  try {
    const response = await axios.get(
      "http://localhost:3001/products?_sort=harvestDate&_order=asc&" +
        paramString
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getTypes = async () => {
  try {
    const respone = await axios.get("http://localhost:3001/types");
    console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};

export const getByType = async (typeId) => {
  try {
    const respone = await axios.get(
      "http://localhost:3001/products?_sort=harvestDate&_order=asc&type.id=" +
        typeId
    );
    console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};

export const getByDate = async (harvestDate) => {
  try {
    const respone = await axios.get(
      "http://localhost:3001/products?_sort=harvestDate&_order=asc&harvestDate=" +
        harvestDate
    );
    console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};

export const getByDateAndType = async (harvestDate, typeId) => {
  try {
    const respone = await axios.get(
      "http://localhost:3001/products?_sort=harvestDate&_order=asc&harvestDate=" +
        harvestDate +
        "&type.id=" +
        typeId
    );
    console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (id) => {
  try {
    const respone = await axios.delete ("http://localhost:3001/products/" + id);
    console.log(respone.status);
    return respone.status;
  } catch (error) {
    console.log(error);
  }
}
