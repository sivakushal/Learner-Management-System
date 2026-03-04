package net.fernandosalas.ems.mapper;
import net.fernandosalas.ems.dto.LearnerDto;
import net.fernandosalas.ems.entity.Learner;

public class LearnerMapper {
    public static LearnerDto mapToLearnerDto(Learner learner) {
        return new LearnerDto(
          learner.getId(),
          learner.getFirstName(),
          learner.getLastName(),
          learner.getEmail(),
          learner.getCategory().getId()
        );
    }

    public static Learner mapToLearner(LearnerDto learnerDto) {
        Learner learner = new Learner();
        learner.setId(learnerDto.getId());
        learner.setFirstName(learnerDto.getFirstName());
        learner.setLastName(learnerDto.getLastName());
        learner.setEmail(learnerDto.getEmail());
        return learner;
    }
}
