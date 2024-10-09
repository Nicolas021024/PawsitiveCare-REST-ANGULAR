package com.example.demo.controller;

import com.example.demo.model.Cliente;
import com.example.demo.service.ClienteService;
import com.example.demo.service.MascotaService;
import com.example.error.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {

    @Autowired
    private ClienteService service;

    @Autowired
    private MascotaService mascotaService;

    @GetMapping("/all")
    public List<Cliente> obtenerClientes() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> verCliente(@PathVariable("id") Long id) {
        Cliente cliente = service.findById(id);
        if (cliente != null) {
            return ResponseEntity.ok(cliente);
        } else {
            throw new NotFoundException(id);
        }
    }

    @PostMapping
    public Cliente agregarCliente(@RequestBody Cliente cliente) {
        return service.add(cliente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCliente(@PathVariable("id") Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> modificarCliente(@PathVariable("id") Long id, @RequestBody Cliente cliente) {
        Cliente clienteExistente = service.findById(id);
        if (clienteExistente != null) {
            cliente.setId(id);
            service.update(cliente);
            return ResponseEntity.ok(cliente);
        } else {
            throw new NotFoundException(id);
        }
    }
}
