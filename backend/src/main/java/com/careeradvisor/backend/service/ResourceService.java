package com.careeradvisor.backend.service;

import com.careeradvisor.backend.exception.ResourceNotFoundException;
import com.careeradvisor.backend.model.Institution;
import com.careeradvisor.backend.model.Resource;
import com.careeradvisor.backend.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourceService {

    private final ResourceRepository resourceRepository;
    public ResourceService(ResourceRepository resourceRepository){
        this.resourceRepository=resourceRepository;
    }

    public void addResource(Resource resource) {
        resourceRepository.save(resource);
    }

    public List<Resource> getAllResources() {
        return resourceRepository.findAll();
    }

    public List<Resource> getResourceByKeyword(String keyword) {
        return resourceRepository.findResourceByKeyword(keyword);
    }

    public Resource updateResource(Long id,Resource resource) {
        Resource existingResource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resource not found with id: " + id));
        existingResource.setResourceName(resource.getResourceName());
        existingResource.setSkills(resource.getSkills());
        existingResource.setPlatform(resource.getPlatform());
        existingResource.setResourceLink(resource.getResourceLink());
        return resourceRepository.save(existingResource);

    }

    public void deleteResourceById(Long id) {
        resourceRepository.deleteById(id);
    }
}


