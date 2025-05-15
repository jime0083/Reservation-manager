import { defineStore } from "pinia";
import { ref } from "vue";

export const useReservationStore=defineStore('reservation',()=>{
    const reservations=ref([]);
    const notificationMessage=ref(''); //通知メッセージ

    const setNotification=(message,duration=3000)=>{
        notificationMessage.value=message;
        setTimeout(()=>{
            notificationMessage.value='';
        },duration);
    };

    return{
        reservations,
        notificationMessage,
        setNotification,
    };
});

