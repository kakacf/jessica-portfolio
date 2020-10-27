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
      year: 'Oct.2017 - Present',
      contents: {
        // 提供醫療人員居家訪視之排班接單紀錄功能，訪視時提供病患住家定位服務，訪視完畢記錄病情簽名等功能。
        'Homedical 醫生到我家：': 'AngularJS, HTML, CSS, Firebase',
        '血液透析系統：': 'AngularJS, HTML, CSS, MongoDB, ECharts'
      }
    },
    {
      title: 'Software Engineer',
      company: '工樂行動科技',
      year: 'Mar.2017 - Sep.2017',
      contents: {
        'Web：': 'Javascript, AJAX, Google Map API, Chart.js, Google Charts',
        'App：': 'Swift3, Camera, QRCode, UI-hard code',
        'Design：': 'Sketch, Zeplin'
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
      projectName: 'Homedical 醫生到我家 | Web / App',
      projectImage: 'homedical.png',
      projectContent: 'Homedical 是一個 "居家照護醫療" 系統。Web 部分：醫療人員個人管理後台、營運中心管理後台。App部分：醫療人員操作介面。醫療院所使用 Web 版的中心管理後台，約診、排班、派單給醫療人員，全方位掌控醫療人員出勤狀況，地圖定位，所有病情資料的紀錄等功能。醫療人員則使用手機版 App ，提供定位、撥電話、接單、病情紀錄、簽名、行事曆等功能。全系統使用Firebase做資料庫使用。',
      isImgLeft: true,
    },
    {
      projectName: '血液透析系統 | Web / App',
      projectImage: 'dialysissystem.png',
      projectContent: '根據 "血液透析" 醫療流程規劃給專業醫療人員使用的系統，配合設計師使用 Angular material 刻畫前端畫面，撰寫前端操作使用邏輯，與後台串接 Api，配合不同院所需求客制個別專案。',
      isImgLeft: false,
    },
    {
      projectName: 'PaPaLewis 管理後台 | Web',
      projectImage: 'papalewis.png',
      projectContent: '咖啡店後台管理系統，純 JavaScript，無 Framework。提供商家資料、消費者、咖啡豆等資料管理。',
      isImgLeft: true,
    },
    {
      projectName: 'ismartboss 發票掃描 | iOS App',
      projectImage: 'ismartboss.png',
      projectContent: '掃描發票 QRCode，解析 QRCode 內容，紀錄消費清單。',
      isImgLeft: false,
    },
    {
      projectName: 'Travobook 旅書 | Android App',
      projectImage: 'travobook.png',
      projectContent: '旅遊紀錄，可拍照筆記心情。',
      isImgLeft: true,
    },
    {
      projectName: 'Instagrom | iOS App',
      projectImage: 'instagrom.png',
      projectContent: '仿照 Instagram，可拍照筆記。',
      isImgLeft: false,
    },
  ]
  
};

const contact = {
  
    title: 'Contact',
    message: 'Please feel free to contact me.',
    email: 'chienfang0611@gmail.com',
    phone: '+886933302134',
    github: 'GitHub'
  


};



export { info, me, work, education, project, contact };
