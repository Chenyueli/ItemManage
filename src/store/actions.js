import * as types from './mutation-types'

export default {
  updateType({ commit }, type){
  	commit(types.UPDATE_TYPE,type)
  },
  deleteType({ commit }, typeID){
  	commit(types.DELETE_TYPE,typeID)
  },
  addType({ commit }, typeName){
  	commit(types.ADD_TYPE,typeName)
  },


  deleteCargo({ commit }, cargo){
  	commit(types.DELETE_CARGO,cargo)
  },
  storeCargo({ commit }, cargo){
  	commit(types.STORE_CARGO,cargo)
  },
  addCargo({ commit }, cargo){
    commit(types.ADD_CARGO,cargo)
  },

  deleteValuable({commit},id){
    commit(types.DELETE_VALUABLE,id)
  },
  updateValuable({commit},valuable){
    commit(types.DELETE_VALUABLE,valuable)
  },
  addValuable({commit},newValuable){
    commit(types.ADD_VALUABLE,newValuable)
  },

  passOrder({commit},id){
    commit(types.PASS_ORDER,id)
  },
  rejectOrder({commit},id){
    commit(types.REJECT_ORDER,id)
  },
};
