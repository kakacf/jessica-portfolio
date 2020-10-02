import * as project from '../../data/data';
import projectContent from '../../components/ProjectContent/ProjectContent.vue';

export default {
    name: 'Project',
    components: {
        projectContent
    },
    data() {
        return {
            info: {},
            title: '',
            image: '',
            content: ''
        };
    },
    method: {


    },
    created() {
        this.info = project.info;
        this.title = 'Homedical';
        this.image = 'homedical.png';
        this.content = 'k;jew;jefjwlekfldwswswswfdsdscsdcsdcmklwmfjefjwlekfldwswswswfdsdscsdcsdcmklwmfjefjwlekfldwswswswfdsdscsdcsdcmklwmfjefjwlekfldwswswswfdsdscsdcsdcmklwmf';
    },

}