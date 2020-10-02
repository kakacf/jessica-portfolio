<template>
  <div class="root-div">
    <div id="app" class="d-flex flex-column justify-content-center">
        <mynavbar></mynavbar>
        <div class="flex-fill j-container">
          <basic-info></basic-info>
          <about class="margin-top-10"></about>
          <!-- <work class="margin-top-10"></work> -->
          <project class="margin-top-10"></project>
        </div>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Jessica's portfolio.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import mynavbar from "./components/Mynavbar/Mynavbar.vue";
import basicInfo from "./components/BasicInfo/BasicInfo.vue";
import about from "./components/About/About.vue";
// import work from "./components/work/work.vue";
import project from "./components/Project/Project.vue";


export default {
  name: "App",
  components: {
    mynavbar,
    basicInfo,
    about,
    // work,
    project,
  },
};
</script>

<style lang="scss" src="./App.scss"></style>


