<template>
  <div class="root-div">
    <div id="app" class="d-flex flex-column justify-content-center" >
        <div>
          <my-navbar></my-navbar>
        </div>
        <div>
          <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import myNavbar from "./components/my-navbar/my-navbar.vue";


export default {
  name: "App",
  components: {
    myNavbar,
  },
  mounted() {
        this.$router.push('/');    
  },
};
</script>

<style lang="scss" src="./app.scss"></style>


