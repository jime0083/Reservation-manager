<template>
  <div id="app">
    <nav>
      <router-link to="/">ホーム</router-link>
      <router-link to="/reservations">予約一覧</router-link>
      <router-link to="/create">予約作成</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 1rem;
  background-color: #f0f0f0;
}
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #42b983;
}
</style>