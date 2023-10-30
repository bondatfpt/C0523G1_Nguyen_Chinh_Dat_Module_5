package com.example.repository;
import com.example.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    List<Customer> findCustomerByCustomerTypeNameContaining(String customerTypeName);
    @Query("SELECT c FROM Customer c WHERE c.name LIKE %:keyword%")
    List<Customer> findCustomersByNameContaining(@Param("keyword") String keyword);
}
