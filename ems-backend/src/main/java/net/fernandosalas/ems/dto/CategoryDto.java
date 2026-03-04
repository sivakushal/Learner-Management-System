package net.fernandosalas.ems.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CategoryDto {
    private Long id;

    private String categoryName;

    private String categoryDescription;
}
