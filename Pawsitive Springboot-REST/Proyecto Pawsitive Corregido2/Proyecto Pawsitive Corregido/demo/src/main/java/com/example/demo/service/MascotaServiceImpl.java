package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.Mascota;
import com.example.demo.repository.MascotaRepository;

@Service
public class MascotaServiceImpl implements MascotaService {

    @Autowired
    MascotaRepository repo;

    @Override
    public Mascota findById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Mascota no encontrada"));
    }

    @Override
    public List<Mascota> findAll() {
        return repo.findAll();
    }

    @Override
    public List<Mascota> findByDuenoId(Long clienteId) {
        return repo.findByClienteId(clienteId);
    }

    @Override
    public Mascota add(Mascota mascota) {
        return repo.save(mascota);  // Devolver el objeto guardado
    }

    @Override
    public void deleteById(Long id) {  // Cambiado a void
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Mascota no encontrada");
        }
        repo.deleteById(id);
    }

    @Override
    public Mascota update(Mascota mascota) {
        if (!repo.existsById(mascota.getId())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Mascota no encontrada");
        }
        return repo.save(mascota);  // Devolver el objeto actualizado
    }

    @Override
    public int mascotasEnTratamiento() {
        return repo.mascotasEnTratamiento();
    }
}
