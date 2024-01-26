console.log('vue ok', Vue)

const {createApp} = Vue


const app = createApp({
    data(){
        return {
            ...data,
            activeId: 1,
            newMessageText: '',
            searchContact: '',
    }
    },
    methods: {
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        },

        setActiveId(id){
            this.activeId = id
        },

        addMessage(text, status){
            
            const newMessage = {
                id: new Date(),
                date: new Date().toLocaleDateString(),
                text,
                status,
            }
            this.currentChat.push(newMessage)
        },

        sendMessage(){
            if(!this.newMessageText) return
            this.addMessage(this.newMessageText, 'sent')
            this.newMessageText = ''

            setTimeout(()=>{
                this.addMessage('ok', 'received')
            }, 1000)
        },

        filteredContacts (){
            const searchContactName = this.searchContact.toLowerCase
            const filteredArray = this.contacts.filter((contact)=> contact.name.includes(searchContactName))

            return filteredArray
        }
    },
    computed: {
        currentContact(){
            return this.contacts.find((contact)=> contact.id === this.activeId)
        },

        currentChat(){
            return this.currentContact.messages;
        }

        
    }
})

app.mount('#root')



