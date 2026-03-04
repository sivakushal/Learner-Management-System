package net.fernandosalas.ems.repository;

import net.fernandosalas.ems.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
