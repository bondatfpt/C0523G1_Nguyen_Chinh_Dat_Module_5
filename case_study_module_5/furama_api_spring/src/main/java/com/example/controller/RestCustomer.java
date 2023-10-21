package com.example.controller;

import com.example.model.Customer;
import com.example.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class RestCustomer {
    @Autowired
    private ICustomerService iCustomerService;

    @GetMapping("/api/customers")
    public ResponseEntity<List<Customer>> showList() {
        List<Customer> customers = iCustomerService.findAll();
        if (customers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            System.out.println(customers);
            return new ResponseEntity<>(customers,HttpStatus.OK);
        }
    }
}
