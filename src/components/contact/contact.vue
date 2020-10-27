<template>
    <div>
        <!-- <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>  width="410px" -->
        <!-- v-on:opencontact="open"  v-model="isSidebarOpen"-->
        <b-sidebar id="id-contact" ref="contactRef" :title="info.title" backdrop bg-variant="dark" text-variant="light" shadow width="410px" height="100%">
            <div class="px-3 py-2 contactArea">
                <!-- src="https://picsum.photos/500/500/?image=54" thumbnail -->
                <b-img :src="require(`../../assets/image/typewriter.jpg`)" class="contactImage" fluid-grow></b-img>

                <div class="contactText">
                    <div class="message-div">
                        <span class="text-wrapper">
                            <span class="letters">{{ info.message }}</span>
                        </span>
                    </div>
                    <!-- <div class="contact__message anim-typewriter">
                    {{ info.message }}
                    </div> -->
                    <ul class="contact__ul">
                        <li class="contact__li" @click="sendEmail">{{ info.email }}</li>
                        <li class="contact__li"><a :href="`tel:${info.phone}`">{{ info.phone }}</a></li>
                        <li class="contact__li"><a href="https://github.com/kakacf">{{ info.github }}</a></li>
                    </ul>
                </div>
            </div>
        </b-sidebar>


        <!-- <b-container fluid id="id-contact" >
            <img class="background-img" src="../../assets/image/british-museum2.jpg">
            <img class="rounded-circle img-fluid avatar-img" src="../../assets/image/avatar2.jpg">
            <p class="title" v-once>Hi, I am {{ info.name }}</p>
            <p class="subTitle" v-once>{{ info.job }}</p>
        </b-container>  -->
    </div>

</template>

<script src="./contact.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./contact.scss" scoped></style>