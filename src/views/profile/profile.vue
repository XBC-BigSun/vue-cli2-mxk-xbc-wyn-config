<template>
  <div class="profile">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "profile",
  props: [""],
  data() {
    return {
      msg: "这里是 profile 组件"
    };
  },

  beforeRouteEnter(to, from, next) {
    next();
  }, //路由进入之前调用

  created() {}, //初始化数据,发送Ajax

  mounted() {}, //window.onload

  activated() {}, //必须基于keep-alive使用功能近似于beforeRouteEnter

  components: {}, //组件注册

  computed: {}, //计算属性

  filters: {}, //过滤器

  beforeRouteUpdate(to, from, next) {
    next();
  }, //当前路由改变，但是该组件被复用时调用(动态参数的路径功能等同于beforeRouteUpdate(to, from, next){})

  watch: { $route(to, from) {} }, //组件进入还是离开都会被监听到,当前路由改变，但是该组件被复用时调用(动态参数的路径功能等同于beforeRouteUpdate(to, from, next){})

  methods: {}, //方法

  beforeUpdate() {}, //组件更新之前

  updated() {}, //组件更新之后

  beforeRouteLeave(to, from, next) {
    next();
  }, //路由离开之前调用

  deactivated() {}, //必须基于keep-alive使用功能近似于beforeRouteLeave

  beforeDestroy() {}, //组件销毁之前

  destroyed() {} //组件销毁
};
</script>
<style lang='scss' scoped>
</style>