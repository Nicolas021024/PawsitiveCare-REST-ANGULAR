package com.example.demo.controller;

import com.example.demo.model.Tratamiento;
import com.example.demo.service.MascotaService;
import com.example.demo.service.TratamientoService;
import com.example.demo.service.VeterinarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/tratamientos")
@CrossOrigin(origins = "http://localhost:4200") // Para permitir solicitudes desde Angular
public class TratamientoController {

    @Autowired
    private TratamientoService tratamientoService;

    @Autowired
    private MascotaService mascotaService;

    @Autowired
    private VeterinarioService veterinarioService;

    @GetMapping("/all")
    public ResponseEntity<List<Tratamiento>> ver() {
        List<Tratamiento> tratamientos = tratamientoService.findAll();
        return ResponseEntity.ok(tratamientos);
    }

    @PostMapping
    public ResponseEntity<Tratamiento> agregarTratamiento(@RequestBody Tratamiento tratamiento) {
        tratamiento.setFecha(LocalDate.now());
        Tratamiento nuevoTratamiento = tratamientoService.add(tratamiento);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoTratamiento);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Long id) {
        tratamientoService.deleteById(id);
        return ResponseEntity.noContent().build(); // Respuesta 204 No Content al eliminar con éxito
    }

    @GetMapping("/mascota/{id}")
    public ResponseEntity<List<Tratamiento>> verTratamientosPorMascota(@PathVariable("id") Long mascotaId) {
        List<Tratamiento> tratamientos = tratamientoService.findByMascotaId(mascotaId);
        return ResponseEntity.ok(tratamientos);
    }
}
