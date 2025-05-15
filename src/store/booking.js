import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useBookingStore=defineStore('booking',()=>{
    const bookings=ref([]);
    const editingBooking=ref(null);

    const addBooking=(booking)=>{
        booking.id=Date.now();
        bookings.value.push(booking);
    }

    const removeBooking=(id)=>{
        bookings.value=bookings.value.filter(b=>b.id !==id);
    };

    const startEditing=(booking)=>{
        editingBooking.value={...booking};
    };

    const updateBooking=()=>{
        const index=bookings.value.findIndex(b=>b.id===editingBooking.value.id);
        if(index !==-1){
            bookings.value[index]={...editingBooking.value};
        }
        editingBooking.value=null;
    };

    return{
        bookings,
        editingBooking,
        addBooking,
        removeBooking,
        startEditing,
        updateBooking,
    }
});

