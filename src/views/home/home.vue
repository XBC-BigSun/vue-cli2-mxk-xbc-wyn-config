<template>
  <div class="home">
    <p>{{msg}}</p>
    <wrap-left-slide
      :menuarr="arr"
      :selectindex="flagIndex"
      :depth="depth"
      :wrapboxstyle="wrapboxstyle"
      :wrapboxheaderstyle="wrapboxheaderstyle"
      :bodypstyle="bodypstyle"
      :bodyptthirdstyle="bodyptthirdstyle"
      @selectitem="selectItem"
    ></wrap-left-slide>
  </div>
</template>

<script>
import menuTree from "../../components/common/menuTree/wrapRecursion";
export default {
  name: "home",
  props: [""],
  data() {
    return {
      msg: "这里是 home 组件",
      wrapboxstyle: {
        "padding-bottom": "20px",
        margin: "20px auto",
        width: "400px"
      },
      wrapboxheaderstyle: {
        width: "260px",
        height: "50px",
        "font-size": "22px",
        color: "#fff",
        background: "red",
        "line-height": "50px",
        padding: "0 20px",
        margin: 0
      },
      bodypstyle: {
        padding: "0 20px",
        height: "50px",
        "border-bottom": "1px solid #dedede",
        margin: 0,
        "line-height": "50px",
        position: "relative",
        "font-size": "16px",
        color: "#666",
        cursor: "pointer"
      },
      bodyptthirdstyle: {
        "line-height": "50px"
      },
      flagIndex: "6244f76be38fe16616adeah975e7hdb7",
      depth: 0,
      arr: [
        {
          name: "主要职责",
          mark: "8142754caa2a4e01bed712888bb5be3c",
          pid: "main-responsibilities",
          headerIconActive: "el-icon-user-solid",
          headerIconNormal: "el-icon-user",
          footerIconActive: "el-icon-warning",
          footerIconNormal: "el-icon-warning-outline"
        },
        {
          name: "内设机构",
          mark: "10b14bfc399c42e2b88b98a95855df3d",
          pid: "Internal-organization",
          headerIconActive: "el-icon-user-solid",
          headerIconNormal: "el-icon-user",
          footerIconActive: "el-icon-warning",
          footerIconNormal: "el-icon-warning-outline"
        },
        {
          name: "主要负责人",
          mark: "e41a3dcc76db467a912d9b828c87fbfc",
          pid: "principal-responsible-person",
          headerIconActive: "el-icon-user-solid",
          headerIconNormal: "el-icon-user",
          footerIconActive: "el-icon-warning",
          footerIconNormal: "el-icon-warning-outline"
        },
        {
          name: "训练基地",
          mark: "d945a2c553c243c0b6d515ad89bd6d0d",
          pid: "training-base",
          headerIconActive: "el-icon-user-solid",
          headerIconNormal: "el-icon-user",
          footerIconActive: "el-icon-warning",
          footerIconNormal: "el-icon-warning-outline"
        },
        {
          name: "联系方式",
          mark: "8e2a990e6b354d69b3ca631675ab2b43",
          pid: "contact-information",
          headerIconActive: "el-icon-user-solid",
          headerIconNormal: "el-icon-user",
          footerIconActive: "el-icon-warning",
          footerIconNormal: "el-icon-warning-outline"
        },
        {
          name: "考察站",
          mark: "004001001",
          pid: "observation-station",
          headerIconActive: "el-icon-user-solid",
          headerIconNormal: "el-icon-user",
          footerIconActive: "el-icon-warning",
          footerIconNormal: "el-icon-warning-outline",
          children: [
            {
              name: "雪龙2号",
              mark: "22cd30d7444f4f4399341ad5586768ed",
              pid: "004001001",
              headerIconActive: "el-icon-user-solid",
              headerIconNormal: "el-icon-user",
              footerIconActive: "el-icon-warning",
              footerIconNormal: "el-icon-warning-outline",
              children: [
                {
                  name: "船只介绍",
                  mark: "hhd81e26ha3h46d86cgd44e6f2bh93hc",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "建造过程",
                  mark: "ad18bf9f3g5bh8962d9e6g2ha1b1d219",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "船只特点",
                  mark: "4h4522d8f11b413cef3de47df139hd72",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "性能参数",
                  mark: "haf51b26932d2c727a9a9bba11c5cc16",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "性能参数",
                  mark: "ac142g16h7g942eafea65f54772dh7e3",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "船只功能",
                  mark: "23938776f74c7392cad6h4hg966b6712",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "船只设计",
                  mark: "ccchcc6b5c625fc24c1d68977ad3ahb7",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "航行试验",
                  mark: "ab228h99bg6d28274b13c183fab3ga5a",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "科学考察",
                  mark: "4b3bcahh85315b22a96d4edgbhdg4h44",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "最新消息",
                  mark: "f61fb214c833985a4fe527g8g9fc2517",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "建造意义",
                  mark: "bd9c153hbeead137g2f13636g77955d2",
                  pid: "22cd30d7444f4f4399341ad5586768ed",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                }
              ]
            },
            {
              name: "雪龙一号",
              mark: "4fd5c71775ef4cd78ef396049e7efb95",
              pid: "004001001",
              headerIconActive: "el-icon-user-solid",
              headerIconNormal: "el-icon-user",
              footerIconActive: "el-icon-warning",
              footerIconNormal: "el-icon-warning-outline"
            }
          ]
        },
        {
          name: "考察船",
          mark: "004001002",
          pid: "survey-ship",
          headerIconActive: "el-icon-user-solid",
          headerIconNormal: "el-icon-user",
          footerIconActive: "el-icon-warning",
          footerIconNormal: "el-icon-warning-outline",
          children: [
            {
              name: "罗斯海新站",
              mark: "011f3979b66b4b858d502b88a4e3125c",
              pid: "004001002",
              headerIconActive: "el-icon-user-solid",
              headerIconNormal: "el-icon-user",
              footerIconActive: "el-icon-warning",
              footerIconNormal: "el-icon-warning-outline",
              children: [
                {
                  name: "建设沿革",
                  mark: "44c1ec526gdf6878a8g29177bage43bh",
                  pid: "011f3979b66b4b858d502b88a4e3125c",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "地理位置",
                  mark: "7g1ce29315chcf9e7683ge829a9aah49",
                  pid: "011f3979b66b4b858d502b88a4e3125c",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "建设意义",
                  mark: "b9g3a2h619g26e7gb1f3dg614f27f2g8",
                  pid: "011f3979b66b4b858d502b88a4e3125c",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "建设历程",
                  mark: "34894b3e2g2g6adg6a55497g256g8ed4",
                  pid: "011f3979b66b4b858d502b88a4e3125c",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                },
                {
                  name: "站点工作",
                  mark: "6244f76be38fe16616adeah975e7hdb7",
                  pid: "011f3979b66b4b858d502b88a4e3125c",
                  headerIconActive: "el-icon-user-solid",
                  headerIconNormal: "el-icon-user",
                  footerIconActive: "el-icon-warning",
                  footerIconNormal: "el-icon-warning-outline"
                }
              ]
            },
            {
              name: "泰山站",
              mark: "ba5b63c95aa54bbebe90779b71864d28",
              pid: "004001002",
              headerIconActive: "el-icon-user-solid",
              headerIconNormal: "el-icon-user",
              footerIconActive: "el-icon-warning",
              footerIconNormal: "el-icon-warning-outline"
            },
            {
              name: "昆仑站",
              mark: "3e8edfc37af14496b5bcd48e098f0ac9",
              pid: "004001002",
              headerIconActive: "el-icon-user-solid",
              headerIconNormal: "el-icon-user",
              footerIconActive: "el-icon-warning",
              footerIconNormal: "el-icon-warning-outline"
            },
            {
              name: "黄河站",
              mark: "f530c149353a43cdbce1af2034cb25ed",
              pid: "004001002",
              headerIconActive: "el-icon-user-solid",
              headerIconNormal: "el-icon-user",
              footerIconActive: "el-icon-warning",
              footerIconNormal: "el-icon-warning-outline"
            },
            {
              name: "中山站",
              mark: "89c74e44d1c34b0b85791e6997e9f840",
              pid: "004001002",
              headerIconActive: "el-icon-user-solid",
              headerIconNormal: "el-icon-user",
              footerIconActive: "el-icon-warning",
              footerIconNormal: "el-icon-warning-outline"
            },
            {
              name: "长城站",
              mark: "cee27231146d40a293b6aac5226fa5fe",
              pid: "004001002",
              headerIconActive: "el-icon-user-solid",
              headerIconNormal: "el-icon-user",
              footerIconActive: "el-icon-warning",
              footerIconNormal: "el-icon-warning-outline"
            }
          ]
        }
      ]
    };
  },

  beforeRouteEnter(to, from, next) {
    next();
  }, //路由进入之前调用

  created() {}, //初始化数据,发送Ajax

  mounted() {}, //window.onload

  activated() {}, //必须基于keep-alive使用功能近似于beforeRouteEnter

  components: {
    "wrap-left-slide": menuTree
  }, //组件注册

  computed: {}, //计算属性

  filters: {}, //过滤器

  beforeRouteUpdate(to, from, next) {
    next();
  }, //当前路由改变，但是该组件被复用时调用(动态参数的路径功能等同于beforeRouteUpdate(to, from, next){})

  watch: { $route(to, from) {} }, //组件进入还是离开都会被监听到,当前路由改变，但是该组件被复用时调用(动态参数的路径功能等同于beforeRouteUpdate(to, from, next){})

  methods: {
    selectItem(item) {
      console.log(item);
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
</style>