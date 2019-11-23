<template>
  <div class="app-header">
    <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click='handleCollapse'></i>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  props: ['isCollapse'],
  methods: {
    handleCollapse() {
      this.$emit('onCollapseChange', !this.isCollapse);
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
}
</style>