import myInfo from '../../data/myInfo.json';

export default {
    name: 'basicInfo',
    data() {
        return {
           name: myInfo.name,
           subTitle: myInfo.job
        };
    },
    methods: {

    }
}
