<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">

      <b-navbar-brand href="#">{{ info.fullName }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item href="#id-about">{{ info.about }}</b-nav-item>
          <b-nav-item href="#id-project">{{ info.project }}</b-nav-item>
          <b-nav-item href="#id-contact" v-b-toggle.id-contact v-on:click="$emit('opencontact')">{{ info.contact }}</b-nav-item>
        </b-navbar-nav>

        
      </b-collapse>
    </b-navbar>

    <!-- <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#" v-once>{{ info.fullName }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarTogglerDemo03" 
                aria-controls="navbarTogglerDemo03" 
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#id-about">{{ info.about }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#id-project">{{ info.project }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#id-contact" v-b-toggle.id-contact>{{ info.contact }}</a>
                </li>
            </ul>
        </div>
    </nav> -->


  </div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only --> 
<script src="./Mynavbar.js"></script>
<style lang="scss" src="./Mynavbar.scss" scoped></style>