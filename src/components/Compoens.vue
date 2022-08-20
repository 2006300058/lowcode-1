<!-- 左侧展示界面 -->
<template>
    <div class="components-box">
      <div class="header-logo">
        CEditor
      </div>
      <div class="container">
        <!-- <div class="container-header">组件库</div> -->
            <el-collapse>
                <el-collapse-item title="组件" name="1">
                  <div
                    v-for="item in cList.filter(v => v.type === 'normal')"
                    :key="item.name"
                    class="component-card"
                    draggable="true"
                    @dragstart="(e) => handleDragStart(e, item)"
                  >
                    <div class="card-top"
                      :style="{
                        width: '100%',
                        height: '100%',
                        background: `url(${item.imgSrc})`,
                        backgroundSize: '40%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }"
                    >
                    </div>
                    <div class="card-bottom">
                      {{ item.label }}
                    </div>
                  </div>
                </el-collapse-item>
            </el-collapse>
      </div>
    </div>
</template>
<script>
export default {
  props: {},
  components: {
  },
  data() {
    return {
      cList: [
        {
          name: 'text',
          label: '文本框',
          type: 'normal',
          imgSrc: 'https://www.logosc.cn/oss/icons/2022/05/05/e7aedc633f05256d8de1bc9829d278d2.png',
        },
        {
          name: 'table',
          label: '表格',
          type: 'normal',
          imgSrc: 'https://www.logosc.cn/oss/icons/2022/04/01/3b28c2d6b57b746d62d6ace1fc5534cb.png',
        },
        {
          name: 'image',
          label: '图片',
          type: 'normal',
          imgSrc: 'https://www.logosc.cn/oss/icons/2022/07/03/e35782f317fbcbaa5479a455cde3b040.png',
        },
        {
          name: 'rect',
          label: '按钮',
          type: 'normal',
          imgSrc: 'https://www.logosc.cn/oss/icons/2022/04/13/0571e1e656651c968eed1984c9acdedc.png',
        },
        {
          name: 'url',
          label: '链接',
          type: 'normal',
          imgSrc: 'https://www.logosc.cn/oss/icons/2022/06/28/a098ee02975346f69c617c2dc55b901a.png',
        },
        {
          name: 'video',
          label: '视频',
          type: 'normal',
          imgSrc: 'https://www.logosc.cn/oss/icons/2022/08/09/01f7f7457b656a8f4eac8e7f4164d76d.png',
        },
        {
          name: 'bar',
          label: '柱状图',
          type: 'normal',
          imgSrc: 'https://static.thenounproject.com/png/23114-200.png',
        },
        {
          name: 'line',
          label: '折线图',
          type: 'normal',
          imgSrc: 'https://www.logosc.cn/oss/icons/2021/12/23/db9175ee65b583e686e95a6577bd0f77.png',
        },
      ],
    };
  },
  methods: {
    handleDragStart(e, data) {
      e.dataTransfer.setData('componentId', data.name);
    },
  },
};
</script>
<style lang="less" scoped>
.components-box {
  width: 355px;
  box-shadow: 4px 0px 6px rgba(221, 221, 221, 0.726);
  .header-logo {
    padding: 20px;
    border-bottom: .02666667rem solid #ebedf0;
  }
  .container {
    .container-header {
      padding: 20px;
    }
    // /deep/ .el-collapse {
    //   overflow: auto;
    // }
    /deep/ .el-collapse-item__header {
      padding-left: 20px;
    }
    /deep/ .el-collapse-item__content {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
    }
    .drag {
      display: flex;
      flex-wrap: wrap;
    }
    .component-card {
      width: 145px;
      height: 98px;
      display: flex;
      margin-right: 11px;
      margin-bottom: 20px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: 0.2s linear;
      cursor: pointer;
      overflow: hidden;
      box-shadow: 0 0 5px 0 #dcdade;
      border-radius: 4px;
      &:hover {
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 16%),
        0 3px 6px 0 rgba(0, 0, 0, 12%),
        0 5px 12px 4px rgba(0, 0, 0, 9%);
        .card-top {
          transform: scale(1.2);
        }
      }
      &:last-child {
        margin-right: auto;
      }
      .card-top {
        font-size: 15px;
        color: #000;
        font-family:'Gill Sans', 'Gill Sans MT',
        Calibri, 'Trebuchet MS', sans-serif;
        transition: 0.2s linear;
      }
      .card-bottom {
        padding: 5px 0px;
        color: #5c5b5b;
      }
    }
  }
}
</style>
