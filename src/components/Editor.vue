<template>
    <div class="editor" >
      <div class="editor-header" >
        <div
          :class="`header-undo`"
          @click="handleUndo"
        >
          <icon-font
            size="18"
            title="撤回操作"
            code="&#xe617;"
            :class="`${!canUndo ? 'disable-btn' : ''}`"
            />
        </div>
        <div
          :class="`header-redo`"
          @click="handleRedo"
        >
          <icon-font
            size="18"
            title="前进操作"
            code="&#xe619;"
            :class="`header-redo ${!canRedo ? 'disable-btn' : ''}`"
            />
        </div>
        <el-button  size="mini" title="生成图片" @click="toImage()" :icon="el-icon-download">
        导出图片</el-button>
        <el-button size="mini" title="画布内容转换为JSON" @click="toJSON()">导出JSON数据</el-button>
        <el-button size="mini" title="待定">导出HTML数据</el-button>
      </div>
      <div class="editor-container" ref="imageTofile">
        <DragArea 
          :scale-num="scaleOption"
        >
        </DragArea>
        <div class="scale-tip">
          <span @click="handleAddorSubScale('sub')">
            <icon-font
              code="&#xe607;"
              color="rgb(13, 128, 194)"
              size="20"
            ></icon-font>
          </span>
          <el-slider
            v-model="scaleOption"
            :step="0.1"
            :min="0.2"
            :max="1.5"
            :format-tooltip="scaleTipStyle"
            class="scale-bar"
          ></el-slider>
          <span @click="handleAddorSubScale('add')">
            <icon-font
              code="&#xe608;"
              color="rgb(13, 128, 194)"
              size="20"
            ></icon-font>
          </span>
        </div>
      </div>
    </div>
</template>
<script>
import html2canvas from 'html2canvas';
import { mapGetters } from 'vuex';
import DragArea from './MainEditorArea/dragArea.vue';
import FileSaver from 'file-saver'
export default {
  props: {},
  components: {
    DragArea,
  },
  data() {
    return {
      scaleOption: 1,
    };
  },
  computed: {
    ...mapGetters(['executeOpearation', 'executeIndex',]),
    ...mapGetters(['editorLayout']),
    canUndo() {
      return this.executeIndex > 0;
     
    },
    canRedo() {
      return this.executeIndex < this.executeOpearation.length - 1;
      
    },
  },
  methods: {
    handleAddorSubScale(type) {
      console.log(type);
      if (type === 'sub') {
        this.scaleOption -= 0.1;
      } else {
        this.scaleOption += 0.1;
      }
    },
    scaleTipStyle(val) {
      return `${Math.floor(val * 100)}%`;
    },
    handleUndo() {
      if (!this.canUndo) {
        return;
      }
      this.$store.commit({
        type: 'undo',
      });
    
    },
    handleRedo() {
      if (!this.canRedo) {
        return;
      }
      this.$store.commit({
        type: 'redo',
      });
    
    },

    toJSON() {
      console.log('json' ,this.editorLayout)
      const data = JSON.stringify(this.editorLayout)
      const blob = new Blob([data], {type: ''})
      FileSaver.saveAs(blob, 'data.json')

    },
    // 页面元素转图片
    toImage() {
      console.log('调用');
      // 手动创建一个 canvas 标签
      const canvas = document.createElement('canvas');
      // 获取父标签，意思是这个标签内的 DOM 元素生成图片
      // imageTofile是给截图范围内的父级元素自定义的ref名称
      const canvasBox = this.$refs.imageTofile;
      console.log(canvasBox);
      // 获取父级的宽高
      const width = parseInt(window.getComputedStyle(canvasBox).width, 10);
      const height = parseInt(window.getComputedStyle(canvasBox).height, 10);
      console.log(width, height);
      // 宽高 * 2 并放大 2 倍 是为了防止图片模糊
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      console.log('sdsd');
      const context = canvas.getContext('2d');
      console.log(context);
      context.scale(2, 2);
      const options = {
        backgroundColor: null,
        canvas,
        useCORS: true,
      };
      html2canvas(canvasBox, options).then((canvascap) => {
        // toDataURL 图片格式转成 base64
        const dataURL = canvascap.toDataURL('image/jpeg');
        console.log(dataURL);
        this.downloadImage(dataURL);
      });
    },
    // 下载图片
    downloadImage(url) {
      // 如果是在网页中可以直接创建一个a标签直接下载
      const a = document.createElement('a');
      a.href = url;
      a.download = '发布效果截图';
      a.click();
    },
  },
  mounted() {
  },
};
</script>
<style lang="less" scoped>
.editor {
  flex: 1;
  overflow: hidden;
  .editor-header {
    padding: 20px;
    background: #fff;
    border-left: .02666667rem solid #ebedf0;
    box-shadow: 0px 2px 6px rgba(221, 221, 221, 0.445);
    z-index: 99;
    display: flex;
    .header-undo {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      padding: 5px;
      &:hover {
        background: #e9f1ff;
      }
    }
    .header-redo {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      padding: 5px;
      margin-right: 20px;
      &:hover {
        background: #e9f1ff;
      }
    }
    .disable-btn {
      color: #c8cad4;
      cursor: not-allowed;
    }
  }
  .editor-container {
    width: 100%;
    height: calc(100% - 70px);
     background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0) 10%),
     linear-gradient(360deg, rgba(50, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 20px 20px;
    overflow: auto;
    position: relative;
    /deep/ .scale-tip {
      position: fixed;
      width: 200px;
      //height: 50px;
      bottom: 40px;
      right: 450px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .scale-bar {
        width: 130px;
      }
      .el-slider__runway {
        height: 6px;
        border-radius: 2px;
        margin: 8px 0;
      }
      .el-slider__button-wrapper {
        top: -16px;
        .el-slider__button {
          width: 15px;
          height: 15px;
          border: solid 1px rgb(13, 128, 194);
        }
      }
      .el-slider__bar {
        background-color: rgb(92, 194, 255);
        
        height: 4px;
         border-top-left-radius: 2px;
         border-bottom-left-radius: 2px;
        
      }
    }
  }
}
</style>
