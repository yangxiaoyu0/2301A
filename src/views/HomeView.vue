<template>
	<div class="content-bxo">
		<div class="loginform">
			<img src="../../public//imgs/login-logo.758b34e9.png" alt="">
			<div class="fromdiv">
				<span class="el-icon-user-solid"></span>
				<el-input placeholder="请输入手机号" v-model="username" ></el-input>
			</div>
			<div class="fromdiv">
				<span class="el-icon-lock"></span>
				<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
			</div>
			<el-button @click="login" class="loginbtn" type="primary">登录</el-button>
		</div>
	</div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
	// 组件状态值
	data() {
		return {
			username:'13800000002',
			password:'hm#qd@23!'
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件方法
	methods: {
		login() {
			this.requset.post(this.requset.addURL('/sys/login'), {
				"mobile":this.username,
				"password": this.password
			}).then(res => {
				Cookies.set('token',res.data.data)
				this.$router.push('/about')
			})
		}
	},
	// 组件名称
	name: 'demo',
	// 组件参数 接收来自父组件的数据
	props: {},
	// 局部注册的组件
	components: {},
	created() {
		console.log(process.env.NODE_ENV)
	}
}
</script>

<style lang="scss" scoped>
.content-bxo {
	width: 100vw;
	height: 100vh;
	background-image: url(../../public//imgs/login.c75bab6d.jpg);
	display: flex;
	justify-content: center;
	align-items: center;
}

.loginform {
	width: 520px;
	padding: 40px;
}
.fromdiv{
	background-color: beige;
	line-height: 25px;
	margin: 20px 0;
	padding: 5px 15px;
	display: flex;
	align-items: center;
	background-color: #d5e5ff;
	border-radius: 5px;
	span{
		color: #667da3;
	}
}
::v-deep .el-input__inner {
	background-color: transparent;
	border: 0;
	color: #68b0fe;
}
.loginbtn{
	width: 100%;
	background-color: #407ffe;
	height: 50px;
	border: 0;
}
</style>
