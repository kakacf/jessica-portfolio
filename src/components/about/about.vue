<template>
  <div>
    <div id="id-about" class="container-fluid">
      <div>
        <h3 class="title" v-once>About</h3>
      </div>

      <div class="container">
        <!-- me -->
        <about-content
          :is-simple-tpl="true"
          :title="me.heading"
          :content="me.content"
        />
        <!-- work experiences -->
        <about-content :is-simple-tpl="false" :title="work.heading">
          <div
            class="col"
            v-for="(experience, index) in work.experiences"
            :key="index"
          >
            <div class="font-16">
              <span
                ><b>{{ experience.title }} @ {{ experience.company }}</b></span
              >
            </div>
            <div class="font-14">
              <span>{{ experience.year }}</span>
            </div>
          </div>
        </about-content>
        <!-- education -->
        <about-content
          v-bind:is-simple-tpl="false"
          v-bind:title="education.heading"
        >
          <div class="col">
            <div
              v-for="(education, index) in education.educations"
              :key="index"
            >
              <div class="font-16">
                <span
                  ><b
                    >{{ education.qualification }} @{{ education.school }}</b
                  ></span
                >
              </div>
              <div class="font-14">
                <span>{{ education.location }} {{ education.year }}</span>
              </div>
              <div class="font-14">
                <span>{{ education.major }}</span>
              </div>
              <hr v-if="!education.courses" />
              <br />
              <div v-if="education.courses" class="font-14">
                <div
                  v-for="(course, key, index) in education.courses"
                  :key="index"
                >
                  <span>{{ key + 1 }}. {{ course }}</span>
                </div>
              </div>
            </div>
          </div>
        </about-content>
      </div>
    </div>
  </div>
</template>

<script src="./about.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./about.scss" scoped></style>