const me = {
  heading: "me",
  content:
    "I come from a beautiful harbor city Kaohsiung. I was graduated from National Chiao Tung University and majoring in Cancer Biology.I am quite a fast-learner and adapt well to different environment, no matter what the challenges might be awaiting ahead of me. In my leisure time, I would love to explore new techniques and skills and traveling. Cooking and baking will always be my favorite hobbies when at home.",
};

const work = {
  heading: "Work Experiences",
  experiences: [
    {
      title: "Software Engineer",
      company: "工樂行動科技",
      year: "Mar.2017 - Now",
    },
  ],
};

const education = {
  heading: "Education",
  educations: [
    {
      qualification: "Master's Degree",
      school: "NATIONAL CHIAO TUNG UNIVERSITY 交通大學",
      location: "Hsinchu, Taiwan",
      year: "2011 - 2013",
      major: "M.S., Molecular Medicine and Bioengineering",
    },
    {
      qualification: "Bachelor's Degree",
      school: "KAOHSIUNG MEDICAL UNIVERSITY 高雄醫學大學",
      location: "Kaohsiung, Taiwan",
      year: "2008 - 2011",
      major: "B.S., Biotechnology",
    },
    {
      qualification: "Specialized Degree",
      school: "UCOM Training Center 恆逸資訊",
      // location: "Kaohsiung, Taiwan",
      year: "Jun. 2016 - Oct.2016",
      major: "智慧型手機應用程式設計實務班 (414hr)",
      courses: [
        "手機程式設計基本概論",
        "Java程式語言與物件導向程式設計",
        "Google Android程式實戰演練-Android SDK",
        "iPhone Objective-C程式語言課程",
        "iPhone Swift程式語言課程",
        "iPhone App應用程式開發-使用Objective-C及Swift語言",
        "使用者介面視覺構成解析與優化",
        "JavaScript與jQuery網頁互動實作",
        "HTML5與CSS3網站開發實務",
        "跨平台手機App開發實務",
      ],
    },
  ],
};

export { me, work, education };
