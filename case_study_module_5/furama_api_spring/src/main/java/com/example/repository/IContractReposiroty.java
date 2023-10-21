package com.example.repository;

import com.example.model.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IContractReposiroty extends JpaRepository<Contract, Integer> {
}
