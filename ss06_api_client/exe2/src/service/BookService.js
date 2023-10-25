import axios from "axios";

export const getAll = async () => {
    try {
        const response = await axios.get("http://localhost:3001/books");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const add = async (values) =>{
    try {
        const response = await axios.post ("http://localhost:3001/books",values);
    } catch (error) {
        console.log(error);
    }
}

export const update = async (values,id) => {
    try {
        const response = await axios.put("http://localhost:3001/books/" + id,values)
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) => {
    try {
        const response = await axios.get("http://localhost:3001/books/" + id)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        const response = await axios.delete("http://localhost:3001/books/" + id)
        return response;
    } catch (error) {
        console.log(error);
    }
}