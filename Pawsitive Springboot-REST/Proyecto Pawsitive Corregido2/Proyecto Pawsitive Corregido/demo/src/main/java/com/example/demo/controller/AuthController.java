package com.example.demo.controller;

import com.example.demo.model.Cliente;
import com.example.demo.model.Veterinario;
import com.example.demo.service.ClienteService;
import com.example.demo.service.VeterinarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private VeterinarioService veterinarioService;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        Long cedula = Long.parseLong(credentials.get("cedula"));
        String password = credentials.get("password");
        String type = credentials.get("type");

        switch (type) {
            case "1": // Veterinario
                Veterinario veterinario = veterinarioService.findByCedulaAndClave(cedula, password);
                if (veterinario != null) {
                    return ResponseEntity.ok(veterinario);
                }
                break;

            case "3": // Cliente
                Cliente cliente = clienteService.findByCedula(cedula);
                if (cliente != null) {
                    return ResponseEntity.ok(cliente);
                }
                break;

            default:
                return ResponseEntity.badRequest().body("Tipo de usuario no válido");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no encontrado o credenciales inválidas");
    }
}
