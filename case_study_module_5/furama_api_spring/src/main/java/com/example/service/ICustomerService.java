package com.example.service;

import com.example.model.Customer;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomerService {
    List<Customer> findAll ();

    void save (Customer customer);

    void delete (Integer id);

    Customer findById (Integer id);

    List<Customer> findCustomerByCustomerTypeNameContaining(String customerTypeName);
    List<Customer> findCustomersByNameContaining( String keyword);

}
