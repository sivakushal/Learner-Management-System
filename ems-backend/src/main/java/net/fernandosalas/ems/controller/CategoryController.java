package net.fernandosalas.ems.controller;
import lombok.AllArgsConstructor;
import net.fernandosalas.ems.dto.CategoryDto;
import net.fernandosalas.ems.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/categories")
@AllArgsConstructor
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
    @PostMapping
    public ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto categoryDto) {
       CategoryDto newCategory =  categoryService.createCategory(categoryDto);
       return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CategoryDto> getCategoryById(@PathVariable("id") Long categoryId) {
       CategoryDto categoryDto = categoryService.getCategoryById(categoryId);
       return new ResponseEntity<>(categoryDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        List<CategoryDto> categoryDtoList = categoryService.getAllCategories();
        return new ResponseEntity<>(categoryDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<CategoryDto> updateCategory(@PathVariable("id") Long categoryId,
                                                          @RequestBody CategoryDto categoryDto) {
       CategoryDto updatedCategory = categoryService.updateCategory(categoryId, categoryDto);
       return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long categoryId) {
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>("Category deleted successfully", HttpStatus.OK);
    }
}
