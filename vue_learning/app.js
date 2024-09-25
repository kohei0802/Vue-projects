//Root component in {}
const app = Vue.createApp({
    //data, functions to handle events
    //component templates

    //Injected in #app
    // template : '<h2> I am the template</h2>'

    //shortcut to make a method of the object
    //accessible from template
    data() {
        return {
            url : "http://www.thenetninja.co.uk",
            title : "The final Emperor", 
            author : 'Brandon Sanderson',
            age : 45,
            showTitleButton : true, 
            showBook : true,
            x : 0, 
            y : 0,
            books : [
                {
                    title : 'name of the wind', 
                    author : 'patrick rothfuss',
                    src : "assets/1.jpg", 
                    isFav : true
                }, 
                {
                    title : 'the way of the kings', 
                    author : 'patrick rothdfasd', 
                    src : "assets/2.png",
                    isFav : false
                }, 
                {
                    title : 'little women', 
                    author : 'authy', 
                    src : "assets/3.png",
                    isFav : true
                }
            ]
        }
    }, 

    methods : {
        changeTitle(title) {
            this.title = title
        }, 

        toggleShowBook() {
            this.showBook = !this.showBook
        }, 

        handleMousemove(e) {
            this.x = e.offsetX 
            this.y = e.offsetY
        }, 
        toggleIsFav(book) {
            book.isFav = !book.isFav
        }
    }, 

    // Depended on data and this is automatically updated based on data
    computed : {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }

})

app.mount('#app')

