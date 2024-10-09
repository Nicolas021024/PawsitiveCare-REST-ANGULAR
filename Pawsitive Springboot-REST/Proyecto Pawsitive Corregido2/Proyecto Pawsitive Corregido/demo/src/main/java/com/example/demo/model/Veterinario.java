package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Veterinario {

    @Id
    @GeneratedValue
    private Long id;

    private String nombre;
    private Long cedula;
    private String clave;
    private String especialidad;
    private String fotoURL;
    private int numAtenciones;
    
    @JsonIgnore
    @OneToMany(mappedBy = "veterinario", cascade = CascadeType.ALL)
    private List<Tratamiento> tratamientos;

    public Veterinario(String nombre, Long cedula, String clave, String especialidad, String fotoURL,
            int numAtenciones) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.clave = clave;
        this.especialidad = especialidad;
        this.fotoURL = fotoURL;
        this.numAtenciones = numAtenciones;
    }

    public Veterinario() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Long getCedula() {
        return cedula;
    }

    public void setCedula(Long cedula) {
        this.cedula = cedula;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public String getFotoURL() {
        return fotoURL;
    }

    public void setFotoURL(String fotoURL) {
        this.fotoURL = fotoURL;
    }

    public int getNumAtenciones() {
        return numAtenciones;
    }

    public void setNumAtenciones(int numAtenciones) {
        this.numAtenciones = numAtenciones;
    }

}
