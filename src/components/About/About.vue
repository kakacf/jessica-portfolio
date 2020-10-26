<template>
	<div>
		<b-container fluid id="id-about" ref="aboutRef">
			<div>
				<h2 class="title" v-once>About</h2>
			</div>

			<div>
				<!-- me -->
				<about-content
					:is-simple-tpl="true"
					:title="me.heading"
					:content="me.content"/>
				<!-- work experiences -->
				<about-content :is-simple-tpl="false" :title="work.heading">
					<div
						class="b-col"
						v-for="(experience, index) in work.experiences"
						:key="index">
						<div class="font-16">
							<span><b>{{ experience.title }}</b> <b class="company"> - {{ experience.company }}</b></span>
						</div>
						<div class="font-14">
							<span>{{ experience.year }}</span>
						</div>

						<div class="font-14" v-for="(content, key, index) in experience.contents" :key="index">
							<span><b>{{ key }}</b>{{ content }}</span>
						</div>
						
						<hr />
					</div>
						
				</about-content>
				<!-- education -->
				<about-content
					:is-simple-tpl="false"
					:title="education.heading">
					<div class="b-col">
						<div
							v-for="(education, index) in education.educations"
							:key="index">
							<div class="font-16">
								<span><b>{{ education.qualification }} - {{ education.school }}</b></span>
							</div>
							<div class="font-14">
								<span>{{ education.location }} {{ education.year }}</span>
							</div>
							<div class="font-14">
								<span>{{ education.major }}</span>
							</div>
							<hr v-if="!education.courses" />
							
							<div v-if="education.courses" class="font-14">
								<div
									v-for="(course, key, index) in education.courses"
									:key="index">
									<span>{{ key + 1 }}. {{ course }}</span>
								</div>
							</div>
						</div>
					</div>
				</about-content>
			</div>
		</b-container>
	</div>
</template>

<script src="./About.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./About.scss" scoped></style>