package com.example.service;

import com.example.model.Contract;
import com.example.repository.IContractReposiroty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractService implements IContractService {
    @Autowired
    private IContractReposiroty iContractReposiroty;

    @Override
    public List<Contract> findAll() {
        return iContractReposiroty.findAll();
    }

    @Override
    public void save(Contract contract) {
        iContractReposiroty.save(contract);
    }

    @Override
    public void delete(Integer id) {
        iContractReposiroty.deleteById(id);
    }
}
