<template>
    <div>
        <div id="id-project" class="container-fluid">
            <div >
                <h3 class="title">{{title}}</h3>
            </div>
            <div class="d-flex flex-column outer-div">

                <div class="row" style="margin: 20px;">
                    <div class="col-sm-5  align-self-center" >
                        <div>
                            <b-img src="https://picsum.photos/400/400/?image=20" fluid alt="Responsive image"></b-img>

                        </div>
                    </div>

                    <!-- style="border: 1px solid black; " -->
                    <div class="col-sm-7 align-self-center" >
                           <div style="width: 100%; height: auto;  margin: 0px auto;">
                                <b-card-body>
                                    <b-card-text>
                                        <h3 style="margin-left: -2px;">Horizontal Card</h3>
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                        
                                    </b-card-text>
                                </b-card-body>

                           </div>
                           <!-- style="width: 500px; height: 200px; border: 1px solid black; text-align: center; margin: auto;" -->
                       <!-- <div style="width: 100%; height: 300px; border: 1px solid black; text-align: center;">
                       </div> -->
                    </div>
                    
                </div>
            
               
            </div>

        </div>
    </div>
</template>

<script src="./project.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./project.scss" scoped></style>