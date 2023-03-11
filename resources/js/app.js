import './bootstrap';
import { createApp } from 'vue';
import ChatForm from "@/components/ChatForm.vue";
import ChatMessages from "@/components/ChatMessages.vue";

const app = createApp({
    components: {
        ChatForm,
        ChatMessages
    }
});


app.mount('#app');
