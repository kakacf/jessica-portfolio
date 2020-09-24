<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="#" v-once>{{fullName}}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarTogglerDemo03" 
                    aria-controls="navbarTogglerDemo03" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#id-about">{{about}}</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#id-work">{{work}}</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="#id-project">{{project}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#id-contact">{{contact}}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
</template>


<!-- Add "scoped" attribute to limit CSS to this component only --> 
<script src="./mynavbar.js"></script>
<style lang="scss" src="./mynavbar.scss" scoped></style>