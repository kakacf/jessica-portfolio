<template>
  <div class="row">
    <div class="col-1 row">
      <div class="dot"></div>
    </div>
    <div class="col-11">
      <p>
        <b>{{heading}}</b>
      </p>
      {{content}}
    </div>
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
  text-align: right;
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
  height: 80%;
  background-color: #979797;
  display: block;
  margin-left: 29px; // 4.5px
  top: 10px;
  z-index: 0;
}
</style>