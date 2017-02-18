import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
	//贵重物品
	"valuables":[
	{"id":1,"name":"百事可乐","amount":1,"price":10,"size":"200ml","remark":"无"},
	{"id":2,"name":"项链","amount":1,"price":10000,"size":"1","remark":"珀金"}
	],
	//订单管理
	"orders":{
		"apply":{
			"list":[
				{"name":"cyl","date":"2016-12-12 20:30:00","id":1,"cargoName":"剪刀","remainAmount":12,"reqAmount":1,"remark":"剪刀剪刀我的剪刀"},
				{"name":"pbb","date":"2016-12-12 20:30:00","id":2,"cargoName":"橡皮","remainAmount":12,"reqAmount":1,"remark":"油条和橡皮是好朋友"},

			],
			"passed":[
				{"name":"pbb","date":"2016-12-12 20:30:00","id":3,"cargoName":"橡皮","reqAmount":1,"passAmount":1,"storageID":15,"position":12},
				
			],
			"rejected":[
				{"name":"cyl","date":"2016-12-12 20:30:00","id":4,"cargoName":"橡皮","reqAmount":1,"passAmount":1,"storageID":15,"position":12},
			],
		},
		"borrow":{
			"list":[
				{"name":"cyl","date":"2016-12-12 20:30:00","id":5,"cargoName":"剪刀","remainAmount":12,"reqAmount":1,"remark":"剪刀剪刀我的剪刀"},
				{"name":"pbb","date":"2016-12-12 20:30:00","id":6,"cargoName":"橡皮","remainAmount":12,"reqAmount":1,"remark":"油条和橡皮是好朋友"},

			],
			"passed":[
				{"name":"pbb","date":"2016-12-12 20:30:00","id":7,"cargoName":"橡皮","reqAmount":1,"passAmount":1,"storageID":15,"position":12},
				
			],
			"rejected":[
				{"name":"cyl","date":"2016-12-12 20:30:00","id":8,"cargoName":"橡皮","reqAmount":1,"passAmount":1,"storageID":15,"position":12},
			],
		},
		"preOrder":{
			"list":[
				{"name":"cyl","date":"2016-12-12 20:30:00","id":9,"cargoName":"剪刀","remainAmount":12,"reqAmount":1,"remark":"剪刀剪刀我的剪刀","isFold":true},
				{"name":"pbb","date":"2016-12-12 20:30:00","id":10,"cargoName":"橡皮","remainAmount":12,"reqAmount":1,"remark":"油条和橡皮是好朋友","isFold":true},

			],
			"passed":[
				{"name":"cmm","date":"2016-12-12 20:30:00","id":11,"cargoName":"橡皮","reqAmount":1,"passAmount":1,"storageID":15,"position":12},
				
			],
			"rejected":[
				{"name":"mmc","date":"2016-12-12 20:30:00","id":12,"cargoName":"橡皮","reqAmount":1,"passAmount":1,"storageID":15,"position":12},
			],
		}

	},


	//商品列表 申领｜借用
	"cargoApply":{
		"fruit":[
			{"name":"马铃薯","id":1,"imgURL":require("../assets/products/tudou.jpg"),"storageID":12,"position":12,"amount":1},
			{"name":"苹果","id":2,"imgURL":require("../assets/products/tudou.jpg"),"storageID":12,"position":12,"amount":1},
		],
		"candy":[
			// {"name":"棉花糖","imgURL":"../assets/products/tudou.jpg","storageID":13,"position":13,"amount":5},
		],
		"bread":[
			{"name":"全麦面包","id":3,"imgURL":require("../assets/products/tudou.jpg"),"storageID":13,"position":13,"amount":5},
		],
		"chips":[
			{"name":"乐事","id":4,"imgURL":require("../assets/products/tudou.jpg"),"storageID":13,"position":13,"amount":5},
		],
		"snack":[
			{"name":"辣条","id":5,"imgURL":require("../assets/products/tudou.jpg"),"storageID":13,"position":13,"amount":5},
		],
		"drink":[
			{"name":"啤酒","id":6,"imgURL":require("../assets/products/tudou.jpg"),"storageID":13,"position":13,"amount":5},
		],
	},
	"cargoBorrow":{
		"fruit":[
			{"name":"马铃薯","id":1,"imgURL":require("../assets/products/tudou.jpg"),"storageID":12,"position":12,"amount":1},
			{"name":"苹果","id":2,"imgURL":require("../assets/products/tudou.jpg"),"storageID":12,"position":12,"amount":1},
		],
		"candy":[
			// {"name":"棉花糖","imgURL":"../assets/products/tudou.jpg","storageID":13,"position":13,"amount":5},
		],
		"bread":[
			{"name":"全麦面包","id":3,"imgURL":require("../assets/products/tudou.jpg"),"storageID":13,"position":13,"amount":5},
		],
		"chips":[
			{"name":"乐事","id":4,"imgURL":require("../assets/products/tudou.jpg"),"storageID":13,"position":13,"amount":5},
		],
		"snack":[
			{"name":"辣条","id":5,"imgURL":require("../assets/products/tudou.jpg"),"storageID":13,"position":13,"amount":5},
		],
		"drink":[
			{"name":"啤酒","id":6,"imgURL":require("../assets/products/tudou.jpg"),"storageID":13,"position":13,"amount":5},
		],
	},


	//商品分类列表  申领｜借用
	"typeApply":[
		{"id":1,"name":"水果专区","abbreviation":"fruit"},
		{"id":2,"name":"糖果专区","abbreviation":"candy"},
		{"id":3,"name":"面包专区","abbreviation":"bread"},
		{"id":4,"name":"薯片专区","abbreviation":"chips"},
		{"id":5,"name":"零食","abbreviation":"snack"},
		{"id":6,"name":"饮料","abbreviation":"drink"},
	],
	"typeBorrow":[
		{"id":1,"name":"水果专区","abbreviation":"fruit"},
		{"id":2,"name":"糖果专区","abbreviation":"candy"},
		{"id":3,"name":"面包专区","abbreviation":"bread"},
		{"id":4,"name":"薯片专区","abbreviation":"chips"},
		{"id":5,"name":"零食","abbreviation":"snack"},
		{"id":6,"name":"饮料","abbreviation":"drink"},
	],
};
export default new Vuex.Store({
  state,
  mutations,
  actions
})

