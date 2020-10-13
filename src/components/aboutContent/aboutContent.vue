<template>
    <div>
        <b-row>
            <b-col cols="1">
                <div class="dot"></div>
            </b-col>
            <b-col cols="6">
                <span class="title"><b>{{title}}</b></span>
            </b-col>
            
        </b-row>
        <b-row>
            <b-col cols="1">
                <div class="line" ></div>
            </b-col>
            <b-col cols="11" v-if="isSimpleTpl">
                <span>{{content}}</span>
                <p></p>
            </b-col>
            <b-col cols="11" v-if="!isSimpleTpl">
                <slot></slot>
                <p></p>
            </b-col>
            <b-col></b-col>
        </b-row>
    </div>
</template>

<script src="./AboutContent.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./AboutContent.scss" scoped></style>