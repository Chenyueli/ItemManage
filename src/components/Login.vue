<template>
<!-- <div id="icon"><img src="" /></div> -->
<div id="login">
	<h1>订单管理</h1>
	<form>
		<h4>登录到用户中心</h4>
		<input v-model ="cellPhone" type="text" placeholder="手机号" />
		<input v-model = "pwd" type="text" placeholder="密码" />
		<div>
			<input type="checkbox" v-model = "rememberMe" />记住我
			<button @click.prevent= "logIn">登录</button>
		</div>
		<!-- <p>忘了密码</p> -->
		<!-- <p>注册个账号</p> -->
	</form>
</div>
</template>

<script>
    export default {
        name : 'LogTime',
        data() {
            return {
                cellPhone : '',
                pwd : '',
                rememberMe: false,
            }
        },
        mounted () {
			// alert(this.$route.name);	
			// this.$router.go(-1);
			// console.log(this.$router.path);
        	console.log("login page");
    	},
        methods:{
          logIn(){
          	var data = {
          		"cellPhone":this.cellPhone,
          		"pwd":this.pwd,
          		"rememberPwd":this.rememberMe
          	}
          	this.$router.push('/home');
          	alert(data.cellPhone+data.pwd +data.rememberPwd);
          }
        }
    }
</script>
<style lang="scss">
#login{
margin:0 auto;
width:400px;
background:#D2D6DE;
padding:50px ;
margin-top:100px;
h1{
	text-align: center;
}
form{
	background-color:#fff;
	padding:30px;
	h4{
		margin-top:0px;
		text-align: center;
		font-weight: 400;
	}
	&>input{
		height:30px;
		width:100%;
		margin-bottom:15px;
	}
	// &>p{
	// font-size:12px;
	// color:#3C8DBC;
	// }
	&>div{
		line-height: 30px;
	}
	button{
		text-decoration:none;
		margin-left:90px;
		width:60px;
		height:30px;
		background-color:#3C8DBC ;
		color:#FFFFFF;
		cursor:pointer;
	}
	}
}
</style>