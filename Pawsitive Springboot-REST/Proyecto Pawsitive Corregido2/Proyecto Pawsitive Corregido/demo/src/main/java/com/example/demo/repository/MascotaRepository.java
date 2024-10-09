package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Mascota;

@Repository
public interface MascotaRepository extends JpaRepository<Mascota, Long> {
        List<Mascota> findByClienteId(Long clienteId);

        @Query("SELECT COUNT(m) FROM Mascota m WHERE m.estado = true")
        int mascotasEnTratamiento();
}