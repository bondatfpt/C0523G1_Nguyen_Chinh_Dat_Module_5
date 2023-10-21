package com.example.service;

import com.example.model.Contract;
import com.example.model.Customer;

import java.util.List;

public interface IContractService {
    List<Contract> findAll ();

    void save (Contract contract);

    void delete (Integer id);
}
