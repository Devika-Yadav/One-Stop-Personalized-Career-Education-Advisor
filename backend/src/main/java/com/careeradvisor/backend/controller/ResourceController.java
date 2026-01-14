package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.Institution;
import com.careeradvisor.backend.model.Resource;
import com.careeradvisor.backend.service.ResourceService;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resource")
public class ResourceController {

    private final ResourceService resourceService;
    public ResourceController(ResourceService resourceService){
        this.resourceService=resourceService;
    }
    @PostMapping("/add")
    public String addResource(@RequestBody Resource resource){
        resourceService.addResource(resource);
        return "added sucessfully";
    }
    @GetMapping("/all")
    public List<Resource> getAllResources(){
        return resourceService.getAllResources();
    }
    @GetMapping("/search")
    public List<Resource> getResourceByKeyword(@RequestParam String keyword){
        return resourceService.getResourceByKeyword(keyword);

    }
    @PutMapping("/update/{id}")
    public Resource updateResource(@PathVariable Long id,@RequestBody Resource resource){
        return resourceService.updateResource(id,resource);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteResourceById(@PathVariable Long id){
        resourceService.deleteResourceById(id);
    }
}


