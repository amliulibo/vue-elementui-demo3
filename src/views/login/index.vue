<!--
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-03 17:13:06
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-03 18:05:11
 * @FilePath: \vue-elementui-demo3\src\views\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="login">
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			
			<el-form-item label="姓名" prop="name">
			    <el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			  
		  <el-form-item label="密码" prop="pass">
		    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
		  </el-form-item>
		  
		   <el-button>确认</el-button>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ruleForm:{
					name:"",
					pass:"",
				},
				rules:{
					name: [
					            { required: true, message: '请输入活动名称', trigger: 'blur' },
					            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					          ],
					pass: [
					            { required: true, message: '请输入密码', trigger: 'blur' },
					            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					          ],							  
				}
			}
		}
	}
</script>

<style>
</style>
