package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Cliente;

@Service
public interface ClienteService {

    public Cliente findById(Long id);

    public Cliente findByCedula(Long cedula);

    public List<Cliente> findAll();

    public Cliente add(Cliente cliente);

    public void deleteById(Long id);

    public void update(Cliente cliente);
}
