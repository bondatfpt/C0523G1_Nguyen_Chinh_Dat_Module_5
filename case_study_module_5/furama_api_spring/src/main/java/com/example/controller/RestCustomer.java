package com.example.controller;

import com.example.model.Customer;
import com.example.service.ICustomerService;
import com.example.service.ICustomerTypeService;
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
    @Autowired
    private ICustomerTypeService iCustomerTypeService;

    @GetMapping("/")
    public ResponseEntity<List<Customer>> showList() {
        List<Customer> customers = iCustomerService.findAll();
        if (customers.isEmpty()) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(customers,HttpStatus.OK);
        }
    }

    @GetMapping ("/{id}")
    public ResponseEntity<Customer> getCustomerById (@PathVariable Integer id){
        Customer customer = iCustomerService.findById(id);
        if (customer != null){
            return  new ResponseEntity<>(customer, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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

    @GetMapping ("/customer-type/{name}")
    public ResponseEntity<List<Customer>> getCustomerByCustomerTypeName (@PathVariable String name) {
        List <Customer> customerList = iCustomerService.findCustomerByCustomerTypeNameContaining(name);
        if (customerList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return  new ResponseEntity<>(customerList,HttpStatus.OK);
        }
    }
}
