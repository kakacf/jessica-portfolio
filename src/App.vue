<template>
  <div class="root-div">
    <div id="app" class="d-flex flex-column justify-content-center">
        <mynavbar></mynavbar>
        <router-view/>
    </div>
  </div>
</template>

<script>
import mynavbar from "./components/Mynavbar/Mynavbar.vue";
// import home from "./views/Home.vue";
// import basicInfo from "./components/BasicInfo/BasicInfo.vue";
// import about from "./components/About/About.vue";
// import project from "./components/Project/Project.vue";
// import contact from "./components/Contact/Contact.vue";


export default {
  name: "App",
  components: {
    mynavbar,
    // home
    // basicInfo,
    // about,
    // project,
    // contact
  },
  mounted() {
        this.$router.push('/');    
  },
};
</script>

<style lang="scss" src="./App.scss"></style>


