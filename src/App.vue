<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>

    <tabar>
      <tabar-item path-name="home" :active-style="activeStyle">
        <p slot="icon-default">
          <span class="el-icon-goods"></span>
        </p>
        <p slot="icon-active">
          <span class="el-icon-s-goods"></span>
        </p>
        <template slot="text">首页</template>
      </tabar-item>
      <tabar-item path-name="category" :active-style="activeStyle">
        <p slot="icon-default">
          <span class="el-icon-location-outline"></span>
        </p>
        <p slot="icon-active">
          <span class="el-icon-location"></span>
        </p>
        <template slot="text">分类</template>
      </tabar-item>
      <tabar-item path-name="cart" :active-style="activeStyle">
        <p slot="icon-default">
          <span class="el-icon-warning-outline"></span>
        </p>
        <p slot="icon-active">
          <span class="el-icon-warning"></span>
        </p>
        <template slot="text">购物车</template>
      </tabar-item>
      <tabar-item path-name="profile" :active-style="activeStyle">
        <p slot="icon-default">
          <span class="el-icon-user"></span>
        </p>
        <p slot="icon-active">
          <span class="el-icon-user-solid"></span>
        </p>
        <template slot="text">我的</template>
      </tabar-item>
    </tabar>
  </div>
</template>

<script>
import tabar from "components/common/tabbar/tabar";
import tabarItem from "components/common/tabbar/tabarItem";
export default {
  name: "App",
  data() {
    return {
      activeStyle: {
        color: "blue",
        fontSize: "18px"
      }
    };
  },
  components: {
    tabar: tabar,
    "tabar-item": tabarItem
  }
};
</script>

<style lang='scss'>
@import "assets/css/base.css";
#app {
  overflow-x: hidden;
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
}
</style>
