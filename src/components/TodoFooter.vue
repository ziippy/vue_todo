<template lang="html">
  <!--
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
  -->
  <!-- using vue bootstrap -->
  <div>
    <button type="button" class="btn btn-primary btn-lg" @click="clearTodo">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      //localStorage.clear();
      this.$emit('removeAll');
    }
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
