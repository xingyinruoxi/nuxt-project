<template>
  <div>
    <nuxt-child></nuxt-child>
    <h4>商品详情{{$route.params.id}}</h4>
    <p v-if="goodInfo">{{goodInfo}}</p>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params, error }) {
    if (params.id) {
      // asyncData中不能使用this获取组件实例
      // 但是可以通过上下文获取相关数据
      const { data: goodInfo } = await $axios.$get("/api/detail", { params });
      if (goodInfo) {
        return { goodInfo };
      }
      error({ statusCode: 400, message: "商品详情查询失败" });
    } else {
      return { goodInfo: null };
    }
  }
};
</script>