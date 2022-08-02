<template>
  <div>
    <b-button @click="$router.go(-1)">Back</b-button>
    <b-img
      thumbnail
      fluid
      rounded="circle"
      :src="userDetails.avatar_url"
      alt="Image 1"
    >
    </b-img>

    {{ userDetails.login }}

    <ul>
      <li v-for="(repo, index) in repos" :key="index">
        <b-link :href="repo.html_url" target="_blank"
          >Repo{{ index + 1 }}</b-link
        >
        star {{ repo.stargazers_count }}

        watcher {{ repo.watchers_count }}
      </li>
    </ul>
  </div>
</template>
<script>
import User from "@/js/core/user";
export default {
  data() {
    return {
      userDetails: {},
      repos: [],
    };
  },
  async created() {
    let resp = await User.getUserPageDetails(this.$route.params.username);
    this.repos = resp;
    this.userDetails = resp[0].owner;
  },
};
</script>
