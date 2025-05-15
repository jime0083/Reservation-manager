<template>
    <form @submit.prevent="submitForm">
        <div>
            <label>名前:</label>
            <input v-model="form.name" type="text">
            <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>

        <div>
            <label>日付:</label>
            <input v-model="form.date" type="date">
            <span v-if="errors.date" class="error">{{ errors.date }}</span>
        </div>

        <div>
            <label>時間:</label>
            <input v-model="form.time" type="time">
            <span v-if="errors.time" class="error">{{ errors.time }}</span>
        </div>

        <button type="submit">予約する</button>
    </form>
</template>

<script setup>
import { reactive } from 'vue'
import { useBookingStore } from '../store/booking' // ① storeのインポート

const store = useBookingStore() // ② storeのインスタンス取得

const form = reactive({
  name: '',
  date: '',
  time: ''
})

const errors = reactive({
  name: '',
  date: '',
  time: ''
})

const submitForm = () => {
  // エラーを初期化
  errors.name = ''
  errors.date = ''
  errors.time = ''

  // バリデーション
  let valid = true
  if (!form.name) {
    errors.name = '名前は必須です'
    valid = false
  }

  if (!form.date) {
    errors.date = '日付は必須です'
    valid = false
  }

  if (!form.time) {
    errors.time = '時間は必須です'
    valid = false
  }

  if (valid) {
    // ③ 予約データを作成
    const newBooking = {
      id: Date.now(), // 一意のID（今回は timestamp を利用）
      name: form.name,
      date: form.date,
      time: form.time
    }

    // ④ storeに予約を追加
    store.addBooking(newBooking)

    // ⑤ フォームをリセット
    form.name = ''
    form.date = ''
    form.time = ''

    // ⑥ 通知やアラート
    alert('予約情報が送信されました')
  }
}
</script>

<!-- <script setup>
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
</script> -->


<style scoped>
.error {
  color: red;
  font-size: 0.8rem;
}
</style>