<template>
  <div class="zoom" :style="zoomStyle">
    <a :href="linkHref">
      <img :src="imgUrl" alt />
      <div class="text">
        <h5 :style="zoomContentHeaderStyle">{{zoomContent.header}}</h5>
        <p :style="countPWidth">{{zoomContent.body}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "zoom",
  props: {
    zoomContent: {
      type: Object,
      required: true
    },
    zoomStyle: {
      type: Object,
      required: true,
      default: function() {
        return {
          width: "500px",
          border: "1px solid #ccc",
          padding: "15px",
          "border-radius": " 10px"
        };
      }
    },
    linkHref: {
      type: String
    },
    imgUrl: {
      required: true,
      type: String
    },
    zoomContentHeaderStyle: {
      type: Object,
      default: function() {
        return {
          "word-spacing": "-0.15em",
          "font-weight": "300",
          "font-size": " 2.3em",
          color: "#fff"
        };
      }
    },
    zoomContentBodyStyle: {
      type: Object,
      default: function() {
        return {
          color: "#eaeaea",
          "font-size": "17px",
          "text-align": "center"
        };
      }
    }
  },
  data() {
    return {
      msg: "这里是css缩放组件"
    };
  },
  computed: {
    countPWidth() {
      if ("padding" in this.zoomStyle) {
        this.zoomContentBodyStyle.width =
          parseInt(this.zoomStyle.width) -
          70 -
          24 -
          parseInt(this.zoomStyle.padding) * 2 +
          "px";
      } else {
        this.zoomContentBodyStyle.width =
          parseInt(this.zoomStyle.width) - 70 - 24 + "px";
      }
      return this.zoomContentBodyStyle;
    }
  },
  created() {}
};
</script>
<style scoped>
.zoom {
  position: relative;
}

.zoom img {
  width: 100%;
  height: 100%;
}

.zoom .text::before {
  content: "";
  border: 2px solid #fff;
  position: absolute;
  top: 35px;
  left: 35px;
  bottom: 35px;
  right: 35px;
  box-shadow: 0 0 0 35px rgba(255, 255, 255, 0.2);
  transition: all 200ms ease;
  opacity: 0;
  transform: scale(1.2);
}

.zoom:hover .text::before {
  opacity: 1;
  transform: scale(1);
}

.zoom .text {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.zoom .text h5 {
  transform: scale(1.2);
  transition: all 200ms ease;
}

.zoom:hover .text h5 {
  transform: scale(0.8);
}

.zoom .text p {
  transition: all 200ms ease;
  transform: scale(1.2);
  opacity: 0;
  width: 400px;
}

.zoom:hover .text p {
  opacity: 1;
  transform: scale(1);
}
</style>