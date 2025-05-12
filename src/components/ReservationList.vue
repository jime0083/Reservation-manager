<template>
    <div>
        <h2>予約一覧</h2>
        <ul v-if="reservations.length > 0">
            <li v-for="(reservation,index) in reservations" :key="index" class="reservation-item">
                <strong>{{ reservation.name }}</strong> さん -
                {{ formatDate(reservation.date) }}の{{ reservation.time }}に予約
            </li>
        </ul>
        <p v-else>現在、予約はありません</p>
    </div>
</template>

<script setup>
import{useReservationStore} from '../store/reservationStore';
import { computed } from 'vue';

const store=useReservationStore();
const reservations=computed(()=>store.reservations);

const formatDate=(dateStr)=>{
    const date=new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;
}

</script>

<style scoped>
.reservation-item {
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
</style>