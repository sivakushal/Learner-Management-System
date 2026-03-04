import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listDepartments } from "../services/DepartmentService";
import {
  updateStudent,
  createStudent,
  getStudentById,
} from "../services/StudentService";

const useStudentComponentHook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const response = await listDepartments();
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const saveOrUpdateStudent = async (e) => {
    e.preventDefault();

    const learner = { firstName, lastName, email, categoryId };

    if (firstName && lastName && email) {
      try {
        if (id) {
          await updateStudent(id, learner);
          toast.info("Learner updated successfully!");
          navigate("/");
        } else {
          await createStudent(learner);
          toast.success("Learner added successfully!");
          navigate("/");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error saving/updating learner:", error);
      }
    } else {
      toast.error("All fields are required!");
    }
  };

  const getStudentData = async (studentId) => {
    const response = await getStudentById(studentId);
    const learner = response.data;
    setFirstName(learner.firstName);
    setLastName(learner.lastName);
    setEmail(learner.email);
    setCategoryId(learner.categoryId);
  };

  useEffect(() => {
    if (id) {
      setTitle("Edit Learner");
      getStudentData(id);
    } else {
      setTitle("New Profile");
    }
  }, [id]);

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    categoryId,
    setCategoryId,
    categories,
    saveOrUpdateStudent,
    title,
  };
};

export default useStudentComponentHook;
