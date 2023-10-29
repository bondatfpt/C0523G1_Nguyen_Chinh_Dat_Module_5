import axios from "axios";
import queryString from "query-string"

export const getAll = async(pagination) => {
    const paramString = queryString.stringify(pagination);
    try {
        const respone = await axios.get("http://localhost:3001/products?_sort=harvestDate&_order=asc&" + paramString);
        console.log(respone.data);
        return respone;
    } catch (error) {
        console.log(error);
    }
}


export const searchByHarvestDate = async(harvestDate) => {
    try {
        const respone = await axios.get("http://localhost:3001/products?_sort=harvestDate&_order=asc&harvestDate="+harvestDate );
        console.log(respone.data);
        return respone.data;
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

export const getTypes = async () => {
    try {
        const respone = await axios.get("http://localhost:3001/types");
        console.log(respone.data);
        return respone.data;
    } catch (error) {
        console.log(error);
    }
}

export const searchByType = async (id) => {
    try {
        const respone = await axios.get("http://localhost:3001/products?_sort=harvestDate&_order=asc&type.id=" +id);
        console.log(respone.data);
        return respone.data;
    } catch (error) {
        console.log(error);
    }
}

export const searchAll = async(harvestDate,typeId) => {
    try {
        const respone = await axios.get("http://localhost:3001/products?_sort=harvestDate&_order=asc&harvestDate="+harvestDate +"&type.id=" +typeId);
        console.log(respone.data);
        return respone.data;
    } catch (error) {
        console.log(error);
    }
}

export const create  = async (values) => {
    try {
        const respone = await axios.post("http://localhost:3001/products",values);
        console.log(respone.status);
        return respone.status;
    } catch (error) {
        console.log(error);
    }
}



