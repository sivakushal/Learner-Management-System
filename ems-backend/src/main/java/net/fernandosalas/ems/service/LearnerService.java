package net.fernandosalas.ems.service;
import net.fernandosalas.ems.dto.LearnerDto;
import java.util.List;

public interface LearnerService {
    LearnerDto createLearner(LearnerDto learnerDto);
    LearnerDto getLearnerById(Long learnerId);
    List<LearnerDto> getAllLearners();
    LearnerDto updateLearner(Long learnerId, LearnerDto learnerDto);
    void deleteLearner(Long learnerId);
}
