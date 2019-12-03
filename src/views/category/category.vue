<template>
  <div class="category">
    <p>{{msg}}</p>
    <slider :init-style="initStyle" :main-img-style="mainImgStyle">
      <a href :slot="'img'+index" v-for="(item,index) in imgArr" :key="index">
        <img :src="item.imgUrl" alt />
        <p>我是段落</p>
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
<style lang='scss' >
.category {
  p {
    text-align: center;
  }
  .slider-ctl {
    background-color: red;
    span {
      width: 20px;
      height: 50px;
      line-height: 50px;
      font-size: 30px;
      font-weight: 700;
      color: #fff;
      background-color: skyblue;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .slider-ctl-prev {
      left: 0;
    }
    .slider-ctl-next {
      right: 0;
    }
  }
  .slider-indcator {
    width: 280px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-evenly;
    justify-items: center;
    .slider-ctl-icon {
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }
    .slider-ctl-icon.active {
      background-color: yellow;
    }
  }
}
</style>