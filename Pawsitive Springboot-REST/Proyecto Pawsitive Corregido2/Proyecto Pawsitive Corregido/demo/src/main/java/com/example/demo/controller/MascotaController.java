    package com.example.demo.controller;

    import com.example.demo.model.Mascota;
    import com.example.demo.service.ClienteService;
    import com.example.demo.service.MascotaService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

    @RestController
    @RequestMapping("/api/mascotas")
    @CrossOrigin(origins = "http://localhost:4200")
    public class MascotaController {

        @Autowired
        private MascotaService mascotaService;

        @Autowired
        private ClienteService clienteService;

        @GetMapping("/all")
        public List<Mascota> mostrarMascotas() {
            return mascotaService.findAll();
        }

        @GetMapping("/{id}")
        public ResponseEntity<Mascota> mostrarMascota(@PathVariable("id") Long id) {
            Mascota mascota = mascotaService.findById(id);
            return ResponseEntity.ok(mascota);
        }

        @PostMapping
        public Mascota agregarMascota(@RequestBody Mascota mascota) {
            return mascotaService.add(mascota);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> eliminarMascota(@PathVariable("id") Long id) {
            mascotaService.deleteById(id);
            return ResponseEntity.noContent().build();
        }

        @PutMapping("/{id}")
        public Mascota modificarMascota(@PathVariable("id") Long id, @RequestBody Mascota mascota) {
            mascota.setId(id);
            return mascotaService.update(mascota);
        }
    }
