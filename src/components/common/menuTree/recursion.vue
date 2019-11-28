  <template id='leftSlide'>
  <ul class="left-slide">
    <li v-for="(item,index) in menuarr" :key="index">
      <p
        :class="{active:item.mark==selectindex}"
        @click.stop="selectitem(item)"
        :style="bodypstyle"
      >
        <span :class="item.headerIcon" :style="transform"></span>
        <span :style="transform">{{item.name}}</span>
        <span v-if="item.children" :class="item.footerIcon" :style="bodyptthirdstyle"></span>
      </p>
      <el-collapse-transition>
        <left-slide
          v-if="item.children &&item.lock"
          :menuarr="item.children"
          :selectindex="selectindex"
          @selectitem="selectitem"
          :bodypstyle="bodypstyle"
          :bodyptthirdstyle="bodyptthirdstyle"
          :depth="depth+1.5"
        ></left-slide>
      </el-collapse-transition>
    </li>
  </ul>
</template>

<script>
export default {
  name: "left-slide",
  props: ["menuarr", "selectindex", "depth", "bodypstyle","bodyptthirdstyle"],
  data() {
    return {
      msg: "左侧目录导航栏",
      menuArr: []
    };
  },
  created() {
    this.menuArr = this.menuarr;
  },
  computed: {
    transform() {
      return "transform:translateX(" + this.depth * 10 + "px)";
    }
  },
  mounted() {
    let res = this.getParentNode(this.menuArr, this.selectindex, []);
    res.forEach(item => {
      item.lock = true;
      item.headerIcon = item.headerIconActive || item.headerIconNormal || "";
      item.footerIcon = item.footerIconActive || "el-icon-arrow-down";
    });
  },
  methods: {
    selectitem(item) {
      this.$emit("selectitem", item);
    },
    getParentNode(arr, mark, temp) {
      for (var i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item.mark == mark) {
          temp.unshift(item);
          this.getParentNode(this.menuArr, item.pid, temp);
          break;
        } else {
          if (!!item.children) {
            this.getParentNode(item.children, mark, temp);
          }
        }
      }
      return temp;
    }
  }
};
</script>
<style  scoped>
.left-slide > li > p {
  position: relative;
}

.left-slide > li > p > span:nth-child(2) {
  display: inline-block;
}

.left-slide > li > p > span:nth-child(3) {
  float: right;
}
.left-slide > li > p:hover {
  background-color: #3d89cf;
}
.left-slide > li > p.active {
  background-color: #3d89cf;
}

.left-slide > li > p.active::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 100%;
  background-color: red;
  top: 0;
  left: 0;
}
</style>