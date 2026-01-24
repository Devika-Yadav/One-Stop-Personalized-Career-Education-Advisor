package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.PdfResource;
import com.careeradvisor.backend.service.PdfResourceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pdf-resources")
public class PdfResourceController {

    private final PdfResourceService service;

    public PdfResourceController(PdfResourceService service) {
        this.service = service;
    }

    // ADMIN APIs
    @PostMapping("/add")
    public PdfResource add(@RequestBody PdfResource pdf) {
        return service.addPdf(pdf);
    }

    @PutMapping("/update/{id}")
    public PdfResource update(@PathVariable Long id,
                              @RequestBody PdfResource pdf) {
        return service.updatePdf(id, pdf);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        service.deletePdf(id);
        return "PDF resource deleted successfully";
    }

    // STUDENT APIs
    @GetMapping("/all")
    public List<PdfResource> all() {
        return service.getAllPdfs();
    }

    @GetMapping("/by-domain")
    public List<PdfResource> byDomain(@RequestParam String domain) {
        return service.getByDomain(domain);
    }

    @GetMapping("/by-domain-role")
    public List<PdfResource> byDomainRole(
            @RequestParam String domain,
            @RequestParam String role) {
        return service.getByDomainAndRole(domain, role);
    }

    @GetMapping("/search")
    public List<PdfResource> search(@RequestParam String keyword) {
        return service.searchBySkill(keyword);
    }
}
