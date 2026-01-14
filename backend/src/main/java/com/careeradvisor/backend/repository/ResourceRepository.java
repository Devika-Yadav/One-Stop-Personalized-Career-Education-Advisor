package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ResourceRepository extends JpaRepository<Resource,Long> {
    @Query("SELECT r FROM Resource r "+
            "WHERE LOWER(r.resourceName) LIKE LOWER(CONCAT('%',:keyword,'%'))"
            +"OR LOWER(r.skills) LIKE LOWER(CONCAT('%',:keyword,'%'))"
            +"OR LOWER(r.platform) LIKE LOWER(CONCAT('%',:keyword,'%'))")
    List<Resource> findResourceByKeyword(@Param("keyword") String keyword);
}
