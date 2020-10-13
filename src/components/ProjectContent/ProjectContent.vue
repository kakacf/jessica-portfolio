<template>
        <b-row style="margin: 20px;">
            <b-col sm="5" align-v="center" order-xs="1" :order-md="order[0]" >
                <div>
                    <!-- https://picsum.photos/400/400/?image=20 -->
                    <b-img :src="require(`../../assets/image/${projectImage}`)" fluid alt="Responsive image"></b-img>
                </div>
            </b-col>
            <!-- style="border: 1px solid black; " -->
            <b-col sm="7" align-v="center" order-xs="2" :order-md="order[1]" >
                    <div style="width: 100%; height: auto;  margin: 0px auto;">
                        <b-card-body>
                            <b-card-text>
                                <h4 style="margin-left: -2px;">{{ projectName }}</h4>
                                <div class="projectContent">
                                    {{ projectContent }}
                                </div>
                            </b-card-text>
                        </b-card-body>
                    </div>
                    <!-- style="width: 500px; height: 200px; border: 1px solid black; text-align: center; margin: auto;" -->
                <!-- <div style="width: 100%; height: 300px; border: 1px solid black; text-align: center;">
                </div> -->
            </b-col>
        </b-row>
</template>

<script src="./ProjectContent.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./ProjectContent.scss" scoped></style>