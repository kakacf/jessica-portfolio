import * as basicInfo from '../../data/data';

export default {
    name: 'BasicInfo',
    data() {
        return {
           info: {},
        };
    },
    methods: {

    },
    created() {
        this.info = basicInfo.info;
        
    },
    mounted() {
        
    },
}
