<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <router-link
          :to="{ name: 'createNew' }"
          class="btn btn-sm btn-primary float-right"
          >Add New</router-link
        >

        <span v-if="students.data">{{ students.meta.total }}</span>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in students.data" :key="student.id">
              <th scope="row">{{ ++index }}</th>
              <td>{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>
                <a href="" class="btn btn-sm btn-info">Edit</a>
                <button
                  @click="deleteData(student.id)"
                  class="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import useStudents from "../composable/student";
import { onMounted } from "vue";
export default {
  setup() {
    const { students, getStudents, deleteStudent } = useStudents();
    onMounted(getStudents);

    const deleteData = async (id) => {
      if (!window.confirm("Are You Shure Delete?")) {
        return;
      }

      await deleteStudent(id);
      await getStudents();
    };
    return {
      students,
      deleteData,
    };
  },
};
</script>
