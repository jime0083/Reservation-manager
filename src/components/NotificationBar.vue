<template>
    <div v-if="message" class="notification">
        {{ message }}
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useReservationStore } from '../store/reservationStore'; 

const store=useReservationStore();
const message=computed(()=>store.notificationMessage);
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  transition: all 0.3s ease;
}
</style>