<template>
<div id ="addItems">
	<h2>新增物资</h2><span>New Item</span>
	<form>
		<label>物资名字</label><br/>
		<input type = "text" v-model = "newCargo.name"><br/>
		<label>物资类别</label><br/>
		<select v-model = "newCargo.mytype">
			<option v-for = "type in typesApply">{{type.id}}:{{type.name}}</option>
		</select><br/>
		<label>所属仓库</label><br/>
		<input type = "text" v-model = "newCargo.storageID"><br/>
		<label>具体位置</label><br/>
		<input type = "text" v-model = "newCargo.position"><br/>
		<label>入库数量</label><br/>
		<input type = "text" v-model = "newCargo.amount"><br/>
		<!-- <hr/> -->
		<button v-on:click.prevent="addCargo()">新增</button>
	</form>
</div>
</template>

<script>
	export default{
		data(){
			return{
				newCargo:{
					"name":"鲍鱼",
					"imgURL":require("../assets/products/tudou.jpg"),
					"appBorr": this.$route.params.appBorr,
					"mytype":"1:水果专区",
					"typeID":1,
					"storageID":"1",
					"position":"2",
					"amount":"12",
				}
			}
		},
		mounted(){
			// console.log("新增物资");
		},
		computed:{
			typesApply(){
				return this.$store.state.typeApply;
			},
			typesBorrow(){
				return this.$store.state.typeBorrow;
			},
		},
		methods:{
			addCargo(){
				this.newCargo.typeID = this.newCargo.mytype.split(":")[0];
				console.log(this.newCargo.typeID);
				for(name in this.newCargo){
					if(this.newCargo[name] == ""){
						console.log(name);
						alert("*请完成表单填写");
						break;
					}else{
						this.$store.dispatch("addCargo",this.newCargo);
						var data = {
							"name":this.newCargo.name,
							"amount":this.newCargo.amount,
							"room":this.newCargo.storageID,
							"location":this.newCargo.position,
							"category_id":this.newCargo.mytype,
							"author":'none',
							"borrow_days":12
						};
						console.log(data);
						this.$http.get('/cargo/api/admin/item?m=add',data,{emulateJSON:true}).then( response => {
							console.log(response.status);
							// get object data
							console.log(response.body);
							
						});
						break;
					}
				}

				// alert("提交成功");
				// this.$router.go(-1);
			}
		}
	}
</script>

<style>
#addItems{
		background-color: #fff;
		padding:20px;
		form{
		padding:20px;
		background-color: #fff;
		/*width:80%;*/
		/*margin:0 auto;*/
		}
		input{
			width:80%;
			margin:5px 0px;
		}
		button{
			background-color: #3C8DBC;
			padding:5px;
			border-radius:5px;
			color:#fff;
			/*font-weight: 200;*/
		}
	}
	
</style>