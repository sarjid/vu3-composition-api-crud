import { ref } from "vue";
import axios from "axios";
export default function useStudents() {
  const students = ref([]);

  const getStudents = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/student");
    students.value = response.data;
  };

  const deleteStudent = async (id) => {
    await axios.delete("http://127.0.0.1:8000/api/student/" + id);
   
  };

  return {
    students,
    getStudents,
    deleteStudent,
  };
}
