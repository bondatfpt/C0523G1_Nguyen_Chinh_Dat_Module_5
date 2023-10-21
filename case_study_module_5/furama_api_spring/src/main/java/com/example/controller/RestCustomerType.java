package com.example.controller;

import com.example.model.Customer;
import com.example.model.CustomerType;
import com.example.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping ("/api/customer-types")
@CrossOrigin("*")
public class RestCustomerType {
    @Autowired
    private ICustomerTypeService iCustomerTypeService;
    @GetMapping("/")
    public ResponseEntity<List<CustomerType>> showList() {
        List<CustomerType> customerTypes = iCustomerTypeService.findAll();
        if (customerTypes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(customerTypes,HttpStatus.OK);
        }
    }
}
