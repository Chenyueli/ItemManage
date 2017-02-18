import * as types from './mutation-types'

export default {


  //分类管理
  [types.UPDATE_TYPE] (state,type) {
    console.log(state.typeApply);
    console.log(type.id);
    console.log(type.name);
    state.typeApply.forEach(function(item,index){
      // console.log(item.id);
      // console.log(item.name);
      // console.log(item.abbreviation);
      if(item.id == type.id){
        item.name = type.name;
      }
    });
  },

  [types.DELETE_TYPE] (state,typeID) {
      // console.log(typeID);
    state.typeApply.forEach(function(item,index){
      console.log(index);
      if(item.id == typeID){

          // console.log(item.id);
          state.typeApply.splice(index, 1);
         // console.log(item.name);
         // console.log(item.name);
      }
  });
  },

    [types.ADD_TYPE] (state,typeName) {
      console.log(typeName.name);
      console.log(typeName.abbreviation);
      console.log(typeName.appBorr);
      if(typeName.appBorr == "apply"){
        state.typeApply.push(
          {id:"none",name :typeName.name,abbreviation: typeName.abbreviation}
         );
      }else{
        state.typeBorrow.push(
            {id:"none",name :typeName.name,abbreviation: typeName.abbreviation}
         );
      }
  },

  //商品管理
  [types.DELETE_CARGO] (state,cargo) {
      if(cargo.appBorr == "apply"){
        for (var name in state.cargoApply){
          // console.log(name);
          // console.log(state.cargoApply[name].length);
          state.cargoApply[name].forEach(function(item,index){
            // console.log(item.name);
            // console.log(index);
            if(item.id == cargo.cargoID){
              state.cargoApply[name].splice(index,1);
            }
          });
        }

      }else{

         for (var name in state.cargoBorrow){
          console.log(name);
          console.log(state.cargoBorrow[name].length);
          state.cargoBorrow[name].forEach(function(item,index){
            // console.log(item.name);
            // console.log(index);
            if(item.id == cargo.cargoID){
              state.cargoBorrow[name].splice(index,1);
            }
          });
        }
      }
  },
   [types.STORE_CARGO] (state,cargo) {
      console.log(cargo.cargoID);
      if(cargo.appBorr == "apply"){



        // state.cargoApply.push(
        //   {id:"none",name :typeName.name,abbreviation: typeName.abbreviation}
        //  );
      }else{
        // state.cargoBorrow.push(
            // {id:"none",name :typeName.name,abbreviation: typeName.abbreviation}
         // );
      }
  },
   [types.ADD_CARGO] (state,cargo) {
      // console.log(cargo.name);
      console.log(cargo.typeID);
      // console.log(cargo.appBorr);
      // console.log(cargo.storageID);
      // console.log(cargo.position);
      // console.log(cargo.amount);
      // console.log(cargo.imgURL);
      if(cargo.appBorr == "apply"){

        var abbr = "";
        state.typeApply.forEach(function(item,index){
          if(item.id == cargo.typeID){
              abbr = item.abbreviation;
               state.cargoApply[abbr].push(
                {id:"none",name :cargo.name,"imgURL":cargo.imgURL,"storageID":cargo.storageID,"position":cargo.position,"amount":cargo.amount}
               );
              return;
          }
        });    

      }else{
        var abbr = "";
        state.typeBorrow.forEach(function(item,index){
          if(item.id == cargo.typeID){
              abbr = item.abbreviation;
               state.cargoBorrow[abbr].push(
                {id:"none",name :cargo.name,"imgURL":cargo.imgURL,"storageID":cargo.storageID,"position":cargo.position,"amount":cargo.amount}
               );
              return;
          }
        }); 
      }
  },

  //贵重物品
   [types.DELETE_VALUABLE] (state,id) {
      console.log(id);
      state.valuables.forEach(function(item,index){
        console.log(item);
        if(item.id == id){
          state.valuables.splice(index,1);
        }
      })
  },
   [types.UPDATE_VALUABLE] (state,valuable) {
    state.valuables.forEach(function(item,index){
      if(item.id == valuable.id){
        item = valuable;
      }
    })
   },
   [types.ADD_VALUABLE] (state,newValuable) {
    console.log(newValuable);
    state.valuables.push(
      {"id":"none","name":newValuable.name,"amount":newValuable.amount,"price":newValuable.price,"size":newValuable.price,"remark":newValuable.remark}
      );
   },

   //订单管理
   [types.PASS_ORDER] (state,order) {
    // var = order;
    state.orders[order.appBorr].list.forEach(function(item,index){
      if(item.id == order.id){
        state.orders[order.appBorr].list.splice(index,1);
        if(order.isPassed){
          console.log("pass");
          state.orders[order.appBorr].passed.push(
            {"name":order.name,"date":order.date,"id":order.id,"cargoName":order.cargoName,"reqAmount":order.reqAmount,"passAmount":order.passAmount,"storageID":order.storageID,"position":order.position},
          )
        }else{
           state.orders[order.appBorr].rejected.push(
            {"name":order.name,"date":order.date,"id":order.id,"cargoName":order.cargoName,"reqAmount":order.reqAmount,"passAmount":order.passAmount,"storageID":order.storageID,"position":order.position},
          )
        }
        
      }
    });
   },

};