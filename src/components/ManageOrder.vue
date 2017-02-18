<template>
<div id = "manageOrder">
	<!-- {{$route.params.orderType}} -->
	<!-- {{$route.params.status}} -->
	<div>
		<h2 v-if = "orderTypes.apply">申领订单</h2>
		<h2 v-if = "orderTypes.borrow">借用订单</h2>
		<h2 v-if = "orderTypes.preOrder">补购订单</h2>
		<div v-if = "status.list">
			<p v-if = "orders[$route.params.orderType].list.length == 0">无订单</p>
			<div class = "orderList" v-for = "(listArray,value) in orders[$route.params.orderType].list">
				<h3 v-on:click="toggleFold($event)"><span>{{listArray.name}}</span><span style=  "font-size:10px; float:right;">{{listArray.date}}</span></h3>
				<form class = "hidden">
					<label>名称</label>
					<input type = "text" v-model = "listArray.cargoName"><br/>
					<label>剩余数量</label>
					<input type = "text" v-model = "listArray.remainAmount"> <br/>
					<label>请求数量</label>
					<input type = "text" v-model = "listArray.reqAmount"><br/>
					<label v-if = "orderTypes.borrow">归还日期</label>
					<input v-if = "orderTypes.borrow" type = "text" v-model = "listArray.date"><br/>
					<label>备注</label>
					<textarea v-model = "listArray.remark"></textarea><br/>
					<button v-on:click.prevent="dealOrder(listArray,$route.params.orderType,true)">通过</button>
					<button v-on:click.prevent="dealOrder(listArray,$route.params.orderType,false)">拒绝</button>
				</form>
			</div>
		</div>
		<div v-if = "!status.list">
			<p v-if = "orders[$route.params.orderType][$route.params.status].length == 0">无订单</p>
			<div class = "orderList" v-for = "(listArray,value) in orders[$route.params.orderType][$route.params.status]">
				<h3 v-on:click="toggleFold($event)"><span>{{listArray.name}}</span><span style=  "font-size:10px; float:right;">{{listArray.date}}</span></h3>
				<form class = "hidden">
					<label>{{listArray.cargoName}}</label>
					<label>请求数量：{{listArray.reqAmount}}</label>
					<label>通过数量：{{listArray.passAmount}}</label>
					<label>仓库：{{listArray.storageID}}</label>
					<label>位置：{{listArray.position}}</label>
				</form>
			</div>
		</div>
	</div>
</div>
</template>
<style lang="scss">
#manageOrder{
	background-color: #fff;
	padding: 10px 40px;
	form{
		// display: flex;
	}
}
</style>
<script>
	export default{
		data(){
			return{
				oitemName:'',
				remainCount:0,
				description:'',
				applyCount:0,
				orderTypes:{
					apply:true,
					borrow:false,
					preOrder:false,
				},
				status:{
					list:true,
					passed:false,
					rejected:false,
				},
				isOrderShow:false,
			}
		},
		mounted(){
			// console.log("申领订单");
		},
		methods:{
			dealOrder(list,appBorr,isPassed){
				var order = {
					"id":list.id,
					"name":list.name,
					"date":this.getTimeNow(),
					"cargoName":list.cargoName,
					"reqAmount":list.reqAmount,
					"passAmount":0,
					"position":0,
					"storageID":list.storageID,
					"appBorr":appBorr,
					"isPassed":isPassed
				}
				console.log(order.date);
				this.$store.dispatch("passOrder",order);

			},
			toggleFold(e){
				// console.log(e.target.tagName.toLowerCase());
				if(e.target.tagName.toLowerCase() == "h3"){
					e.target.nextElementSibling.classList.toggle("hidden");
				}else{
					console.log(e.target.parentNode)
					e.target.parentNode.nextElementSibling.classList.toggle("hidden");
				}
			},
			getTimeNow(){
				var now = new Date(),
					y = now.getFullYear(),
					mo = now.getMonth()+1,
					d = now.getDate(),
					h = now.getHours(),
					mi = now.getMinutes(),
					s = now.getSeconds(),
					sep = "-",
					sep1 = ":";
					if(mo < 10){
						mo = "0" + mo;
					};
					return y + sep + mo + sep + d + " " + h + sep1 + mi + sep1 + s;
			}
		},
		computed:{
			orders(){
				return this.$store.state.orders
			}
		},

		watch:{
			'$route.params'(){
				//检查订单种类并显示
				for (name in this.orderTypes){
					this.orderTypes[name]  = false;
				};
				for (name in this.status){
					this.status[name]  = false;
				};
				this.orderTypes[this.$route.params.orderType] = true;
				this.status[this.$route.params.status] = true;
				console.log(this.$route.params.orderType);
				// console.log(this.orderTypes[this.$route.params.orderType]);
			}
		}
	}
</script>