import axios from "axios"
export  const getAll = async() =>{
    try {
        const response = await axios.get ("http://localhost:3001/todoList");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const add = async (values) =>{
    try {
        const response = await axios.post("http://localhost:3001/todoList/",values)
    } catch (error) {
        console.log(error);
    }
}