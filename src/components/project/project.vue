<template> 
    <div>
        <b-container fluid id="id-project" ref="projectRef">
            <div >
                <h2 class="title">{{ info.project }}</h2>
            </div>
            <div class="d-flex flex-column outer-div" v-for="(item, index) in projectItems" :key="index">

                <project-content 
                    :project-name="item.projectName" 
                    :project-image="item.projectImage" 
                    :project-content="item.projectContent"
                    :is-img-left="item.isImgLeft">
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
                                        <h2 style="margin-left: -2px;">Homedical</h2>
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
        </b-container>
    </div>
</template>

<script src="./project.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./project.scss" scoped></style>