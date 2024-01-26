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

        /** Creo l'oggetto del nuovo messaggio da inviare */

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

        
    },
    computed: {
        /** Tengo monitorato il current contact */
        currentContact(){
            return this.contacts.find((contact)=> contact.id === this.activeId)
        },
        /** Tengo monitorata la chat */
        currentChat(){
            return this.currentContact.messages;
        },

        filteredContacts (){
            const searchContactName = this.searchContact.toLowerCase()
            console.log(this.contacts)
            return this.contacts.filter( contact => contact.name.toLowerCase().includes(searchContactName))

        }

        
    }
})



app.mount('#root')



