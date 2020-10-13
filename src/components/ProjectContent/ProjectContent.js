// import * as project from '../../data/data';

export default {
    name: 'ProjectContent',
    props: {
        projectName: String,
        projectImage: String,
        projectContent: String,
        isImgLeft: {
            type: Boolean,
            default: function () {
                return true;
            }
        },
       
    },
    data() {
        return {
            order: ['1', '2'],
            
            
        };
    },
    method: {


    },
    created() {
        if (!this.isImgLeft) {
            this.order = ['2', '1'];
        }
        
       
    },

}