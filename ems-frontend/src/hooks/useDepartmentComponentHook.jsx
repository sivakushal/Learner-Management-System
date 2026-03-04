import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getDepartmentById,
  createDepartment,
  updateDeparment,
} from "../services/DepartmentService";

const useDepartmentComponentHook = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const getDepartment = async (id) => {
    const response = await getDepartmentById(id);
    const category = response.data;
    setCategoryName(category.categoryName);
    setCategoryDescription(category.categoryDescription);
  };

  useEffect(() => {
    if (id) {
      setTitle("Edit Category");
      getDepartment(id);
    } else {
      setTitle("New Category");
    }
  }, [id]);

  const saveOrUpdateDepartment = async (e) => {
    e.preventDefault();
    const category = { categoryName, categoryDescription };
    if (categoryName && categoryDescription) {
      if (id) {
        await updateDeparment(id, category);
        toast.info("Category updated successfully!");
        navigate("/departments");
        return;
      }
      await createDepartment(category);
      toast.success("Category added successfully!");
      navigate("/departments");
    } else {
      toast.error("All fields are required!");
    }
  };

  return {
    categoryName,
    setCategoryName,
    categoryDescription,
    setCategoryDescription,
    title,
    saveOrUpdateDepartment,
  };
};

export default useDepartmentComponentHook;
