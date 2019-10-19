<template>
  <div class="main">
    <LeftMenu :menus='menus'/>
  </div>
</template>

<script>
import axios from 'axios';

import LeftMenu from './Layout/LeftMenu';

export default {
  name: 'layout',
  components: { LeftMenu },
  data(){
    return {
      menus: [], // 菜单列表
    }
  },
  mounted(){
    axios.post('/api/menus').then(res => {
      this.menus = res.data.data;
      console.log(this.menus)
    })
  }
}
</script>