

<template>
    <div class="flex-fill j-container">
        <basic-info></basic-info>
        <about class="margin-top-10"></about>
        <!-- <work class="margin-top-10"></work> -->
        <project class="margin-top-10"></project>
        <contact class="margin-top-10"></contact>
    </div>
</template>




<script>
import basicInfo from "../components/BasicInfo/BasicInfo.vue";
import about from "../components/About/About.vue";
import project from "../components/Project/Project.vue";
import contact from "../components/Contact/Contact.vue";

export default {
  name: 'Home',
  components: {
    basicInfo,
    about,
    project,
    contact
  },

  data() {
    return {
    
    };
  },
  created() {

  }

  
};
</script>


