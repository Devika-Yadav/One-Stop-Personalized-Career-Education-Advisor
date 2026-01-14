package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.Institution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
public interface InstitutionRepository extends JpaRepository<Institution, Long> {
//    List<Institution> findByInstitutionName(String institutionName);
//    List<Institution> findByStream(String stream);
//    List<Institution> findByLocation(String location);
//    List<Institution> findByStreamAndLocation(String stream, String location);
    @Query("SELECT i FROM Institution i " +
            "WHERE LOWER(i.institutionName) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "OR LOWER(i.stream) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "OR LOWER(i.location) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Institution> searchByKeyword(@Param("keyword") String keyword);
}
