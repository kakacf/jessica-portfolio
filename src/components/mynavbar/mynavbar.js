import myInfo from '../../data/myInfo.json';

export default {
    name: 'mynavbar',
    data() {
        return {
            // their_name: this.$route.params.name // 未裝router
            fullName: myInfo.fullName,
            about: myInfo.about,
            work: myInfo.work,
            project: myInfo.project,
            contact: myInfo.contact


        };
    },// data()
    methods: {
    
    }// methods
}


