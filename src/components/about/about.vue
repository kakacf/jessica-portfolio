<template>
  <div>
    <div id="id-about" class="container-fluid">
      <div>
        <h3 class="title">About</h3>
      </div>

      <div class="container">
        <div v-for="(about, index) in aboutData" :key="index">
          <AboutItem :heading="about.heading" :content="about.content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./about.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./about.scss" scoped></style>