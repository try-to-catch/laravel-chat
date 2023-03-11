import {ref} from "vue";

export default function useChat() {
    const messages = ref([]);
    const errors = ref([]);

    async function getMessages() {
        await axios.get('/messages').then((res) => {
            messages.value = res.data
        });
    }

    async function addMessage(message) {
        await axios.post('/send', {text: message})
            .then((res) => {
                messages.value.push(res.data)
            })
            .catch((e) => {
                console.log(e)
                if (e.response.status === 422){
                    errors.value = e.response.data.errors
                }
            });
    }

    return {messages, errors, getMessages, addMessage}
}

