<template>
  <!-- 友情提示：当您在使用本组件修改左右控制及指示器的时候在您引入本组件的组件中不能加scoped -->
  <div class="slider" :style="initStyle" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="slider-scroll">
      <div class="slider-main">
        <div
          class="slider-main-img"
          v-for="(item,key,index) in mainImgStyle"
          :key="index"
          :style="item"
        >
          <slot :name="'img'+index"></slot>
        </div>
      </div>
    </div>
    <div class="slider-ctl" v-if="sliderCtlBool">
      <span class="slider-ctl-prev" @click="clickLt">
        <slot>&lt;</slot>
      </span>
      <span class="slider-ctl-next" @click="clickGt">
        <slot>&gt;</slot>
      </span>
    </div>

    <div class="slider-indcator" v-if="sliderIndcatorBool">
      <span
        class="slider-ctl-icon"
        v-for="(item,key,index) in mainImgStyle"
        :key="index"
        :class="{active:flag==index}"
        @click="selectItem(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  props: {
    initStyle: {
      type: Object,
      required: true
    },
    mainImgStyle: {
      type: Object,
      required: true
    },
    imgWidth: {
      type: String,
      default: "520px"
    },
    delay: {
      type: Number,
      default: 3000
    },
    speed: {
      type: Number,
      default: 30
    },
    sliderCtlBool: {
      type: Boolean,
      default: true
    },
    sliderIndcatorBool: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      msg: "这里是 slider 组件",
      flag: 0,
      lock: true,
      timer: ""
    };
  },

  beforeRouteEnter(to, from, next) {
    next();
  }, //路由进入之前调用

  created() {
    for (let [key, value] of Object.entries(this.mainImgStyle)) {
      this[key] = this.mainImgStyle[key];
    }
    this.timer = setInterval(() => {
      this.clickGt();
    }, this.delay);
  }, //初始化数据,发送Ajax

  mounted() {}, //window.onload

  activated() {}, //必须基于keep-alive使用功能近似于beforeRouteEnter

  components: {}, //组件注册

  computed: {}, //计算属性

  filters: {}, //过滤器

  beforeRouteUpdate(to, from, next) {
    next();
  }, //当前路由改变，但是该组件被复用时调用(动态参数的路径功能等同于beforeRouteUpdate(to, from, next){})

  watch: { $route(to, from) {} }, //组件进入还是离开都会被监听到,当前路由改变，但是该组件被复用时调用(动态参数的路径功能等同于beforeRouteUpdate(to, from, next){})

  methods: {
    mouseenter() {
      clearInterval(this.timer);
    },
    mouseleave() {
      this.timer = setInterval(() => {
        this.clickGt();
      }, this.delay);
    },
    selectItem(id) {
      if (this.lock) {
        if (id > this.flag) {
          this.buffer(
            this["style" + this.flag].left,
            "-" + this.imgWidth,
            this.flag
          );
          this["style" + id].left = this.imgWidth;
          this.buffer(this["style" + id].left, "0px", id);
        } else if (id < this.flag) {
          this.buffer(this["style" + this.flag].left, this.imgWidth, this.flag);
          this["style" + id].left = "-" + this.imgWidth;
          this.buffer(this["style" + id].left, "0px", id);
        }
        this.flag = id;
      }
    },
    clickLt() {
      //左
      if (this.lock) {
        this.buffer(this["style" + this.flag].left, this.imgWidth, this.flag);
        this.flag--;
        if (this.flag < 0) {
          this.flag = Object.keys(this.mainImgStyle).length - 1;
        }
        this["style" + this.flag].left = "-" + this.imgWidth;
        this.buffer(this["style" + this.flag].left, "0px", this.flag);
      }
    },
    clickGt() {
      //右
      if (this.lock) {
        this.buffer(
          this["style" + this.flag].left,
          "-" + this.imgWidth,
          this.flag
        );
        this.flag++;
        if (this.flag > Object.keys(this.mainImgStyle).length - 1) {
          this.flag = 0;
        }
        this["style" + this.flag].left = this.imgWidth;
        this.buffer(this["style" + this.flag].left, "0px", this.flag);
      }
    },
    buffer(init, target, flag) {
      this.lock = false;
      let timer = null;
      // 1.1 清除定时器
      clearInterval(timer);
      // 1.2 设置定时器
      timer = setInterval(() => {
        let numberTarget = parseInt(target);
        let numberStyleLeft = parseInt(init);
        // 1.3 求出步长
        var speed = parseFloat((numberTarget - numberStyleLeft) * 0.2);
        // 判断是否向上取整
        speed =
          numberTarget > numberStyleLeft ? Math.ceil(speed) : Math.floor(speed);
        // 1.4 动起来
        init = numberStyleLeft + speed + "px";
        this["style" + flag].left = init;
        // 1.5 判断
        if (numberStyleLeft === numberTarget) {
          console.log("清除定时器");
          clearInterval(timer);
          this.lock = true;
        }
      }, this.speed);
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
@import "./personal.scss";
.slider {
  position: relative;
  overflow: hidden;
  .slider-scroll {
    width: 100%;
    height: 100%;
    position: relative;
    .slider-main {
      width: 200%;
      height: 100%;
      background-color: red;
      position: relative;
      .slider-main-img {
        width: 50%;
        height: 100%;
        position: absolute;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>