import axios from "axios";

export const getAll = async () => {
try {
    const response = await axios.get("http://localhost:3001/contracts");
    return response.data;
} catch (error) {
    console.log(error);
}
};

export const create = async (values) => {
    try {
        const response = await axios.post ("http://localhost:3001/contracts",values);
        return response.status;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (values,id) => {
    try {
        const response = await axios.put ("http://localhost:3001/contracts/"+ id,values);
        console.log(response.status);
        return response.status;
    } catch (error) {
        console.log(error);
    }
}
export const findById = async (id) => {
    try {
        const response = await axios.get("http://localhost:3001/contracts/" + id);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id)=>{
    try {
        const response = await axios.delete("http://localhost:3001/contracts/"+id);
        console.log(response.status);
        return response.status;
    } catch (error) {
        console.log(error);
    }
}