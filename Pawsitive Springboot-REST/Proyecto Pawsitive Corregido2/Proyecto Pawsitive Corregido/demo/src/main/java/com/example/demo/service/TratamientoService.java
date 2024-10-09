package com.example.demo.service;

import com.example.demo.model.Tratamiento;
import java.util.List;

public interface TratamientoService {
    Tratamiento findById(Long id);
    List<Tratamiento> findAll();
    List<Tratamiento> findByMascotaId(Long mascotaId);
    List<Tratamiento> findByVeterinarioId(Long veterinarioId);
    Tratamiento add(Tratamiento tratamiento); // Cambiado de void a Tratamiento
    void deleteById(Long id);
}

