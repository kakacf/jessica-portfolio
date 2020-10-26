import * as mynavbar from '../../data/data';

export default {
    name: 'Mynavbar',
    data() {
        return {
            info: {},
            

        };
    },
    methods: {
        goToHome: function (hashTag, refName) {
            if (this.$route.name === 'projectimg') {
                if (hashTag !== '#id-contact') {
                    // this.$bus.$emit(refName + 'Anchor', refName);
                    this.$router.push({ path: '/', hash: hashTag });
                } else {
                    // sidebar toggle
                    this.$root.$emit('bv::toggle::collapse', 'id-contact');
                }
                return;
            }
            if (hashTag !== '#id-contact') {
                // event bus 最好寫在 beforeDestroy，這樣下一頁 component 的 $on 註冊完才接收得到
                // 這裡寫在 $nextTick dom 完成也可以
                this.$nextTick(() => {
                    this.$bus.$emit(refName + 'Anchor', refName);
                });
            } else {
                // sidebar toggle
                this.$root.$emit('bv::toggle::collapse', 'id-contact');
            }
        }
    },
    created() {
        this.info = mynavbar.info

    },
    mounted() {
        
        
    },
    beforeDestroy() {


        
    },
}


