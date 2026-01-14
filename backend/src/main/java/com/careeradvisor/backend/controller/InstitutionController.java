package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.Institution;
import com.careeradvisor.backend.service.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/institution")
public class InstitutionController {

    @Autowired
    private InstitutionService institutionService;

    @PostMapping("/addInstitution")
    public String addInstitution(@RequestBody Institution institution){
        institutionService.addInstitution(institution);
        return "add institution successfully";
    }
    @GetMapping("/all")
    public List<Institution> getAllInstitutions(){
        return institutionService.getAllInstitutions();
    }
//    @GetMapping("/byName")
//    public List<Institution> getInstitutionByName(@RequestParam String name) {
//        return institutionService.getInstitutionByName(name);
//    }
//
//    @GetMapping("/byStream")
//    public List<Institution> getInstitutionsByStream(@RequestParam String stream) {
//        return institutionService.getInstitutionsByStream(stream);
//    }
//
//    @GetMapping("/byLocation")
//    public List<Institution> getInstitutionsByLocation(@RequestParam String location) {
//        return institutionService.getInstitutionsByLocation(location);
//    }

    @GetMapping("/search")
    public List<Institution> searchInstitutions(@RequestParam String keyword) {
        return institutionService.searchInstitutions(keyword);
    }
    @PostMapping("/save")
    public Institution save(@RequestBody Institution institution) {
        return institutionService.saveInstitution(institution);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteInstitution(@PathVariable Long id) {
        institutionService.deleteInstitution(id);
        return "Institution deleted successfully";
    }
    @PutMapping("/update/{id}")
    public Institution updateInstitution(
            @PathVariable Long id,
            @RequestBody Institution institution) {

        return institutionService.updateInstitution(id, institution);
    }




}
