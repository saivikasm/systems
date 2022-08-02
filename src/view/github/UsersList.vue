<template>
  <div>
    <NavBar @setSearchValue="setSearchValue" />
    <b-row>
      <b-col v-for="(user, index) in filteredItems" :key="index">
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
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      users: [],
      searchValue: "",
    };
  },
  async created() {
    this.users = await User.getUsers();
  },
  computed: {
    filteredItems() {
      return this.users.filter((user) => {
        return (
          user.login.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1
        );
      });
    },
  },
  methods: {
    setSearchValue(value) {
      this.searchValue = value;
    },
  },
};
</script>
