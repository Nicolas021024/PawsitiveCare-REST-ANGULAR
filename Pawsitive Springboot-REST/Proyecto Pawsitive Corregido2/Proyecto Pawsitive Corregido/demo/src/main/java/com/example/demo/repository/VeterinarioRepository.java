package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Veterinario;

@Repository
public interface VeterinarioRepository extends JpaRepository<Veterinario, Long> {

    Veterinario findByCedulaAndClave(Long usuario, String clave);

    @Query("SELECT SUM(v.numAtenciones) FROM Veterinario v")
    int getNumAtenciones();
}
