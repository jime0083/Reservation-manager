<template>
    <form @submit.prevent="submitForm">
        <div>
            <label>名前:</label>
            <input v-model="form.name" type="text">
            <span v-if="errorMessages.name" class="error">{{ errorMessages.name }}</span>
        </div>

        <div>
            <label>日付:</label>
            <input v-model="form.date" type="date">
            <span v-if="errorMessages.date" class="error">{{ errorMessages.date }}</span>
        </div>

        <div>
            <label>時間:</label>
            <input v-model="form.time" type="time">
            <span v-if="errorMessages.time" class="error">{{ errorMessages.time }}</span>
        </div>

        <button type="submit">予約する</button>
    </form>
</template>

<script setup>
import { reactive} from 'vue';

const form=reactive({
    name:'',
    date:'',
    time:''
})

const errors=reactive({
    name:'',
    date:'',
    time:''
})

const submitForm=()=>{
    //エラーを初期化
    errors.name=''
    errors.date=''
    errors.time=''

    //バリテーション
    let valid=true
    if(!form.name){
        errors.name='名前は必須です'
        valid=false
    }

    if(!form.date){
        errors.name='日付は必須です'
        valid=false
    }

    if(!form.time){
        errors.name='時間は必須です'
        valid=false
    }

    if(valid){
        // 後続の処理（API送信など）は Step 6 で実装予定
        alert('予約情報が送信されました')
    }
}
</script>


<style scoped>
.error {
  color: red;
  font-size: 0.8rem;
}
</style>