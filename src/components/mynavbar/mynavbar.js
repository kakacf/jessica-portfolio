import * as mynavbar from '../../data/data';

export default {
    name: 'Mynavbar',
    data() {
        return {
            info: {}

        };
    },
    methods: {
    
    },
    created() {
        this.info = mynavbar.info

    }
}


