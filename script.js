const { createApp } = Vue;

createApp({
    data(){
        return{
            apiEndpoint: 'server.php',
            todoList: [],
            todoInput: ''
        }
    }, mounted(){
        this.importTodo();
    }, methods: {
        importTodo(){
            axios.get(this.apiEndpoint).then((response) => {
                this.todoList = response.data;
            })
        },
        addTodo(){
            const data = {
                todoInput: this.todoInput
            }

            axios.post(this.apiEndpoint, data, {
                headers: { 'Content-type': 'multipart/form-data'}
            }).then((response) => {
                this.todoInput = '';
                this.todoList = response.data;
            })
        },
        removeCard(index){
            this.todoList.splice(index, 1);
        }
    }
}).mount('#app')