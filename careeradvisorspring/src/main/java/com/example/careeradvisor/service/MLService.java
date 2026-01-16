package com.example.careeradvisor.service;

import com.example.careeradvisor.dto.CareerRequestDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class MLService {

    private final RestTemplate restTemplate;

    public MLService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Map<String, Object> getPrediction(CareerRequestDTO dto) {

        Map<String, Object> payload = new HashMap<>();

        payload.put("education", dto.getEducation());

        // send all fields (null-safe)
        payload.put("interest_math", val(dto.getInterest_math()));
        payload.put("interest_physics", val(dto.getInterest_physics()));
        payload.put("interest_chemistry", val(dto.getInterest_chemistry()));
        payload.put("interest_biology", val(dto.getInterest_biology()));
        payload.put("interest_commerce", val(dto.getInterest_commerce()));
        payload.put("logical_thinking", val(dto.getLogical_thinking()));
        payload.put("memorization", val(dto.getMemorization()));
        payload.put("practical_learning", val(dto.getPractical_learning()));
        payload.put("exam_tolerance", val(dto.getExam_tolerance()));
        payload.put("long_study", val(dto.getLong_study()));

        payload.put("biology_interest", val(dto.getBiology_interest()));
        payload.put("patient_care", val(dto.getPatient_care()));
        payload.put("lab_work", val(dto.getLab_work()));
        payload.put("stress_tolerance", val(dto.getStress_tolerance()));
        payload.put("research_interest", val(dto.getResearch_interest()));
        payload.put("field_work", val(dto.getField_work()));
        payload.put("ethics_empathy", val(dto.getEthics_empathy()));
        payload.put("govt_exam", val(dto.getGovt_exam()));

        payload.put("coding_interest", val(dto.getCoding_interest()));
        payload.put("math_strength", val(dto.getMath_strength()));
        payload.put("physics_interest", val(dto.getPhysics_interest()));
        payload.put("problem_solving", val(dto.getProblem_solving()));
        payload.put("statistics_interest", val(dto.getStatistics_interest()));
        payload.put("design_interest", val(dto.getDesign_interest()));
        payload.put("hands_on", val(dto.getHands_on()));
        payload.put("management_interest", val(dto.getManagement_interest()));

        payload.put("coding_level", val(dto.getCoding_level()));
        payload.put("core_interest", val(dto.getCore_interest()));
        payload.put("data_interest", val(dto.getData_interest()));
        payload.put("govt_job_interest", val(dto.getGovt_job_interest()));
        payload.put("business_interest", val(dto.getBusiness_interest()));
        payload.put("leadership", val(dto.getLeadership()));
        payload.put("risk_taking", val(dto.getRisk_taking()));
        payload.put("communication", val(dto.getCommunication()));
        payload.put("long_term_goal", val(dto.getLong_term_goal()));

        return restTemplate.postForObject(
                "http://localhost:8000/predict",
                payload,
                Map.class
        );
    }

    private int val(Integer v) {
        return v == null ? 0 : v;
    }
}
