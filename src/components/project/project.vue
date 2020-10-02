<template>
    <div>
        <div id="id-project" class="container-fluid">
            <div >
                <h3 class="title">{{ info.project }}</h3>
            </div>
            <div class="d-flex flex-column outer-div">


                <project-content :project-name="title" :project-image="image" :project-content="content">

                </project-content>

                <!-- <div class="row" style="margin: 20px;">
                    <div class="col-sm-5  align-self-center" >
                        <div>
                            <b-img :src="require('../../assets/image/homedical.png')" fluid alt="Responsive image"></b-img>
                        </div>
                    </div>
                    <div class="col-sm-7 align-self-center" >
                           <div style="width: 100%; height: auto;  margin: 0px auto;">
                                <b-card-body>
                                    <b-card-text>
                                        <h3 style="margin-left: -2px;">Homedical</h3>
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </b-card-text>
                                </b-card-body>
                           </div>
                    </div>
                </div> -->


            </div>
        </div>
    </div>
</template>

<script src="./Project.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Project.scss" scoped></style>