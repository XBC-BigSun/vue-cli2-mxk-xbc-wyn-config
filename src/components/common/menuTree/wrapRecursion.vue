
<template>
  <div class="wrapRecursion" :style="wrapboxstyle">
    <p :style="wrapboxheaderstyle">目录树的标题</p>
    <left-slide
      :menuarr="arr"
      :selectindex="flagIndex"
      :depth="depth"
      :bodypstyle="bodypstyle"
      :bodyptthirdstyle="bodyptthirdstyle"
      @selectitem="selectitem"
    ></left-slide>
  </div>
</template>
<script>
import recursion from "./recursion";
export default {
  name: "wrapRecursion",
  props: [
    "menuarr",
    "selectindex",
    "depth",
    "wrapboxstyle",
    "wrapboxheaderstyle",
    "bodypstyle",
    "bodyptthirdstyle"
  ],
  data() {
    return {
      msg: "外包装递归组件",
      arr: [],
      flagIndex: ""
    };
  },
  components: {
    "left-slide": recursion
  },
  created() {
    this.arr = this.menuarr;
    this.flagIndex = this.selectindex;
    this.addLock(this.arr);
  },
  methods: {
    addLock(arr) {
      arr.forEach(item => {
        this.$set(item, "lock", false); //必须这么写不能直接赋值，后面更改监听不到
        item.headerIcon = item.headerIconNormal || "";
        item.footerIcon = item.footerIconNormal || "el-icon-arrow-up";
        if (item.children) {
          this.addLock(item.children);
        }
      });
    },
    getParentNode(arr, mark, temp) {
      for (var i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item.mark == mark) {
          temp.unshift(item);
          this.getParentNode(this.arr, item.pid, temp);
          break;
        } else {
          if (!!item.children) {
            this.getParentNode(item.children, mark, temp);
          }
        }
      }
      return temp;
    },
    selectitem(item) {
      if (item.mark == this.flagIndex) {
        //点击的是同一个item
        item.lock = !item.lock;
      } else {
        //点击的不是同一个item
        this.addLock(this.arr); //关闭所有的 锁
        let res = this.getParentNode(this.arr, item.mark, []); //找到点击的item及父级的item
        res.forEach(item => {
          //找到当前及所有的 父级节点全部开锁
          item.headerIcon =
            item.headerIconActive || item.headerIconNormal || "";
          item.footerIcon = item.footerIconActive || "el-icon-arrow-down";
          item.lock = true;
        });
        this.getParentNode(this.arr, this.flagIndex, []).forEach(value => {
          if (value.mark == item.mark) {
            item.lock = false;
            return;
          }
        });
      }
      if (item.lock) {
        item.headerIcon = item.headerIconActive || item.headerIconNormal || "";
        item.footerIcon = item.footerIconActive || "el-icon-arrow-down";
      } else {
        item.headerIcon = item.headerIconNormal || "";
        item.footerIcon = item.footerIconNormal || "el-icon-arrow-up";
      }
      this.flagIndex = item.mark;
      this.$emit("selectitem", item);
    }
  }
};
</script>
<style>
.wrapRecursion {
  max-width: 260px;
  height: auto;
}
</style>