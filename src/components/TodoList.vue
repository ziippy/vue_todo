<template>
  <section>
    <!--<ul>-->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in todolist" :key="todoItem.id" class="shodow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todoItem.todo }}
        <!--
        <span class="removeBtn" type="button" @click.stop="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt" aria-hidden="true"></i>
        </span>
        -->
        <span class="removeBtn" type="button" @click.stop="removeTodo({id: todoItem.id})">
          <i class="fas fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
    <!--</ul>-->
  </section>
</template>

<script>
import Constant from '../Constant'
//import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  //props: ['propsdata'],
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // created() {
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i++) {
  //       this.todoItems.push(localStorage.key(i));
  //     }
  //   }
  // },
  // computed : {
  //   //todolist() {
  //   //  return this.$store.state.todolist;
  //   //}
  // },
  // methods: {
  //   removeTodo(todoItem, index) {
  //     console.log('removeTodo', todoItem, index);
  //     //this.$emit('removeTodo', todoItem, index);
  //     //localStorage.removeItem(todoItem);
  //     //this.todoItems.splice(index, 1);
  //     this.$store.commit(Constant.REMOVE_TODO, {id:id})
  //   },
  // }
  //computed : mapState(['todolist']),
  computed : mapGetters({
    todolist: 'all'
  }),
  methods: {
    ...mapActions([
      Constant.REMOVE_TODO
    ])
  },
  ...mapMutations([
    Constant.REMOVE_TODO
  ])
}
</script>

<style scoped>
  ul {
    line-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
    cursor: pointer;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transition: translateY(30px);
  }
</style>
