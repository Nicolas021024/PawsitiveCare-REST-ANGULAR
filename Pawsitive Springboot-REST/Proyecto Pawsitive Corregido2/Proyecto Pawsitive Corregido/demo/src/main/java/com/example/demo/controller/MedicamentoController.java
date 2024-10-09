package com.example.demo.controller;

import com.example.demo.service.MedicamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/medicamentos")
@CrossOrigin(origins = "http://localhost:4200")
public class MedicamentoController {

    @Autowired
    private MedicamentoService medicamentoService;

    @PostMapping("/cargar")
    public ResponseEntity<String> cargarMedicamentosDesdeExcel(@RequestParam("archivo") MultipartFile archivo) {
        if (archivo.isEmpty()) {
            return ResponseEntity.badRequest().body("Por favor selecciona un archivo");
        }

        try {
            String rutaArchivo = System.getProperty("java.io.tmpdir") + "/" + archivo.getOriginalFilename();
            File archivoTemporal = new File(rutaArchivo);
            archivo.transferTo(archivoTemporal);

            medicamentoService.cargarMedicamentosDesdeExcel(rutaArchivo);
            archivoTemporal.delete();

            return ResponseEntity.ok("Medicamentos cargados exitosamente desde el archivo.");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error al cargar el archivo: " + e.getMessage());
        }
    }
}
