<template>
    <el-radio-group
      v-model="curValue"
      @change="handleChangeVal"
      v-bind="$attrs"
    >
      <el-radio-button
        v-for="item in options"
        :key="item.key"
        :label="item.key"
      >
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      require: true,
      default: null,
    },
    options: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      curValue: this.value,
    };
  },
  methods: {
    handleChangeVal(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style>

</style>
