// Bonus:
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando 
// esce


const app = new Vue({
    el : '#root',
    data : {
        activeIndex : 0,
        timer : null,
        arrSlides : [
            {
                title : 'Svezia',
                img : '01.jpg',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                title : 'Svizzera',
                img : '02.jpg',
                text : 'Lorem ipsum.',
            },
            {
                title : 'Gran Bretagna',
                img : '03.jpg',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title : 'Germania',
                img : '04.jpg',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                title : 'Paradise',
                img : '05.jpg',
                text : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
    },
    methods : {
        next() {
            this.activeIndex < this.arrSlides.length - 1 ? this.activeIndex++ : this.activeIndex = 0;
        },
        previous() {
            this.activeIndex == 0 ? this.activeIndex = this.arrSlides.length - 1 : this.activeIndex--;
        },
        slideShow: function() {
            this.timer = setInterval(this.next, 3000);
          },
    },
    created() {
        this.slideShow();
    },
})