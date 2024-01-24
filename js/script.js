console.log('vue ok', Vue)

const {createApp} = Vue

const app = createApp({
    data(){
        return {
            data
        }
    }
})

app.mount('#root')

console.log(data)