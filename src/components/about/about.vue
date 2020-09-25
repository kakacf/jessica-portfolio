<template>
  <div>
    <div id="id-about" class="container-fluid">
      <div>
        <h3 class="title" v-once>{{ title }}</h3>
      </div>

      <div class="container">
        <about-content
          v-bind:is-simple-tpl="true"
          v-bind:title="subTitleMe"
          v-bind:content="contentMe"
        ></about-content>

        <about-content
          v-bind:is-simple-tpl="false"
          v-bind:title="subTitleWorkExperiences"
        >
          <div class="col">
            <div class="font-16">
              <span><b>Software Engineer @ 工樂行動科技</b></span>
            </div>
            <div class="font-14">
              <span>Mar.2017 - Now</span>
            </div>
          </div>
        </about-content>

        <about-content
          v-bind:is-simple-tpl="false"
          v-bind:title="subTitleEducation"
        >
          <div class="col">
            <div class="font-16">
              <span
                ><b
                  >Master's Degree @{{ contentEducation.masterSchool }}</b
                ></span
              >
            </div>
            <div class="font-14">
              <span>{{ contentEducation.masterDuration }}</span>
            </div>
            <div class="font-14">
              <span>{{ contentEducation.masterTitle }}</span>
            </div>
            <hr />
            <div class="font-16">
              <span
                ><b
                  >Bachelor's Degree @{{
                    contentEducation.undergraduateSchool
                  }}</b
                ></span
              >
            </div>
            <div class="font-14">
              <span>{{ contentEducation.undergraduateDuration }}</span>
            </div>
            <div class="font-14">
              <span>{{ contentEducation.undergraduateTtile }}</span>
            </div>
            <hr />
            <div class="font-16">
              <span
                ><b
                  >Specialized Degree @{{ contentEducation.specialSchool }}</b
                ></span
              >
            </div>
            <div class="font-14">
              <span>{{ contentEducation.specialDuration }}</span>
            </div>
            <div class="font-14">
              <span>{{ contentEducation.specialTitle }}</span>
            </div>
            <p></p>
            <div class="font-14">
              <div v-for="(item, key, index) in ucomArray" :key="index">
                <span>{{ key + 1 }}. {{ item }}</span>
              </div>
            </div>
          </div>
        </about-content>

        <!-- <about-content v-bind:is-simple-tpl="true" v-bind:title="subTitleSkill" v-bind:content="contentSkill"></about-content> -->
      </div>
    </div>
  </div>
</template>

<script src="./about.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./about.scss" scoped></style>