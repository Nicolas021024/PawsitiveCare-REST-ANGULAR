package com.example.demo.controller;


import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("")
public class HomeController {



    // http://localhost:8090
    @GetMapping("/principal")
    public String home() {
        return "principal";
    }
    @GetMapping("/Servicios")
    public String Servicios() {
        return "servicios";
    }
    

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @GetMapping("/administrador")
    public String administrador() {
        return "administrador";
    }


    @GetMapping("/cliente")
    public String cliente() {
        return "cliente";
    }

    @GetMapping("/vet_home")
    public String vet_home() {
        return "vet_home";
    }
    @GetMapping("/amigospeludos")
    public String AmigosPeludos() {
        return "amigospeludos";
}

@GetMapping("/nosotros")
    public String Nosotros() {
        return "nosotros";
    }
}
