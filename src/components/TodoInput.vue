<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="할일을 남기세요!" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
    <!--
    <button v-on:click="addTodo">추가</button>
    -->

    <modal :show="showModal" v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">
        할 일을 입력하세요.
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        console.log(this.newTodoItem);
        //localStorage.setItem(this.newTodoItem, this.newTodoItem);
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
    height: 50px;
    line-height: 50px;
    width: calc(100% - 5rem);
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
