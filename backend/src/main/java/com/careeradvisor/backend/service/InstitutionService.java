package com.careeradvisor.backend.service;

import com.careeradvisor.backend.exception.ResourceNotFoundException;
import com.careeradvisor.backend.model.Institution;
import com.careeradvisor.backend.repository.InstitutionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstitutionService {
    private final InstitutionRepository institution_repo;
    public InstitutionService(InstitutionRepository institution_repo){
        this.institution_repo=institution_repo;
    }
    public void addInstitution(Institution institution){
        institution_repo.save(institution);
    }
    public List<Institution> getAllInstitutions(){
        return institution_repo.findAll();
    }
//    public List<Institution> getInstitutionByName(String name){
//        return institution_repo.findByInstitutionName(name);
//
//    }
//    public List<Institution> getInstitutionsByStream(String stream) {
//        return institution_repo.findByStream(stream);
//    }
//
//    public List<Institution> getInstitutionsByLocation(String location) {
//        return institution_repo.findByLocation(location);
//    }
//
//    public List<Institution> getInstitutionsByStreamAndLocation(String stream, String location) {
//        return institution_repo.findByStreamAndLocation(stream, location);
//    }
    public List<Institution> searchInstitutions(String keyword) {
        return institution_repo.searchByKeyword(keyword);
    }
    public Institution saveInstitution(Institution institution) {
        return institution_repo.save(institution);
    }
    public void deleteInstitution(Long id) {
        institution_repo.deleteById(id);
    }
    public Institution updateInstitution(Long id, Institution updatedInstitution) {

        Institution existingInstitution = institution_repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Institution not found with id: " + id));

        existingInstitution.setInstitutionName(updatedInstitution.getInstitutionName());
        existingInstitution.setStream(updatedInstitution.getStream());
        existingInstitution.setLocation(updatedInstitution.getLocation());
        existingInstitution.setInstitutionWebsite(updatedInstitution.getInstitutionWebsite());

        return institution_repo.save(existingInstitution);
    }




}
