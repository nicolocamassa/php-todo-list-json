const { createApp } = Vue;

createApp({
    data(){
        return{
            apiEndpoint: 'server.php',
            todoList: [],
        }
    }, mounted(){
        this.importTodo();
    }, methods: {
        importTodo(){
            axios.get(this.apiEndpoint).then((response) => {
                this.todoList = response.data;
            })
        }
    }
}).mount('#app')