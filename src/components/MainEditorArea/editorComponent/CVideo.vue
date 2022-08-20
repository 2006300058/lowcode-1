<template>
    <div
    class="video-box"
    :style="boxStyle"
    >
      <video-player
        class="video-player vjs-custom-skin"
        ref="VideoPlayer"
        :playsinline="true"
        :options="playerOptions"
      >

      </video-player>
    </div>
</template>
// 视频组件
<script>

   export default {
    data() {
      return {
      };
    },
     props: {
        data: {
            type: Object,
            require: true,
            default: null,
        },
     },
      components: {
      },
      computed: {
         playerOptions() {
          return {
            playbackRates: [0.5, 0.75, 1.0, 1.5, 2.0],
          autoplay: false,
          mtued: false,
          loop: false,
          preload: 'auto',
          language: 'zh-CN',
          aspectRatio: '16:9',
          fluid: false,
          sources: [{
            type: 'video/mp4',
            src: `${this.options.videoUrl}` ? `${this.options.videoUrl}` : 'https://kvideo01.youju.sohu.com/f5ac14c3-4bc3-406f-87af-efacf30a4af32_0_0.mp4',
          }],
          poster: 'https://pic1.zhimg.com/v2-df081aadcb6c5b35b7ae28253875d5a8_b.png',
          notSupportedMessage: '无法播放！',
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: false,
          },
          };
        },
        boxStyle() {
          const {
            fourBorderRadius,
          } = this.options;
          const {
            left,
            right,
            top,
            bottom,
          } = fourBorderRadius;
          return {
           // backgroundVideo: `url(${this.options.videoUrl})`,
            borderRadius: `${top}px ${right}px ${bottom}px ${left}px`,
          };
        },
        options() {
          return this.data.data.componentData;
        },
      },
   };
</script>

<style lang="less" scoped>
.video-box {
  //caret-color: transparent;
  overflow: auto;
  height: 100%;
  width: 100%;
  display: block;
}
</style>
