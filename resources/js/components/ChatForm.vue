<template>
    <div v-if="errors" class="text-red-500 py-4">
        <div v-for="(message, key) in errors.message" :key="key">
            {{ message }}
        </div>
    </div>

</template>

<script>
import {reactive} from 'vue';
import useChat from '../composables/chat';
export default {
    name: 'ChatForm',
    setup() {
        const form = reactive({
            message: '',
        })
        const {errors, addMessage} = useChat()
        const sendMessage = async () => {
            await addMessage(form)
            form.message = ''
        }
        return {
            errors,
            form,
            sendMessage
        }
    }
};
</script>

<style scoped>
</style>
