<template>
    <form @submit.prevent="submitReservation">
        <input v-model="name" placeholder="名前を入力" required>
        <input type="date" v-model="date" required>
        <select v-model="time" required>
            <option disabled value="">時間の選択</option>
            <option>10:00</option>
            <option>13:00</option>
            <option>16:00</option>
        </select>
        <button type="submit">予約する</button>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useReservationStore } from '../store/reservationStore';

const name=ref('');
const date=ref('');
const time=ref('');
const store=useReservationStore();

const submitReservation=()=>{
    if(!name.value || !date.value || !time.value) return;
    store.addReservation({
        name:name.value,
        date:date.value,
        time:time.value,
    });

    //入力内容をリセット
    name.value='';
    date.value='';
    time.value='';
};

</script>


<style scoped>
.error {
  color: red;
  font-size: 0.8rem;
}
</style>