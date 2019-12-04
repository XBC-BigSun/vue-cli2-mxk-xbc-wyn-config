<template>
  <div class="category">
    <p>{{msg}}</p>
    <slider :init-style="initStyle" :main-img-style="mainImgStyle">
      <a href :slot="'img'+index" v-for="(item,index) in imgArr" :key="index">
        <img :src="item.imgUrl" alt />
        <p>我是段落{{index}}</p>
      </a>
    </slider>
  </div>
</template>

<script>
import slider from "components/common/slider/slider.vue";
export default {
  name: "category",
  props: [""],
  data() {
    return {
      msg: "这里是 category 组件",
      imgArr: [
        {
          imgUrl: require("assets/img/lunbotu/1.jpg")
        },
        {
          imgUrl: require("assets/img/lunbotu/2.jpg")
        },
        {
          imgUrl: require("assets/img/lunbotu/3.jpg")
        },
        {
          imgUrl: require("assets/img/lunbotu/4.jpg")
        }
      ],
      mainImgStyle: {
        style0: {
          left: "0px"
        },
        style1: {
          left: "520px"
        },
        style2: {
          left: "520px"
        },
        style3: {
          left: "520px"
        }
      },
      initStyle: {
        width: "522px",
        height: "282px",
        border: "1px solid #000",
        margin: " 20px auto"
      }
    };
  },

  beforeRouteEnter(to, from, next) {
    next();
  }, //路由进入之前调用

  created() {}, //初始化数据,发送Ajax

  mounted() {}, //window.onload

  activated() {}, //必须基于keep-alive使用功能近似于beforeRouteEnter

  components: {
    slider: slider
  }, //组件注册

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
.category {
  p {
    text-align: center;
    position: relative;
    top: -100px;
    left: 0;
    background-color: red;
  }
}
</style>