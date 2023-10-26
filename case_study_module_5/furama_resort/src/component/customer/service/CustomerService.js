import axios from "axios";

export const remove = async (id) => {
  try {
    const response = await axios.delete(
      "http://localhost:8080/api/customers/" + id
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/customers/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const update = async (values, id) => {
  try {
    const response = await axios.put(
      "http://localhost:8080/api/customers/" + id,
      values
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const findById = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/customers/" + id
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomerTypes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/customer-types/"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const create = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/customers",
      values
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const handleCheckPhoneNumber = async (phoneNumber,id) => {
  const customers = await getAll();
  const customer = customers.find(customer => customer.phoneNumber == phoneNumber && customer.id != id);
  if (!customer){
    return true;
  }else{
    return false;
  }
}

export const handleCheckIdentityNumber = async (identityNumber,id) => {
  const customers = await getAll();
  const customer = customers.find(customer => customer.identityNumber == identityNumber && customer.id != id);
  if (!customer){
    return true;
  }else{
    return false;
  }
}

export const handleCheckEmail = async (email,id) => {
  const customers = await getAll();
  const customer = customers.find(customer => customer.email == email && customer.id != id);
  if (!customer){
    return true;
  }else{
    return false;
  }
}
export const getCustomersByCustomerTypeName = async (name) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/customers/customer-type/" + name
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const getCustomersByName = async (name) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/customers/search/" + name
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
