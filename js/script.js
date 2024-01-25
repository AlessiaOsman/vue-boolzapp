console.log('vue ok', Vue)

const {createApp} = Vue


const app = createApp({
    data(){
        return {
            ...data,
            activeId: 1,
            newMessageText: ''

        
        }
    },
    methods: {
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        },

        setActiveId(id){
            this.activeId = id
        },

        addMessage(){
            const newMessage = {
                id: new Date(),
                date: false,
                text: this.newMessageText,
                status: 'sent'
            }
            this.currentContact.messages.push(newMessage)
            this.newMessageText = ''
        }
    },
    computed: {
        currentContact(){
            return this.contacts.find((contact)=> contact.id === this.activeId)
        }
    }
})

app.mount('#root')



