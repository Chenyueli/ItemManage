<template>
<div id = "magValuable">
	<div>
		<h2>贵重物品</h2>
		<div>
			<p v-if="valuables.length == 0">无贵重物品</p>
			<table  border="1" v-else >
				<thead>
					<tr>
						<th>名称</th>
						<th>数量</th>
						<th>价格</th>
						<th>规格</th>
						<th>备注</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for = "(item,index) in valuables">
						<td><input v-bind:value = "item.name"></td>
						<td><input v-bind:value = "item.amount"></td>
						<td><input v-bind:value = "item.price"></td>
						<td><input v-bind:value = "item.size"></td>
						<td><input v-bind:value = "item.remark"></td>
						<td><button v-on:click.prevent="editValuable(item)">修改</button><button v-on:click.prevent="deleteValuable(item.id)">删除</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<form>
			<label>名称</label>
			<input type = "text" v-model = "newValuable.name" placeholder="必填"><br/>
			<label>数量</label>
			<input type = "text" v-model = "newValuable.amount" placeholder="必填"><br/>
			<label>价格</label>
			<input type = "text" v-model = "newValuable.price"><br/>
			<label>规格</label>
			<input type = "text" v-model = "newValuable.size"><br/>
			<label>备注</label>
			<input type = "text" v-model = "newValuable.remark"><br/>
			<button v-on:click.prevent="addValuable">添加</button>
		</form>
	</div>
</div>
</template>
<style lang="scss">
#magValuable{
	background-color: #fff;
	padding:20px;
	table{
		width: 100%;
		text-align: center;
		input{
		text-align: center;
		border:none;
		}
	}
	form{
		padding:20px;
		margin-top:20px;
		line-height: 40px;
		border:1px solid ;
		text-align: center;

		input{
			width:40%;
			text-align: center;
			padding:5px;
		}
	}
}
	
</style>
<script>
	export default{
		data(){
			return{
				newValuable:{
					"id":"none",
					"name":"",
					"amount":"",
					"price":"",
					"size":"",
					"remark":"",
				}
			}
		},
		mounted(){
			console.log("贵重物品");
		},
		methods:{
			addValuable(){
				if(this.newValuable.name =="" ||this.newValuable.amount == 0){
						alert("请填写名称和数量");
				}else{
					this.$store.dispatch("addValuable",this.newValuable);
					this.newValuable = {};
				}
			},
			deleteValuable(id){
				console.log(id);
				this.$store.dispatch("deleteValuable",id);
			},
			editValuable(item){
				this.$store.dispatch("updateValuable",item);
			}
		},
		computed:{
			valuables(){
				return this.$store.state.valuables;
			}
		}
	}
</script>