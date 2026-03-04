import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listStudents, deleteStudent } from "../services/StudentService";
import { listDepartments } from "../services/DepartmentService";

const useListStudentComponentHook = () => {
  const [students, setStudents] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await listStudents();
      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    const response = await listDepartments();
    setCategories(response.data);
  };

  useEffect(() => {
    fetchStudents();
    fetchCategories();
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.categoryName : "Unknown Category";
  };

  const updateStudent = (id) => {
    navigate(`/edit-student/${id}`);
  };

  const deleteStudentById = async (id) => {
    await deleteStudent(id);
    toast.success("Learner deleted successfully!");
    fetchStudents();
  };

  return {
    students,
    categories,
    fetchStudents,
    fetchCategories,
    getCategoryName,
    updateStudent,
    deleteStudentById,
  };
};

export default useListStudentComponentHook;
