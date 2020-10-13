<template>
  <div class="root-div">
    <div id="app" class="d-flex flex-column justify-content-center">
        <mynavbar></mynavbar>
        <div class="flex-fill j-container">
          <basic-info></basic-info>
          <about class="margin-top-10"></about>
          <work class="margin-top-10"></work>
        </div>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Jessica's portfolio.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import mynavbar from "./components/mynavbar/mynavbar.vue";
import basicInfo from "./components/basicInfo/basicInfo.vue";
import about from "./components/about/about.vue";
import work from "./components/work/work.vue";

export default {
  name: "App",
  components: {
    mynavbar,
    basicInfo,
    about,
    work
  },
};
</script>

<style lang="scss" src="./App.scss"></style>


