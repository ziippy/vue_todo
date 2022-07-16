<template lang="html">
  <input id="calendar">
</template>

<script>
export default {
  mounted() {
    $("#calendar").datepicker();
  }
}
</script>

<style lang="css" scoped>
</style>
