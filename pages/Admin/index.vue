<template>
  <h3>admin</h3>
</template>
<script>
export default {
  middleware: ["auth"],
  head: {
    title: "管理页面",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "我是管理页面的描述"
      }
    ]
  }
};
</script>