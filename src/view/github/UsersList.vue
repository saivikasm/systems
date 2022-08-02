<template>
  <div>
    <b-row>
      <b-col v-for="(user, index) in users" :key="index">
        <b-img
          thumbnail
          fluid
          rounded="circle"
          :src="user.avatar_url"
          alt="Image 1"
        >
        </b-img>

        <b-button @click="$router.push('/' + user.login)">
          {{ user.login }}</b-button
        >
      </b-col></b-row
    >
  </div>
</template>
<script>
import User from "@/js/core/user";
export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    this.users = await User.getUsers();
  },
};
</script>
