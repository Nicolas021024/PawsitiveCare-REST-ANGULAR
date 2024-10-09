package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.Veterinario;
import com.example.demo.repository.VeterinarioRepository;

@Service
public class VeterinarioServiceImpl implements VeterinarioService {

    @Autowired
    private VeterinarioRepository repo;

    @Override
    public Veterinario findById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Veterinario no encontrado"));
    }

    @Override
    public Veterinario findByCedulaAndClave(Long usuario, String clave) {
        return repo.findByCedulaAndClave(usuario, clave);
    }

    @Override
    public List<Veterinario> findAll() {
        return repo.findAll();
    }

    @Override
    public Veterinario add(Veterinario veterinario) {
        return repo.save(veterinario);  // Cambiado para retornar el objeto guardado
    }

    @Override
    public void deleteById(Long id) {
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Veterinario no encontrado");
        }
        repo.deleteById(id);
    }

    @Override
    public Veterinario update(Veterinario veterinario) {
        if (!repo.existsById(veterinario.getId())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Veterinario no encontrado");
        }
        return repo.save(veterinario);  // Cambiado para retornar el objeto actualizado
    }

    @Override
    public int getNumAtenciones() {
        return repo.getNumAtenciones();
    }
}
