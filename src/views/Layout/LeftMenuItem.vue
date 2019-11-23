<template>
  <div class="menu-item">
    <template v-if="!menu.children || menu.children.length === 0">
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </template>

    <el-submenu
      v-else
      :index="menu.keyword"
    >
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>{{menu.name}}</span>
      </template>

      <template v-for="child in menu.children">
        <left-menu-item
          v-if="child.children && child.children.length > 0"
          :menu="child"
          :key="child.keyword"
        />
        <el-menu-item
          v-else
          :key="child.keyword"
          :index="child.keyword"
        >
          <i class="el-icon-location"></i>
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'left-menu-item',
  props: {
    menu: {
      type: Object,
      default: () => {},
    }
  },
  mounted(){
    // console.log(this.menu)
  }
}
</script>

<style lang="scss">
.menu-item, .is-active {
  .el-submenu__title {
    text-align: left !important;
    color: #fff;
    line-height: 56px;
  }

  .el-icon-menu {
    vertical-align: middle;
    margin-top: -5px;
  }
}
.is-active {
  text-align: left;
  padding: 0 20px !important;
}
</style>