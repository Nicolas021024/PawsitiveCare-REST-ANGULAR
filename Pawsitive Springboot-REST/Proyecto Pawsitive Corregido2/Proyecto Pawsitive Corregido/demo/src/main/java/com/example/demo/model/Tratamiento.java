package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Tratamiento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String medicamento;
    private double precioCompra;
    private double precioVenta;
    private int unidades;

    @ManyToOne
    @JoinColumn(name = "veterinario_id", nullable = false)
    @JsonIgnore
    private Veterinario veterinario;

    @ManyToOne
    @JoinColumn(name = "mascota_id", nullable = false)
    @JsonIgnore
    private Mascota mascota;

    private LocalDate fecha;

    // Constructores, getters y setters
    public Tratamiento() {
    }

    public Tratamiento(String medicamento, double precioCompra, double precioVenta, int unidades, Veterinario veterinario, Mascota mascota, LocalDate fecha) {
        this.medicamento = medicamento;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.unidades = unidades;
        this.veterinario = veterinario;
        this.mascota = mascota;
        this.fecha = fecha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMedicamento() {
        return medicamento;
    }

    public void setMedicamento(String medicamento) {
        this.medicamento = medicamento;
    }

    public double getPrecioCompra() {
        return precioCompra;
    }

    public void setPrecioCompra(double precioCompra) {
        this.precioCompra = precioCompra;
    }

    public double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(double precioVenta) {
        this.precioVenta = precioVenta;
    }

    public int getUnidades() {
        return unidades;
    }

    public void setUnidades(int unidades) {
        this.unidades = unidades;
    }

    public Veterinario getVeterinario() {
        return veterinario;
    }

    public void setVeterinario(Veterinario veterinario) {
        this.veterinario = veterinario;
    }

    public Mascota getMascota() {
        return mascota;
    }

    public void setMascota(Mascota mascota) {
        this.mascota = mascota;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
}
