package net.fernandosalas.ems.controller;
import lombok.AllArgsConstructor;
import net.fernandosalas.ems.dto.LearnerDto;
import net.fernandosalas.ems.service.LearnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/learners")
@AllArgsConstructor
public class LearnerController {
    @Autowired
    private LearnerService learnerService;
    @PostMapping
    public ResponseEntity<LearnerDto> createLearner(@RequestBody LearnerDto learnerDto) {
       LearnerDto savedLearner =  learnerService.createLearner(learnerDto);
       return new ResponseEntity<>(savedLearner, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<LearnerDto> getLearnerById(@PathVariable("id") Long learnerId) {
       LearnerDto learnerDto = learnerService.getLearnerById(learnerId);
       return new ResponseEntity<>(learnerDto, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<LearnerDto>> getAllLearners() {
       List<LearnerDto> learnerDtoList =  learnerService.getAllLearners();
       return new ResponseEntity<>(learnerDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<LearnerDto> updateLearner(@PathVariable("id") Long learnerId,
                                                    @RequestBody LearnerDto learnerDto) {
       LearnerDto newLearnerDto =  learnerService.updateLearner(learnerId, learnerDto);
       return new ResponseEntity<>(newLearnerDto, HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLearner(@PathVariable("id") Long learnerId) {
        learnerService.deleteLearner(learnerId);
        return new ResponseEntity<>("Learner was successfully deleted", HttpStatus.OK);
    }
}
