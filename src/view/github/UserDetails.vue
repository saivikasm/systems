<template>
  <div>
    <NavBar :showSearch="false" @setSearchValue="setSearchValue" />
    <div class="d-flex p-2 bd-highlight">
      <b-button class="float-left" @click="$router.go(-1)">Back</b-button>
    </div>

    <b-img
    width="300"
    height="300"
      thumbnail
      fluid
      rounded="circle"
      :src="
        userDetails.avatar_url
          ? userDetails.avatar_url
          : 'https://ap1-infinity-user-data.s3.amazonaws.com/13416/avatars/18419/18419/6861timothy-dykes-lhqlddpcsv8-unsplash.jpg'
      "
      alt="Image 1"
    >
    </b-img>
    <div>{{ userDetails.login }}</div>

    <ul>
      <li v-for="(repo, index) in repos" :key="index">
        <b-link :href="repo.html_url" target="_blank"
          >Repo{{ index + 1 }}</b-link
        >
        star {{ repo.stargazers_count }}

        watcher {{ repo.watchers_count }}
      </li>
    </ul>
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
