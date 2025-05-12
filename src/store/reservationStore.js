import { defineStore } from "pinia";
import { ref } from "vue";

export const useReservationStore=defineStore('reservation',()=>{
    const reservations=ref([]);

    const addReservation=(reservation)=>{
        reservations.value.push(reservation);
    };

    return{
        reservations,
        addReservation
    };
});

