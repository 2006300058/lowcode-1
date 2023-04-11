<template>
    <div
      class="url-box"
      :style="boxStyle"
    >
      <a :href="options.url" target="_blank" >
        {{ options.text }}
      </a>
    </div>
</template>
<script>
// 文本框样式和设置
export default {
  props: {
    data: {
      type: Object,
      require: true,
      default: null,
    },
  },
  components: {
  },
  computed: { // 组件右侧设置
    boxStyle() {
      const {
        // color,
        fontSize, // 字体大小
        textAlign, // 文本位置
        fontNormal, // 字体形状
        fourBorderRadius, // 圆角边框
      } = this.options;
      const {
        bold, italic, underLine,
      } = fontNormal;
      const { bgcolor } = this.data; // 背景颜色
      const {
        left,
        right,
        top,
        bottom,
      } = fourBorderRadius;
      return {
        // color,
        fontSize: `${fontSize}px`,
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: underLine ? 'underline' : 'none',
        textAlign,
        backgroundColor: bgcolor,
        borderRadius: `${top}px ${right}px ${bottom}px ${left}px`,
      };
    },
    options() {
      return this.data.data.componentData;
    },
  },
  mounted() {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.url-box {
  caret-color: transparent;
  word-wrap: break-word;
  height: 100%;
  width: 100%;

  a {
    text-decoration: none;  color: black 
  }
  a:hover {
    text-decoration: underline;
    color: rgb(65, 193, 243);
  }
}
</style>
