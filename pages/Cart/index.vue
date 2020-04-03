<template>
  <article>
    <h4>商品列表</h4>
  </article>
</template>
<script>
export default {
  async asyncData({ $axios, error }) {
    const { ok, goods } = await $axios.$get("/api/goods");
    if (ok) {
      return { goods };
    }
    // 错误处理
    error({ statusCode: 400, message: "数据查询失败" });
  }
};
</script>