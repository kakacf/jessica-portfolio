<template>
   
        <div class="row" style="margin: 20px; float: left;">
            <div class="col-sm-5  align-self-center" >
                <div>
                    <!-- https://picsum.photos/400/400/?image=20 -->
                    <b-img :src="require(`../../assets/image/${projectImage}`)" fluid alt="Responsive image"></b-img>
                </div>
            </div>
            <!-- style="border: 1px solid black; " -->
            <div class="col-sm-7 align-self-center" >
                    <div style="width: 100%; height: auto;  margin: 0px auto;">
                        <b-card-body>
                            <b-card-text>
                                <h3 style="margin-left: -2px;">{{ projectName }}</h3>
                                <div class="projectContent">
                                    {{ projectContent }}
                                </div>
                            </b-card-text>
                        </b-card-body>
                    </div>
                    <!-- style="width: 500px; height: 200px; border: 1px solid black; text-align: center; margin: auto;" -->
                <!-- <div style="width: 100%; height: 300px; border: 1px solid black; text-align: center;">
                </div> -->
            </div>
        </div>
        
    
</template>

<script src="./ProjectContent.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./ProjectContent.scss" scoped></style>