package com.example.model;

import javax.persistence.*;

@Entity
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String contractCode;
    @Column(columnDefinition = "date")
    private String startDate;
    @Column(columnDefinition = "date")
    private String endDate;
    private double deposit;
    private double totalPayment;

    public Contract() {
    }

    public Contract(String contractCode, String startDate, String endDate, double deposit, double totalPayment) {
        this.contractCode = contractCode;
        this.startDate = startDate;
        this.endDate = endDate;
        this.deposit = deposit;
        this.totalPayment = totalPayment;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContractCode() {
        return contractCode;
    }

    public void setContractCode(String contractCode) {
        this.contractCode = contractCode;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public double getDeposit() {
        return deposit;
    }

    public void setDeposit(double deposit) {
        this.deposit = deposit;
    }

    public double getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(double totalPayment) {
        this.totalPayment = totalPayment;
    }
}
