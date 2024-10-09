package com.example.demo.service;


import java.util.List;
import org.springframework.stereotype.Service;

import com.example.demo.model.Mascota;

@Service
public interface MascotaService {

    public Mascota findById(Long id);

    public List<Mascota> findAll();

    public List<Mascota> findByDuenoId(Long clienteId);

    public Mascota add(Mascota mascota);

    public void deleteById(Long id);

    public Mascota update(Mascota mascota);

    public int mascotasEnTratamiento();

}