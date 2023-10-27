import axios from "axios";

export const remove = async (id) => {
    try {
        const respone = await axios.delete("http://localhost:3001/houses/"+id);
        console.log(respone);
        return respone;
    } catch (error) {
        console.log(error);
    }
}

export const getAll = async () => {
    try {
        const respone = await axios.get ("http://localhost:3001/houses");
        console.log(respone.data);
        return respone.data;
    } catch (error) {
        console.log(error);
    }
}

export const create = async (values) => {
    try {
        const respone = await axios.post("http://localhost:3001/houses" , values);
        console.log(respone.status);
        return respone.status;
    } catch (error) {
        
    }
}

export const findById = async(id) => {
    try {
        const respone = await axios.get("http://localhost:3001/houses/"+id);
        console.log(respone.data);
        return respone;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (values,id) => {
    try {
        const respone = await axios.put("http://localhost:3001/houses/"+id,values);
        console.log(respone.status);
        return respone.status;
    } catch (error) {
        console.log(error);
    }
}