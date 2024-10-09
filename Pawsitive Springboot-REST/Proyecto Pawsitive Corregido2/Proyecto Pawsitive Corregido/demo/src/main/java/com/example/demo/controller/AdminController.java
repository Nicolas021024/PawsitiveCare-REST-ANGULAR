package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.service.MascotaService;
import com.example.demo.service.VeterinarioService;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private VeterinarioService vetService;

    @Autowired
    private MascotaService mascotaService;

    @GetMapping("/home")
    public String home() {
        return "admin_home";
    }

    @GetMapping("/negocio")
    public String negocio(Model model) {
        model.addAttribute("mascotasEnTratamiento", mascotaService.mascotasEnTratamiento());
        model.addAttribute("tratamientos", vetService.getNumAtenciones());
        return "admin_negocio";
    }
}
