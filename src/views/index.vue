<template>
  <div class="main">
    <LeftMenu :menus='menus' :isCollapse="isCollapse"/>
    <Header :isCollapse="isCollapse" @onCollapseChange='onCollapseChange'/>
    <el-button @click="click">click</el-button>
  </div>
</template>

<script>
import axios from 'axios';

import LeftMenu from './Layout/LeftMenu';
import Header from './Layout/Header';
import Login from './Login';

import saveAs from '../utils/fileSaver';

export default {
  name: 'layout',
  components: { LeftMenu, Header },
  data(){
    return {
      menus: [], // 菜单列表
      isCollapse: false,
    }
  },
  mounted(){
    axios.post('/api/gl/admin/list/data/new-menu').then(res => {
      this.menus = res.data.data;
      console.log(this.menus)
    })
  },
  methods: {
    onCollapseChange(val) {
      this.isCollapse = val;
    },
    click(data){
      saveAs(data);
    }
  }
}
</script>