package net.fernandosalas.ems.repository;
import net.fernandosalas.ems.entity.Learner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LearnerRepository extends JpaRepository<Learner, Long> {
}
