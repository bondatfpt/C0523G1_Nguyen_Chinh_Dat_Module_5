import axios from "axios";

export const getAll = async() => {
    try {
        const respone = await axios.get("http://localhost:3001/products");
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


