import * as contact from '../../data/data';

export default {
    name: 'Contact',
    data() {
        return {
           info: {},
           isSidebarOpen: false
        };
    },
    methods: {
        sendEmail: function () {
            window.open('mailto:chienfang0611@gmail.com');
        },
        open: function () {
            console.log('open!!!!!!!!!!!');
           

        },
        letterAnimation: function () {
            console.log('letter animation!!!!');
            var textWrapper = document.querySelector('.message-div .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            console.log('anime textWrapper', textWrapper);

            this
            .$anime
            .timeline({loop: true})
            .add({
                targets: '.message-div .letter',
                translateY: ["3.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 50 * i
            }).add({
                targets: '.message-div',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
        },
    },
    created() {
        console.log('created letter animation!!!!');
        this.info = contact.contact;

    },
    mounted() {
        this.letterAnimation();

    },
}
