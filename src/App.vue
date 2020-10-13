<template>
  <div class="root-div">
    <div id="app" class="d-flex flex-column justify-content-center">
        <mynavbar></mynavbar>
        <div class="flex-fill j-container">
          <basic-info></basic-info>
          <about class="margin-top-10"></about>
          <!-- <work class="margin-top-10"></work> -->
          <project class="margin-top-10"></project>
          <contact class="margin-top-10"></contact>

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
import project from "./components/Project/Project.vue";
import contact from "./components/Contact/Contact.vue";


export default {
  name: "App",
  components: {
    mynavbar,
    basicInfo,
    about,
    project,
    contact
  },
};
</script>

<style lang="scss" src="./App.scss"></style>


