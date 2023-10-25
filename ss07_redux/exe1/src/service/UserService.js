import axios from "axios";
export const getAll = async() =>{
    try {
        const respone = await axios.get("http://localhost:3001/users");
        return respone.data;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async(id) =>{
    try {
        const respone = await axios.delete("http://localhost:3001/users/" + id);
        return respone.status;
    } catch (error) {
        console.log(error);
    }
}