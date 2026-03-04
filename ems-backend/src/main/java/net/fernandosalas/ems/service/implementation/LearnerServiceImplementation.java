package net.fernandosalas.ems.service.implementation;
import lombok.AllArgsConstructor;
import net.fernandosalas.ems.dto.LearnerDto;
import net.fernandosalas.ems.entity.Category;
import net.fernandosalas.ems.entity.Learner;
import net.fernandosalas.ems.exception.ResourceNotFoundException;
import net.fernandosalas.ems.mapper.LearnerMapper;
import net.fernandosalas.ems.repository.CategoryRepository;
import net.fernandosalas.ems.repository.LearnerRepository;
import net.fernandosalas.ems.service.LearnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class LearnerServiceImplementation implements LearnerService {
    @Autowired
    private LearnerRepository learnerRepository;

    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public LearnerDto createLearner(LearnerDto learnerDto) {
        Learner learner = LearnerMapper.mapToLearner(learnerDto);

        Category category = categoryRepository.findById(learnerDto.getCategoryId())
                .orElseThrow(()-> new ResourceNotFoundException("Category not found with id: "
                                    + learnerDto.getCategoryId()));
        learner.setCategory(category);
        Learner savedLearner =  learnerRepository.save(learner);
        return LearnerMapper.mapToLearnerDto(savedLearner);
    }

    @Override
    public LearnerDto getLearnerById(Long learnerId) {
       Learner learner = learnerRepository.findById(learnerId).orElseThrow(() ->
                new ResourceNotFoundException("Learner not found with given id: " + learnerId));
        return LearnerMapper.mapToLearnerDto(learner);
    }

    @Override
    public List<LearnerDto> getAllLearners() {
       List<Learner> learnerList =  learnerRepository.findAll();
        return learnerList.stream()
                .map(LearnerMapper::mapToLearnerDto)
                .collect(Collectors.toList());
    }

    @Override
    public LearnerDto updateLearner(Long learnerId, LearnerDto learnerDto) {
        Learner learner = learnerRepository.findById(learnerId).orElseThrow(() ->
                new ResourceNotFoundException("Learner not found with given id: " + learnerId));

        learner.setFirstName(learnerDto.getFirstName());
        learner.setLastName(learnerDto.getLastName());
        learner.setEmail(learnerDto.getEmail());

        Category category = categoryRepository.findById(learnerDto.getCategoryId())
                .orElseThrow(()-> new ResourceNotFoundException("Category not found with id: "
                        + learnerDto.getCategoryId()));
        learner.setCategory(category);

        Learner savedLearner = learnerRepository.save(learner);
        return LearnerMapper.mapToLearnerDto(savedLearner);
    }

    @Override
    public void deleteLearner(Long learnerId) {
        learnerRepository.findById(learnerId).orElseThrow(() ->
                new ResourceNotFoundException("Learner not found with given id: " + learnerId));
        learnerRepository.deleteById(learnerId);
    }
}
