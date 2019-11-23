<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        router
        mode="vertical"
        background-color="#304156"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        class="el-menu-vertical"
      >
        <LeftMenuItem
          v-for='menu in menus'
          :key="menu.name"
          :menu='menu'
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import LeftMenuItem from './LeftMenuItem';

export default {
  name: 'left-menu',
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    isCollapse: {
      type: Boolean,
      isReqiured: true
    }
  },
  components: {
    LeftMenuItem
  },
  mounted() {
    
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
.sidebar-container {
  width: 220px;
  height: 100%;
  position: fixed;
  font-size: 0px;
  bottom: 0;
  left: 0;

  .el-scrollbar {
    height: 100%;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }

  .el-menu {
    border: none;
    height: 100%;
  }
}
</style>