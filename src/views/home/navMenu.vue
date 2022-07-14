<!--
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-03 18:29:28
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-04 13:50:42
 * @FilePath: \vue-elementui-demo3\src\views\home\navMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>

<el-menu
      default-active="/index"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
      >
      

      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="/stats">
        <i class="el-icon-menu"></i>
        <span slot="title">数据管理</span>
      </el-menu-item>

      <el-submenu index="/wms">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item index="/wms/list">信息列表1</el-menu-item>
        <el-menu-item index="/wms/list2">信息列表2</el-menu-item>

      </el-submenu>

      
</el-menu>
</template>