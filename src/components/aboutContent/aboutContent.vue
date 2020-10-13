<template>
    <div>
        <div class="row">
            <div class="col-1">
                <div class="dot"></div>
            </div>
            <div class="col-6">
                <span class="title"><b>{{title}}</b></span>
            </div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col-1">
                <div class="line" ></div>
            </div>


            <div v-if="isSimpleTpl" class="col-11" >
                <span>{{content}}</span>
                <p></p>
            </div>


            <div v-if="!isSimpleTpl" class="col-11" >
                <slot></slot>
                <p></p>
            </div>



            <div class="col"></div>
        </div>
    </div>
</template>

<script src="./aboutContent.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./aboutContent.scss" scoped></style>