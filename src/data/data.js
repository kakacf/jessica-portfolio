const info = {
  name: 'Jessica',
  fullName: 'Jessica Wang',
  about: 'About',
  work: 'Work',
  project: 'Project',
  contact: 'Contact',
  job: 'Front-End Developer'

};


const me = {
  heading: 'me',
  content:
    'I come from a beautiful harbor city Kaohsiung. I was graduated from National Chiao Tung University and majoring in Cancer Biology.I am quite a fast-learner and adapt well to different environment, no matter what the challenges might be awaiting ahead of me. In my leisure time, I would love to explore new techniques and skills and traveling. Cooking and baking will always be my favorite hobbies when at home.',
};

const work = {
  heading: 'Work Experiences',
  experiences: [
    {
      title: 'Software Engineer',
      company: '悅康科技',
      year: 'Oct.2017 - Now',
      contents: {
        // 提供醫療人員居家訪視之排班接單紀錄功能，訪視時提供病患住家定位服務，訪視完畢記錄病情簽名等功能。
        'Homedical 醫生到我家：': '使用 AngularJS 框架撰寫，資料庫串接 Firebase。Web部分：醫療人員個人管理後台、營運中心管理後台。App部分：醫療人員操作介面。',
        '血液透析系統：': '使用 AngularJS 框架撰寫，主要負責前端畫面及邏輯，配合個不同醫院需求撰寫不同專案。'
      }
    },
    {
      title: 'Software Engineer',
      company: '工樂行動科技',
      year: 'Mar.2017 - Sep.2017',
      contents: {
        'Web：': '使用 Javascript 撰寫管理網站平台，連接後台Api  (AJAX)，串接過 Google Map Api，使用過 Chart.js 及 Google Charts 做圖表呈現。',
        'App：': '使用 Swift3 撰寫 iOS App，UI畫面(hard code)，串接後台，調用手機相機，掃描並解析 QRCode，偵測使用者Current Location。',
        'Design：': 'Sketch、Zeplin'
      }
    },
    {
      title: 'Research Assistant',
      company: '中央研究院 基因體中心',
      year: 'Jun.2014 - Apr.2016',
      contents: {
        '': '循環腫瘤細胞偵測相關研究',
      }
    }
  ],
};

const education = {
  heading: 'Education',
  educations: [
    {
      qualification: 'Master\'s Degree',
      school: 'NATIONAL CHIAO TUNG UNIVERSITY 交通大學',
      location: 'Hsinchu, Taiwan',
      year: '2011 - 2013',
      major: 'M.S., Molecular Medicine and Bioengineering',
    },
    {
      qualification: 'Bachelor\'s Degree',
      school: 'KAOHSIUNG MEDICAL UNIVERSITY 高雄醫學大學',
      location: 'Kaohsiung, Taiwan',
      year: '2008 - 2011',
      major: 'B.S., Biotechnology',
    },
    {
      qualification: 'Specialized Degree',
      school: 'UCOM Training Center 恆逸資訊',
      year: 'Jun. 2016 - Oct.2016',
      major: '智慧型手機應用程式設計實務班 (414hr)',
      courses: [
        '手機程式設計基本概論',
        'Java程式語言與物件導向程式設計',
        'Google Android程式實戰演練-Android SDK',
        'iPhone Objective-C程式語言課程',
        'iPhone Swift程式語言課程',
        'iPhone App應用程式開發-使用Objective-C及Swift語言',
        '使用者介面視覺構成解析與優化',
        'JavaScript與jQuery網頁互動實作',
        'HTML5與CSS3網站開發實務',
        '跨平台手機App開發實務',
      ],
    },
  ],
};


const project = {
  items: [
    {
      projectName: 'Homedical',
      projectImage: 'homedical.png',
      projectContent: 'About',
    }
  ]
  
};



export { info, me, work, education, project };
