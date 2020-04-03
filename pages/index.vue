<template>
  <div>
    <h2>这是首页！！！page</h2>
    {{num}}77
    <nav>
      <nuxt-link v-for="item in list" :to="`detail/${item.id}`" :key="item.id">{{item.name}}&nbsp;</nuxt-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default class extends Vue {
  num = 9;
  list = [
    {
      id: 123,
      name: "name1"
    },
    {
      id: 222,
      name: "name2"
    }
  ];
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
