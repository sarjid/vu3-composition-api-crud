import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default function useStudents() {
  const students = ref([]);
  const student = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getStudents = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/student");
    students.value = response.data;
  };

  const deleteStudent = async (id) => {
    await axios.delete("http://127.0.0.1:8000/api/student/" + id);
  };

  const storeStudent = async (data) => {
    // errors.value = "";
    try {
      await axios.post("http://127.0.0.1:8000/api/student", data);
      await router.push({ name: "about" });
    } catch (e) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }
  };

  const getSingleStudent = async (id) => {
    let response = await axios.get("http://127.0.0.1:8000/api/student/" + id);
    student.value = response.data.data;
  };

  const updateStudent = async (id) => {
    errors.value = "";
    try {
      await axios.put("http://127.0.0.1:8000/api/student/" + id, student.value);
      await router.push({ name: "about" });
    } catch (e) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors;
      }
    }
  };

  return {
    students,
    errors,
    student,
    getStudents,
    deleteStudent,
    storeStudent,
    getSingleStudent,
    updateStudent,
  };
}
