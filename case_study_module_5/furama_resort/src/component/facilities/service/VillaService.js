import axios from "axios";

export const getRoomStandards = async () => {
    try {
        const response = await axios.get("http://localhost:3001/roomStandard");
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getAll = async () => {
    try {
        const response = await axios.get("http://localhost:3001/villas");
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const create = async (values) => {
    try {
        const response = await axios.post("http://localhost:3001/villas",values);
        console.log(response.status);
        return response.status;
    } catch (error) {
        
    }
}

export const findById = async (id) => {
    try {
        const response = await axios.get("http://localhost:3001/villas/" + id);
        console.log(response.data);
        return response.data;
    } catch (error) {
        
    }
} 

export const update = async (values,id) =>{
    try {
       const response = await axios.put("http://localhost:3001/villas/"+id,values);
       console.log(response.status);
       return response.status;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        const response = await axios.delete ("http://localhost:3001/villas/" + id);
        console.log(response.status);
        return response.status;
    } catch (error) {
        console.log(error);
    }
}