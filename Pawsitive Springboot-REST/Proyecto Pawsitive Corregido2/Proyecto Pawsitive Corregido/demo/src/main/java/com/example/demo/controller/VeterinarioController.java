package com.example.demo.controller;

import com.example.demo.model.Veterinario;
import com.example.demo.service.VeterinarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/veterinario")
@CrossOrigin(origins = "http://localhost:4200")
public class VeterinarioController {

    @Autowired
    private VeterinarioService veterinarioService;

    @GetMapping("/all")
    public List<Veterinario> ver() {
        return veterinarioService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Veterinario> home(@PathVariable("id") Long id) {
        return ResponseEntity.ok(veterinarioService.findById(id));
    }

    @PostMapping
    public Veterinario agregar(@RequestBody Veterinario veterinario) {
        return veterinarioService.add(veterinario);
    }

    @PutMapping("/{id}")
    public Veterinario modificar(@PathVariable("id") Long id, @RequestBody Veterinario veterinario) {
        veterinario.setId(id);
        return veterinarioService.update(veterinario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Long id) {
        veterinarioService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
