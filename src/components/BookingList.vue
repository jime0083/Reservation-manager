<template>
    <div>
        <h2>予約一覧</h2>
    </div>
    <ul>
        <li v-for="booking in bookings" :key="booking.id">
            {{ booking.name }}({{ booking.date }})
            <button @click="startEdit(booking)">編集</button>
            <button @click="deleteBooking(booking.id)">削除</button>
        </li>
    </ul>
</template>

<script setup>
import {useBookingStore} from '@/stores/booking';

const store=useBookingStore();
const bookings=store.bookings;

const deleteBooking=(id) =>{
    store.removeBooking(id);
};

const startEdit=(booking) =>{
    store.startEditing(booking);
};

</script>