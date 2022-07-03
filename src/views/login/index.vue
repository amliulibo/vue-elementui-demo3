<template>
	<div class="login">
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			
			<el-form-item label="姓名" prop="name">
			    <el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			  
		  <el-form-item label="密码" prop="pass">
		    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
		  </el-form-item>
		  
		  
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
