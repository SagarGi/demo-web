<template>
  <div class="signup-div">
    <div>
      <h1>Dummy User Registration</h1>
    </div>
    <label>Fullname:</label><br />
    <input type="text" v-model="username" /><br />
    <label>Email:</label><br />
    <input type="email" v-model="email" /><br />
    <button @click="registerUser">Register</button>
  </div>
</template>

<script>
import { registerUser } from "../demoAPIs/users";
export default {
  name: `Register`,
  data() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    async registerUser() {
      const newUser = {
        fullname: this.username,
        email: this.email,
      };
      const response = await registerUser(newUser);
      if (response.status !== 200) {
        console.log("Post Method Failed !!");
      } else {
        console.log(response);
      }
    },
  },
};
</script>

<style>
.signup-div {
  text-align: center;
}
</style>
