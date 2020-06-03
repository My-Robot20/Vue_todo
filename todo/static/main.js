

function sendRequest(url,method,data){
    var r = axios({
        method: method,
        url: url,
        data: data,
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    return r
}


var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Hello vue'
    }
})
var app = new Vue({
    el: '#app',  /* Binding in relation to id in html doc */
    data: {
        task: '',
        tasks: [
            { title: 'one'},
            { title: 'two'}
        ]
    },
    created(){
        var vm = this;
        var r = sendRequest('', 'get')
            .then(function(response){
                 vm.tasks = response.data.tasks;
            })
    },
    methods: {
        createTask(){
            var vm = this;
            var formData = new FormData();
            formData.append('title', this.task);

            sendRequest('', 'post', formData)
                .then(function(response){
                  vm.tasks.push(response.data.task);
                  vm.task = '';
                })
        }
    }
})

