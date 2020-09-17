<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="#">Jessica Wang</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarTogglerDemo03" 
                    aria-controls="navbarTogglerDemo03" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <!-- <li class="nav-item active">
                        <a class="nav-link" href="#id-basicInfo">
                        Home 
                        <span class="sr-only">(current)</span></a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="#id-about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#id-work">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#id-contact">Contact</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li> -->
                </ul>
            </div>
        </nav>
    </div>
</template>

<script src="./mynavbar.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./mynavbar.scss" scoped></style>