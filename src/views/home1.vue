

<template>
    <div class="flex-fill j-container">
        <basic-info></basic-info>
        <about1 class="margin-top-10"></about1>
        <!-- <work class="margin-top-10"></work> -->
        <project class="margin-top-10"></project>
        <contact class="margin-top-10"></contact>
    </div>
</template>




<script>
import basicInfo from "../components/basic-info/basic-info.vue";
import about1 from "../components/about1/about1.vue";
import project from "../components/project1/project1.vue";
import contact from "../components/contact/contact.vue";

export default {
  name: 'Home',
  components: {
    basicInfo,
    about1,
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


