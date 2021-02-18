const app = Vue.createApp({
    data() {
        return {
            showBook: true,
            url: 'https://www.google.com',
            books: [
                { title: 'Finance And Accounting', author: 'patrick khan', img: 'assets/1.jpg', isFav: true},
                { title: 'Marketing And Accounting', author: 'Ahmad Khan', img: 'assets/2.jpeg', isFav: false},
                { title: 'Finance And Math', author: 'Ali Ahmed', img: 'assets/3.jpeg', isFav: true},
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBook = !this.showBook;
        },
        handleEvent(e) {
            console.log(e);
            console.log(e.type);
        },
        handleChange(book){
            console.log("I am here for reason");

            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")
