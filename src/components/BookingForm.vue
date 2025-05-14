<template>
    <form @submit.prevent="onSubmit">
        <input v-model="form.name" placeholder="名前" required />
        <input v-model="form.date" type="date" required/>
        <button type="submit">{{ editingBooking ?'更新':'予約' }}</button>
    </form>
</template>

<script setup>
import { useBookingStore } from '../store/booking';
import { reactive,watch } from 'vue';

const store=useBookingStore();
const editingBooking=store.editingBooking;

const form=reactive({
    if(newVal){
        form.name=newVal.name;
        form.date=newVal.date;
    }
});

const onSubmit=()=>{
    if(editingBooking.value){
        editingBooking.value.name=form.name;
        editingBooking.value.date=form.date;
        store.updateBooking();
    }else{
        store.addBooking({...form})l
    }
    form.name='';
    form.date='';
};
</script>