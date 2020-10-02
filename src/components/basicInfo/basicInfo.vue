<template>
    <div>
        <div id="id-basicInfo" class="container-fluid">
            <img class="background-img" src="../../assets/image/british-museum2.jpg">
            <img class="rounded-circle img-fluid avatar-img" src="../../assets/image/avatar2.jpg">
            <p class="title" v-once>Hi, I am {{ info.name }}</p>
            <p class="subTitle" v-once>{{ info.job }}</p>
        </div> 
    </div>
</template>

<script src="./BasicInfo.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./BasicInfo.scss" scoped></style>