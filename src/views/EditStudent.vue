<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto justify-center">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="name"
                v-model="student.name"
              />

              <span v-if="errors.name" class="text-danger">{{ errors.name[0] }}</span>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="student.email"
              />

              <span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
            </div>

            <div class="form-group">
              <label for="phone">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                aria-describedby="phone"
                placeholder="Enter phone"
                v-model="student.phone"
              />
              <span v-if="errors.phone" class="text-danger">{{ errors.phone[0] }}</span>
            </div>

            <button type="submit" class="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useStudents from "../composable/student";
import { onMounted } from "vue";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { student, errors, getSingleStudent } = useStudents();
    onMounted(getSingleStudent(props.id));
    return {
      student,
      errors,
    };
  },
};
</script>
<style lang=""></style>
