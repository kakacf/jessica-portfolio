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
        goToHello: function () {
            this.$router.push('/projectimg');

        }


    },
    created() {
        if (!this.isImgLeft) {
            this.order = ['2', '1'];
        }
        
       
    },
    mounted() {
        
        
    },
}