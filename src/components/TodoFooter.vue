<template lang="html">
  <!--
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
  -->
  <!-- using vue bootstrap -->
  <div>
    <button type="button" class="btn btn-primary btn-lg" @click.stop="clearTodo">Clear All</button>
  </div>
</template>

<script>
import Constant from '../Constant'
//import { mapActions } from 'vuex'

export default {
  methods: {
    clearTodo() {
      //localStorage.clear();
      //this.$emit('removeAll');
      this.$store.dispatch(Constant.CLEAR_ALL);
    }
    // ...mapActions({
    //   clearTodo : Constant.CLEAR_ALL
    // })
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
  }

  .clearAllBtn {
    color: #e20303;
    display: block;
  }

  .btn {
    cursor: pointer;
  }
</style>
