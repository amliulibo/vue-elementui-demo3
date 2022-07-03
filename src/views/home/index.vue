<!--
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-03 17:13:20
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-03 21:54:56
 * @FilePath: \vue-elementui-demo3\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div>
		<el-container>
		  
		  <el-container>
		    <el-aside width="200px">
            <navMenu></navMenu>
        </el-aside>
		    <el-container>
          <el-header>Header</el-header>
		      <el-main><router-view/></el-main>
		      <!-- <el-footer>Footer</el-footer> -->
		    </el-container>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
import navMenu from "./navMenu.vue"
export default{
  components:{navMenu}
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
