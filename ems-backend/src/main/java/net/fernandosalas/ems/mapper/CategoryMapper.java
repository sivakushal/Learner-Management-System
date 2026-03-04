package net.fernandosalas.ems.mapper;

import net.fernandosalas.ems.dto.CategoryDto;
import net.fernandosalas.ems.entity.Category;

public class CategoryMapper {
    public static CategoryDto mapToCategoryDto(Category category) {
        return new CategoryDto(
                category.getId(),
                category.getCategoryName(),
                category.getCategoryDescription()
        );
    }

    public static Category mapToCategory(CategoryDto categoryDto) {
        return new Category(
                categoryDto.getId(),
                categoryDto.getCategoryName(),
                categoryDto.getCategoryDescription()
        );
    }
}
