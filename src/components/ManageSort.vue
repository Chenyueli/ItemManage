<template>
<div id = "manageSort">
	<h2>分类列表 <span style = "font-size:12px;">当前有{{types.length}}个分类 </span></h2>
	
	<table style = "width:100%;text-align:center;line-height:26px; " border='1'>
		<thead>
			<tr>
				<th>分组ID</th><th>分组名字</th><th>操作</th>
			</tr>
		</thead>
		<tbody v-if="appBorr.apply">
			<tr>
				<td>1</td><td><input value = "水果专区"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>2</td><td><input value = "糖果专区"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>3</td><td><input value = "面包专区"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>4</td><td><input value = "薯片专区"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>5</td><td><input value = "零食"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>6</td><td><input value = "饮料"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
		</tbody>
		<tbody v-if="appBorr.borrow">
			<tr>
				<td>1</td><td><input value = "borrow专区"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>2</td><td><input value = "糖果专区"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>3</td><td><input value = "面包专区"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>4</td><td><input value = "薯片专区"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>5</td><td><input value = "零食"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
			<tr>
				<td>6</td><td><input value = "饮料"></td><td><button v-on:click.prevent="updateType($event)">编辑</button><button v-on:click.prevent = "deleteType($event)">删除</button></td>
			</tr>
		</tbody>
	</table>
	<div>
		<span>新增分区(*必填):</span>
		<input v-model = "newTypeName" placeholder="分区名称">
		<input v-model = "newTypeAbbr"placeholder="英文简写">
		<button v-on:click.prevent = "addType($event)">确认添加</button>
	</div>
</div>
</template>
<style lang = "scss">
#manageSort{
	background-color: #fff;
	padding:20px;
	table{
		input{
		text-align: center;
		line-height: 16px;
		padding:5px;
		font-size:16px;
		border:none;
	}
	margin-bottom: 40px;
	input{
		text-align: center;
		}
	}
}
</style>
<script>
	export default{
		data(){
			return {
				//分类列表
				typeNum : 3,
				// types:this.$store.state.typeApply,
				appBorr:{
					"apply":false,
					"borrow":false,
				},
				//新增分区
				newTypeName:"",
				newTypeAbbr:""
			}
		},
		mounted () {
				// alert(this.$route.name);
			// this.$router.go(-1);
			// console.log(this.$router.path);

			this.appBorr[this.$route.params.appBorr] = true;

				// console.log(this.$route.params.appBorr);
			// console.log("sort manage");
			
		},
		watch:{
		'$route.params.appBorr'(){
				//检查物品种类并显示
				for (name in this.appBorr){
					this.appBorr[name]  = false;
				};
				this.appBorr[this.$route.params.appBorr] = true;
				console.log(this.$route.params.appBorr);
			}
		},
		methods:{
			//移除某元素
			removeElement(_element){
				// console.log(_element);
				var _parentElement = _element.parentNode;
				if(_parentElement){
					_parentElement.removeChild(_element);
					}
				},
			updateType (e){
				var id = e.target.parentElement.parentElement.children[0].innerText,
					newType = e.target.parentElement.parentElement.children[1].children[0].value;
				// console.log(e.target.parentElement.parentElement.children[1].children[0].value);
				// console.log(id);
				// console.log(newType);
				var type ={
					"id":id,
					"name":newType
				};
				//更新导航  向后台发送新type
				this.$store.dispatch('updateType', type);
				
			},
			deleteType(e){
				var id = e.target.parentElement.parentElement.children[0].innerText;
				// console.log(id);
				//更新导航 移除该行 向后台发送删除命令
				this.$store.dispatch('deleteType', id);
				var _tr = e.target.parentElement.parentElement;
				this.removeElement(_tr);
			},
			addType(e) {
				e.prevent;
				if(this.newTypeName == "" || this.newTypeAbbr == ""){
					alert("* 分区名和简写为必填");
				}else{
					var type = {
					name : this.newTypeName,
					"abbreviation" : this.newTypeAbbr,
					appBorr : this.$route.params.appBorr
					};
				//更新导航  向后台发送新type
					this.$store.dispatch('addType', type);
					this.addTr(type);
				}
				
			},
			addTr(type){
				var tbody = document.getElementsByTagName("tbody")[0],
					tr = document.createElement("tr"),
					td = document.createElement("td");
					
				var text = document.createTextNode("none");
					td.appendChild(text);
					tr.appendChild(td);
					tbody.appendChild(tr);
				
				
					td = document.createElement("td");
					tr.appendChild(td);
				var	input = document.createElement("input");
					input.value = type.name;
					td.appendChild(input);
					
				var button = document.createElement('button');
					button.className = "addType";
					text = document.createTextNode("编辑");
					button.appendChild(text);
					td = document.createElement("td");
					td.appendChild(button);
					tr.appendChild(td);

					button = document.createElement("button");
					button.className = "cancel";
					text = document.createTextNode("删除");
					button.appendChild(text);
					td.appendChild(button);

					//给add Button动态 添加事件
					var that = this;
					console.log(tr.children[2].firstChild);
					tr.children[2].firstChild.addEventListener("click",function(e){
						e.prevent;
						that.updateType(e,);
					},false);
					//给cancel Button动态 添加事件
					tr.children[2].lastChild.addEventListener("click",function(e){
						e.prevent;
						that.deleteType(e);
					},false);
			},
		},
		computed:{
			types(){
				// console.log(this.$store);
			// console.log(this.$store.state.typeList.id1);
			// return this.$store.state.typeList;
			return this.$store.state.typeApply;
//
			},
		}
	}
</script>