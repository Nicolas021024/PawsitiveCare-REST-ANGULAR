package com.example.error;

public class NotFoundException extends RuntimeException {
    private Long id;

    public NotFoundException(Long id) {
        super("No se encontró el recurso con ID: " + id);
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
