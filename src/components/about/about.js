import aboutContent from "../../components/aboutContent/aboutContent.vue";
import myInfo from '../../data/myInfo.json';
import about from '../../data/about.json';

export default {
    name: 'about',
    components: {
        aboutContent
    },
    data() {
        return {
            title: myInfo.about,
            subTitleMe : about.subTitleMe,
            contentMe: about.contentMe,
            subTitleWorkExperiences: about.subTitleWorkExperiences,
            // contentWorkExperiences: about.contentWorkExperiences,
            subTitleEducation : about.subTitleEducation,
            // contentEducation: about.contentEducation,
            subTitleSkill : about.subTitleSkill,
            contentSkill: about.contentSkill,

            contentEducation: {
                masterSchool: 'NATIONAL CHIAO TUNG UNIVERSITY 交通大學',
                masterDuration: 'Hsinchu, Taiwan  2011 - 2013',
                masterTitle: 'M.S., Molecular Medicine and Bioengineering',
                undergraduateSchool: 'KAOHSIUNG MEDICAL UNIVERSITY 高雄醫學大學',
                undergraduateDuration: 'Kaohsiung, Taiwan  2008 - 2011',
                undergraduateTtile: 'B.S., Biotechnology',
                specialSchool: 'UCOM Training Center 恆逸資訊',
                specialTitle: '智慧型手機應用程式設計實務班 (414hr)',
                specialDuration: 'Jun. 2016 - Oct.2016'
            },
            ucomArray: [
                '手機程式設計基本概論',
                'Java程式語言與物件導向程式設計',
                'Google Android程式實戰演練-Android SDK',
                'iPhone Objective-C程式語言課程',
                'iPhone Swift程式語言課程',
                'iPhone App應用程式開發-使用Objective-C及Swift語言',
                '使用者介面視覺構成解析與優化',
                'JavaScript與jQuery網頁互動實作',
                'HTML5與CSS3網站開發實務',
                '跨平台手機App開發實務'
            ],
        };
    },
    method: {


    }

}