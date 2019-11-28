<template>
  <li class="tabar-wrap-item" @click="selectItem">
    <!-- 注意点v-show无法控制插槽的显示隐藏如果想正确的使用最好在插槽的外面包裹一层div标签 -->
    <slot v-if="!bool" name="icon-default"></slot>
    <slot v-else name="icon-active"></slot>
    <!-- 由于插槽是被外界的元素之间替换的，所有不能给插槽加class类型 -->
    <div :style="comActiveStyle">
      <slot name="text"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "tabarItem",
  props: {
    pathName: {
      type: String,
      require: true
    },
    activeStyle: {
      type: Object,
      defaule: "red"
    }
  },
  data() {
    return {
      msg: "这里是 tabarItem 组件"
    };
  },

  beforeRouteEnter(to, from, next) {
    next();
  }, //路由进入之前调用

  created() {}, //初始化数据,发送Ajax

  mounted() {}, //window.onload

  activated() {}, //必须基于keep-alive使用功能近似于beforeRouteEnter

  components: {}, //组件注册

  computed: {
    bool() {
      switch (this.$route.name) {
        case null:
          return true;
        case this.pathName:
          return true;
      }
    },
    comActiveStyle() {
      return this.bool ? this.activeStyle : {};
    }
  }, //计算属性

  filters: {}, //过滤器

  beforeRouteUpdate(to, from, next) {
    next();
  }, //当前路由改变，但是该组件被复用时调用(动态参数的路径功能等同于beforeRouteUpdate(to, from, next){})

  watch: { route(to, from) {} }, //组件进入还是离开都会被监听到,当前路由改变，但是该组件被复用时调用(动态参数的路径功能等同于beforeRouteUpdate(to, from, next){})

  methods: {
    selectItem() {
      this.$router.push({
        name: this.pathName
      });
    }
  }, //方法

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
.tabar-wrap-item {
  cursor: pointer;

  text-align: center;
  flex: 1;
  p {
    span {
      font-size: 25px;
    }
  }
  & > div.active {
    color: red;
  }
}
</style>