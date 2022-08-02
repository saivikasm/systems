<template>
  <div>
    <NavBar @setSearchValue="setSearchValue" />
    <h3>Top Users</h3>
    <b-container fluid>
      <b-row>
        <b-col v-if="!filteredItems.length">Users not found</b-col>
        <b-col cols="2" v-for="(user, index) in filteredItems" :key="index">
          <b-img
            thumbnail
            fluid
            rounded="circle"
            :src="
              user.avatar_url
                ? user.avatar_url
                : 'https://ap1-infinity-user-data.s3.amazonaws.com/13416/avatars/18419/18419/6861timothy-dykes-lhqlddpcsv8-unsplash.jpg'
            "
            alt="Image 1"
          >
          </b-img>

          <h6 class="cursor-pointer" @click="$router.push('/' + user.login)">
            {{ user.login }}
          </h6>
          <b-link :href="user.html_url" target="_blank">github</b-link>
        </b-col>
      </b-row>
    </b-container>
    <FooterBar />
  </div>
</template>
<script>
import User from "@/js/core/user";
import NavBar from "./NavBar.vue";
import FooterBar from "./FooterBar.vue";
export default {
  components: { NavBar, FooterBar },
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
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
