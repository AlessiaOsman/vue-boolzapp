console.log('vue ok', Vue)

const {createApp} = Vue


const app = createApp({
    data(){
        return {
            ...data,
            activeId: 2,
        
        }
    },
    methods: {
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        },

        setActiveId(id){
            this.activeId = id
        }
    },
    computed: {
        currentContact(){
            return this.contacts.find((contact)=> contact.id === this.activeId)
        }
    }
})

app.mount('#root')



