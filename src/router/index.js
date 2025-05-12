import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Reservations from '../views/Reservations.vue';
import CreateReservation from '../views/CreateReservation.vue';
import ReservationList from "../components/ReservationList.vue";

const routes=[
    {path:'/',name:'Home',component:Home},
    {path:'/reservations',name:'Reservations',component:Reservations},
    {path:'/create',name:'CreateReservations',component:CreateReservation},
    {path: '/reservations',name: 'Reservations',component: ReservationList}
]

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;

