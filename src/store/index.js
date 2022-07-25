import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todolist : [
            { id:1, todo : "영화보기" },
            { id:2, todo : "주말 산책" },
            { id:3, todo : "Vue.js 학습" },
            { id:4, todo : "잠실 야구장" },
        ]
    },
    mutations: {
      [Constant.ADD_TODO] : (state, payload) => {
        if (payload.todo !== "") {
          state.todolist.push(
            { id: new Date().getTime(), todo: payload.todo });
        }
      },
      [Constant.CLEAR_ALL] : (state) => {
        state.todolist[index] = [];
      },
      [Constant.REMOVE_TODO] : (state, payload) => {
        var index = state.todolist.findIndex((item)=>item.id === payload.id);
        state.todolist.splice(index,1);
      }
    },
    actions: {
      [Constant.ADD_TODO] : (store, payload) => {
        console.log("###addTodo!!!", payload);
        store.commit(Constant.ADD_TODO, payload);
      },
      [Constant.CLEAR_ALL] : (store) => {
        console.log("###clearAll!!!");
        store.commit(Constant.DELETE_TODO, payload);
      },
      [Constant.REMOVE_TODO] : (store, payload) => {
        console.log("###removeTodo!!!", payload);
        store.commit(Constant.REMOVE_TODO, payload);
      }
    }
  })

export default store;
