<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto justify-center">
          <form @submit.prevent="saveStudent">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="name"
                v-model="form.name"
              />

              <span v-if="errors.name" class="text-danger">{{
                errors.name[0]
              }}</span>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="form.email"
              />

              <span v-if="errors.email" class="text-danger">{{
                errors.email[0]
              }}</span>
            </div>

            <div class="form-group">
              <label for="phone">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                aria-describedby="phone"
                placeholder="Enter phone"
                v-model="form.phone"
              />
              <span v-if="errors.phone" class="text-danger">{{
                errors.phone[0]
              }}</span>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import useStudents from "@/composable/student";
export default {
  setup() {
    const form = reactive({
      name: "",
      email: "",
      phone: "",
    });

    const { errors, storeStudent } = useStudents();

    const saveStudent = async () => {
      await storeStudent({ ...form });
    };

    return {
      form,
      errors,
      saveStudent,
    };
  },
};
</script>
<style></style>
