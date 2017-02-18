<template>
<div id = "viewProducts">
	<div v-for = "(item,index) in typesApply" v-if = "$route.params.appBorr == 'apply'">
		<div v-if = "item.abbreviation == $route.params.type">
			<h2>申请入库</h2><span>{{item.name}}</span>

			<div v-for = "(valueArray,name) in cargoesApply" v-if="name == item.abbreviation">
				<p v-if = "valueArray.length == 0">还没有商品</p>
				<div class = "items" v-else v-for = "(cargoObj,index) in valueArray">
					<p style="display:none">{{cargoObj.name}}</p>
					<p><img v-bind:src = "cargoObj.imgURL" style = "width:100px;"/>{{cargoObj.name}}</p>
					<p>所属仓库<span class = "storageID">{{cargoObj.storageID}}</span></p>
					<p>申领位置<span class = "position">{{cargoObj.position}}</span></p>
					<p>入库数量<span class = "amount">{{cargoObj.amount}}</span></p>
					<p>操作<span  class = "delete" v-on:click = "deleteCargo($event,cargoObj.id,'apply')">删除</span><span class= "add" v-on:click = "storeCargo($event,cargoObj.id,'apply')">入库</span></p>
				</div>
			</div>
		</div>
	</div>
	<div v-for = "(item,index) in typesBorrow" v-if = "$route.params.appBorr == 'borrow'">
		<div v-if = "item.abbreviation == $route.params.type">
			<h2>借用入库</h2><span>{{item.name}}</span>
			<div v-for = "(valueArray,name) in cargoesBorrow" v-if="name == item.abbreviation">
				<p v-if = "valueArray.length == 0">还没有商品</p>
				<div class = "items" v-else v-for = "(cargoObj,index) in valueArray">
					<p style="display:none">{{cargoObj.name}}</p>
					<p><img v-bind:src = "cargoObj.imgURL" style = "width:100px;"/>{{cargoObj.name}}</p>
					<p>所属仓库<span class = "storageID">{{cargoObj.storageID}}</span></p>
					<p>申领位置<span class = "position">{{cargoObj.position}}</span></p>
					<p>入库数量<span class = "amount">{{cargoObj.amount}}</span></p>
					<p>操作<span  class = "delete" v-on:click = "deleteCargo($event,cargoObj.id)">删除</span><span class= "add" v-on:click = "storeCargo($event,cargoObj.id,'borrow')">入库</span></p>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		
		data(){
			return{
				
			}
		},
		mounted(){
		},
		computed:{

			//全局物资分类
			typesApply(){
				return this.$store.state.typeApply;
			},
			typesBorrow(){
				return this.$store.state.typeBorrow;
			},
			//全局物资
			cargoesApply(){
				return this.$store.state.cargoApply;
			},
			cargoesBorrow(){
				return this.$store.state.cargoBorrow;
			},
		},
		watch:{
			//复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：
			'$route'() {
				// alert(this.$route.params.type);
			},
			// '$route.params.type'(){
				// 	//检查物品种类并显示
				// 	for (name in this.types){
					// 		this.types[name]  = false;
				// 	};
				// 	this.types[this.$route.params.type] = true;
				// 	console.log(this.$route.params.type);
			// }
		},
		methods:{
			deleteCargo(e,cargoId,appBorr){
				// console.log(appBorr);

				var cargo = {
					"appBorr":appBorr,
					"cargoID":cargoId
				};
				// console.log(cargo.appBorr);
				this.$store.dispatch("deleteCargo",cargo);
				//
			},
			storeCargo(e,cargoId,appBorr){
				// console.log(arguments[1]);
				// console.log(arguments[0]);
				var cargo = {
					"appBorr":appBorr,
					"cargoID":cargoId
				};
				this.$store.dispatch("storeCargo",cargo);

			},
		}
	}
</script>
<style lang="scss">
#viewProducts{
	
}
.items{
	background-color:#fff;
	margin-top:10px;
	// box-shadow: 1px -2px #D2D6DE;
	// border:1px solid red;
	padding:10px 0 ;
	&>*{
	// box-shadow:0px 1px #D2D6DE;
	// border:1px solid red;
	padding:0 20px;
	line-height: 12px;
	}
	span{
		float:right;
		margin-right: 10px;
	}
}
.add{
	background-color:#00BEED;
	padding:0 5px;
	border-radius:5px;
	line-height:30px;
	font-size:12px;
}
.delete{
	background-color:#DD4B39;
	padding:0 5px;
	border-radius:5px;
	line-height:30px;
	font-size:12px;
}
.position,.storageID,.amount{
	padding:0 5px;
	line-height:18px;
	background-color:#00BEED;
	border-radius:8px;
	font-size:12px;
}
.amount{
	background-color:#00A65A;
}
.storageID{
	background-color:#0073B7;
}
</style>