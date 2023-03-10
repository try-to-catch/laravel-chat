<!--<template>-->

<!--</template>-->

<!--<script>-->
<!--import useChat from '../composables/chat';-->
<!--import {onMounted} from 'vue';-->
<!--export default {-->
<!--    name: 'ChatMessages',-->
<!--    props: {-->
<!--        user: {-->
<!--            required: true,-->
<!--            type: Object-->
<!--        }-->
<!--    },-->
<!--    setup() {-->
<!--        const {messages, getMessages} = useChat()-->
<!--        onMounted(getMessages)-->
<!--        Echo.private('chat')-->
<!--            .listen('MessageSent', (e) => {-->
<!--                messages.value.push({-->
<!--                    message: e.message.message,-->
<!--                    user: e.user-->
<!--                });-->
<!--            });-->
<!--        return {-->
<!--            messages-->
<!--        }-->
<!--    }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--</style>-->
