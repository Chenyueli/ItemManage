<template>
<div class = "container">
	<div id = "header">
		<div>
			<span><i class="fa fa-navicon" aria-hidden="true"></i></span>
			<div class = "logout">
				<i class="fa fa-power-off" aria-hidden="true"></i>
				<router-link to="/login">admin</router-link>
			</div>
		</div>
	</div>
	<div id = "container">
		<router-view></router-view>
	</div>
	<div id = "nav">
		<h2 class = "title">管理系统</h2>
		<div class = "userInfo">
			<i class="fa fa-power-off" aria-hidden="true"></i>
			<div>
				<h2>chenyueli</h2>
				<p>Online</p>
			</div>
		</div>
		<div class = "nav-list" v-on:click = "navActive($event)">
			<div class = "applyNav"v-on:click.self="toggleShow('isApplyHide',$event)"><i class="fa fa-apple" aria-hidden="true"></i>申领入库
				<ul v-bind:class =' [{hidden :isApplyHide}]'>
					<li v-for = "(type,index) in typesApply"><i class="fa fa-apple" aria-hidden="true"></i><router-link  :to="{name:'myproducts',params:{appBorr:'apply',type:type.abbreviation}}">{{type.name}}</router-link></li>
					<li><i class="fa fa-plus-circle" aria-hidden="true"></i>
					<router-link :to="{name:'addCargo',params:{appBorr:'apply'}}">新增物资</router-link>

					</li>
					<li><i class="fa fa-cog" aria-hidden="true"></i>
					<router-link :to= "{name:'manageSort',params:{appBorr:'apply'}}">分类管理</router-link>
				</ul>
			</div>
			<div v-on:click.self="toggleShow('isBorrowHide',$event)"><i class="fa fa-eraser" aria-hidden="true"></i>借用入库
				<ul v-bind:class =' [{hidden :isBorrowHide}]'>
					<li v-for = "(type,index) in typesBorrow"><i class="fa fa-apple" aria-hidden="true"></i><router-link  :to="{name:'myproducts',params:{appBorr:'borrow',type:type.abbreviation}}">{{type.name}}</router-link></li>
					<li><i class="fa fa-plus-circle" aria-hidden="true"></i>
					<router-link :to="{name:'addCargo',params:{appBorr:'borrow'}}">新增物资</router-link>
					</li>
					<li><i class="fa fa-cog" aria-hidden="true"></i>
						<router-link :to= "{name:'manageSort',params:{appBorr:'borrow'}}">分类管理</router-link>
					</li>
				</ul>
			</div>
			<div v-on:click.self="toggleShow('isOrderHide',$event)"><i class="fa fa-birthday-cake" aria-hidden="true"></i>订单管理
				<ul v-bind:class =' [{hidden :isOrderHide}]'>
					<li>
						<p  v-on:click="toggleShow('isApplyOrderHide',$event)"><router-link :to="{name:'manageOrder',params:{orderType:'apply',status:'list'}}">申请订单</router-link></p>
						<ul v-bind:class =' [{hidden :isApplyOrderHide}]'>
							<li><router-link :to="{name:'manageOrder',params:{orderType:'apply',status:'passed'}}">已通过</router-link></li>
							<li><router-link :to= "{name:'manageOrder',params:{orderType:'apply',status:'rejected'}}">已拒绝</router-link></li>
						</ul>
					</li>
					<li>
						<p  v-on:click="toggleShow('isBorrowOrderHide',$event)"><router-link :to="{name:'manageOrder',params:{orderType:'borrow',status:'list'}}">借用订单</router-link></p>
						<ul v-bind:class =' [{hidden :isBorrowOrderHide}]'>
							<li><router-link :to="{name:'manageOrder',params:{orderType:'borrow',status:'passed'}}">已通过</router-link></li>
							<li><router-link :to= "{name:'manageOrder',params:{orderType:'borrow',status:'rejected'}}">已拒绝</router-link></li>
						</ul>
					</li>
					<li>
						<p  v-on:click="toggleShow('isPreOrderHide',$event)"><router-link :to="{name:'manageOrder',params:{orderType:'preOrder',status:'list'}}">补购订单</router-link></p>
						<ul v-bind:class =' [{hidden :isPreOrderHide}]'>
							<li><router-link :to="{name:'manageOrder',params:{orderType:'preOrder',status:'passed'}}">已通过</router-link></li>
							<li><router-link :to= "{name:'manageOrder',params:{orderType:'preOrder',status:'rejected'}}">已拒绝</router-link></li>
						</ul>
					</li>
					
				</ul>
			</div>
			<div><i class="fa fa-history" aria-hidden="true"></i><router-link to="/home/manageValuable">贵重物品</router-link></div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		name:"home",
		data(){
			return {
				//导航栏是否展开
				isApplyHide:true,
				isBorrowHide:true,
				isOrderHide:true,
				isApplyOrderHide:true,
				isBorrowOrderHide:true,
				isPreOrderHide:true,

				//商品分类
				typesApply:this.$store.state.typeApply,
				typesBorrow:this.$store.state.typeBorrow,
			}
		},
		mounted () {
				// alert(this.$route.path);
			// this.$router.go(-1);
			// console.log(this.$router.path);
			// console.log(this.$route.params);
		},
		methods:{
			toggleShow(isEleHide,e){
				// console.log(e.target.firstElementChild.classList);
				switch (isEleHide){
					case "isOrderHide":
					this.isOrderHide = !this.isOrderHide;
					this.isApplyHide = true;
					this.isBorrowHide = true;
					break;
					case "isApplyHide":
					this.isApplyHide = !this.isApplyHide;
					this.isOrderHide = true;
					this.isBorrowHide = true;
					break;
					case "isBorrowHide":
					this.isBorrowHide = !this.isBorrowHide;
					this.isOrderHide = true;
					this.isApplyHide = true;
					break;
					case "isApplyOrderHide":
					this.isApplyOrderHide = false;
					this.isBorrowOrderHide = true;
					this.isPreOrderHide = true;
					break;
					case "isBorrowOrderHide":
					this.isBorrowOrderHide = false;
					this.isApplyOrderHide = true;
					this.isPreOrderHide = true;
					break;
					case "isPreOrderHide":
					this.isPreOrderHide = false;
					this.isApplyOrderHide = true;
					this.isBorrowOrderHide = true;
					break;
				}
			},
			navActive(e){
				console.log(e.target.tagName.toLowerCase());
				if(e.target.tagName.toLowerCase() == "a"){
					e.target.classList.add('active');
				}
			},
			
		},
		computed:{
// 			types(){
// 				// console.log(this.$store);
// 			// console.log(this.$store.state.typeList.id1);
//          	 // return this.$store.state.typeList;
//          	 return this.$store.state.typeApply;
// // 
// 			},
		}
	}
</script>
<style lang= "scss">
.tb {
border: 1px solid red;
}
* {
box-sizing: border-box;
/*font-size:16px;*/
font-family: "SimHei";
font-weight: 400;
/*margin: 0;*/
/*border: 0;*/
}
a{
	text-decoration: none;
}
#header,.title{
	line-height: 50px;
	background-color: #3C8DBC;
}
#header,#container{
	width:80%;
	float:right;
}
#header{
	padding:0 10px;
	color: #fff;
	a{
		color:#fff;
	}
	.logout{
		float:right;
		margin-right: 10px;
	}
}
#nav{
	width:20%;
	background-color: #222D31;
	min-height: 800px;
	color: #fff;
	a{
		color:#fff;
	}
	.active{
		color:red !important;
		/*display: none;*/
	}
	
}
.title{
	background-color: #3C8DBC;
	text-align: center;
	font-size:22px;
}
.userInfo{
	line-height: 50px;
	display: flex;
	.fa-power-off{
		font-size: 40px;
		/*float:left;*/
	/*line-height: 50px;*/
		padding:10px;
	}
	h2,p{
		/*margin-left:50px;*/
		/*height: 40px;*/
		margin:0;
		padding:0;
		line-height: 20px;
	}
}
#container{
	/*border:1px solid red;*/
	padding:30px;
	background-color:#ECF0F5;
	min-height:800px;
}
/*-------------------------------------------------*/
.nav-list{
	padding-top: 10px;
	padding-left:16px;
	padding-bottom:80px;
	ul{
		margin-left: -20px;
	}
	li{
		.fa{
			margin-right: 16px;
		}
		list-style-type: none;
		line-height: 40px;
	}
	&>div{
		line-height: 40px;
		.fa{
			margin-right: 10px;
		}
		/*margin-left:10px;*/
	}
}
</style>