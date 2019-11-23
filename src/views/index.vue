<template>
  <div class="main">
    <LeftMenu :menus='menus' :isCollapse="isCollapse"/>
    <Header :isCollapse="isCollapse" @onCollapseChange='onCollapseChange'/>
    <Login />
  </div>
</template>

<script>
import axios from 'axios';

import LeftMenu from './Layout/LeftMenu';
import Header from './Layout/Header';
import Login from './Login'

export default {
  name: 'layout',
  components: { LeftMenu, Header, Login },
  data(){
    return {
      menus: [], // 菜单列表
      isCollapse: false,
    }
  },
  mounted(){
    axios.post('/api/menus').then(res => {
      this.menus = res.data.data;
      console.log(this.menus)
    })
  },
  methods: {
    onCollapseChange(val) {
      this.isCollapse = val;
    }
  }
}
</script>