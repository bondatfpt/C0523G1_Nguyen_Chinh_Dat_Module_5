import axios from "axios";
import queryString from "query-string"

export const getAll = async(pagination) => {
    const paramString = queryString.stringify(pagination);
    try {
        const respone = await axios.get("http://localhost:3001/products?" + paramString);
        console.log(respone.data);
        return respone;
    } catch (error) {
        console.log(error);
    }
}

export const getType = async() => {
    try {
        const respone = await axios.get("http://localhost:3001/products");
        console.log(respone.data);
        return respone.data;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        const respone = await axios.delete ("http://localhost:3001/products/" + id);
        console.log(respone.status);
        return respone.status;
    } catch (error) {
        console.log(error);
    }
}


