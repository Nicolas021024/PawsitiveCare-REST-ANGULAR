package com.example.demo.service;

import com.example.demo.model.Tratamiento;
import com.example.demo.repository.TratamientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class TratamientoServiceImpl implements TratamientoService {

    @Autowired
    private TratamientoRepository repo;

    @Override
    public Tratamiento findById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tratamiento no encontrado"));
    }

    @Override
    public List<Tratamiento> findAll() {
        return repo.findAll();
    }

    @Override
    public List<Tratamiento> findByMascotaId(Long mascotaId) {
        return repo.findByMascotaId(mascotaId);
    }

    @Override
    public List<Tratamiento> findByVeterinarioId(Long veterinarioId) {
        return repo.findByVeterinarioId(veterinarioId);
    }

    @Override
    public Tratamiento add(Tratamiento tratamiento) {
        return repo.save(tratamiento);
    }

    @Override
    public void deleteById(Long id) {
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Tratamiento no encontrado");
        }
        repo.deleteById(id);
    }
}
