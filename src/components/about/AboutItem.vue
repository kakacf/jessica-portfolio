<template>
  <div>
    <b-row>
      <b-col cols="1">
        <div class="dot"></div>
      </b-col>
      <b-col cols="11">
        <p>
          <b>{{heading}}</b>
        </p>
        {{content}}
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    content: String
  }
};
</script>

<style lang="scss" scoped>
.dot {
  position: static;
}

.dot:before {
  content: " ";
  width: 9px;
  height: 9px;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  background-color: #a8a8a8;
  margin-top: 10px;
  margin-left: 25px; // 0.5px
  z-index: 1;
}

.dot:after {
  content: "";
  width: 1px;
  position: absolute;
  height: 80%;
  background-color: #979797;
  display: block;
  margin-left: 29px; // 4.5px
  z-index: 0;
}
</style>