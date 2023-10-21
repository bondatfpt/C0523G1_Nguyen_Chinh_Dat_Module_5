package com.example.controller;

import com.example.model.Customer;
import com.example.service.ICustomerService;
import com.fasterxml.jackson.annotation.JsonCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping (value = "/api/customers")
public class RestCustomer {
    @Autowired
    private ICustomerService iCustomerService;

    @GetMapping("/")
    public ResponseEntity<List<Customer>> showList() {
        List<Customer> customers = iCustomerService.findAll();
        if (customers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(customers,HttpStatus.OK);
        }
    }
    @PostMapping
    public ResponseEntity <String> create (@RequestBody  Customer customer){
        iCustomerService.save(customer);
        return ResponseEntity.status(HttpStatus.CREATED).body("Success Created");
    }

    @PutMapping ("/{id}")
    public ResponseEntity<String> update (@RequestBody Customer customer, @PathVariable Integer id){
        customer.setId(id);
        iCustomerService.save(customer);
        return ResponseEntity.ok("Success update");
    }

    @DeleteMapping ("/{id}")
    public ResponseEntity<String> delete (@PathVariable Integer id){
        iCustomerService.delete(id);
        return ResponseEntity.ok("Success delete");
    }

}
