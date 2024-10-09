package com.example.demo.service;

import com.example.demo.model.Medicamento;
import com.example.demo.repository.MedicamentoRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.io.FileInputStream;
import java.io.IOException;

@Service
public class MedicamentoServiceImpl implements MedicamentoService {

    @Autowired
    private MedicamentoRepository medicamentoRepo;

    @Override
    public void cargarMedicamentosDesdeExcel(String rutaArchivo) {
        try (FileInputStream fis = new FileInputStream(rutaArchivo);
             Workbook workbook = new XSSFWorkbook(fis)) {

            Sheet sheet = workbook.getSheetAt(0);
            for (int i = 1; i <= sheet.getLastRowNum(); i++) { // Saltar la fila de encabezado
                Row row = sheet.getRow(i);
                String nombre = row.getCell(0).getStringCellValue();
                double precioVenta = row.getCell(1).getNumericCellValue();
                double precioCompra = row.getCell(2).getNumericCellValue();
                int unidadesDisponibles = (int) row.getCell(3).getNumericCellValue();
                int unidadesVendidas = (int) row.getCell(4).getNumericCellValue();

                Medicamento medicamento = new Medicamento(nombre, precioVenta, precioCompra, unidadesDisponibles, unidadesVendidas);
                medicamentoRepo.save(medicamento);
            }
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error al leer el archivo Excel", e);
        }
    }
}
