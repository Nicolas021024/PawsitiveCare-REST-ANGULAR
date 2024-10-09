package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.Cliente;
import com.example.demo.repository.ClienteRepository;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    public ClienteRepository repo;

    @Override
    public Cliente findById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente no encontrado"));
    }

    @Override
    public Cliente findByCedula(Long cedula) {
        return repo.findByCedula(cedula);
    }

    @Override
    public List<Cliente> findAll() {
        return repo.findAll();
    }

    @Override
    public Cliente add(Cliente cliente) { // Cambiado de void a Cliente
        return repo.save(cliente); // Devolver el objeto guardado
    }


    @Override
    public void deleteById(Long id) {
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente no encontrado");
        }
        repo.deleteById(id);
    }

    @Override
    public void update(Cliente cliente) {
        if (!repo.existsById(cliente.getId())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente no encontrado");
        }
        repo.save(cliente);
    }
}
