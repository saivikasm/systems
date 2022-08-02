<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark">
      <b-navbar-brand>Github Userboard</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="m-auto">
          <b-nav-form>
            <b-form-input
              type="text"
              size="sm"
              v-model="searchValue"
              class="mr-sm-2"
              placeholder="Search"
              @input="$emit('setSearchValue', searchValue)"
            ></b-form-input>
           
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
};
</script>
