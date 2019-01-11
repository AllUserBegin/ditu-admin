import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态

 const state={
    // 放置初始状态 app启动的时候的全局的初始值
    UserName: "",
    UserId: "",
    Token: ""
  }

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,  
    actions,
    mutations 
});