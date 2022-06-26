<template>
  <div class="home-div">
    <div>
      <h1>All Registered Users</h1>
    </div>
    <div v-for="user in allusers" :key="user.id" class="user">
      <p>{{ user.fullname }}</p>
    </div>
  </div>
</template>

<script>
import { getAllusers } from "../demoAPIs/users";

export default {
  created() {
    console.log("hello");
    this.getAllRegisteredUsers();
  },
  data() {
    return {
      allusers: [],
    };
  },
  methods: {
    async getAllRegisteredUsers() {
      const response = await getAllusers();
      console.log(response.data);
      this.allusers = response.data.data;
      console.log(this.allusers);
    },
  },
};
</script>
<style>
.home-div {
  text-align: center;
}
</style>
