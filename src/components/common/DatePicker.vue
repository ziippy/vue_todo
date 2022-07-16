<template lang="html">
  <div class="calendarBox">
    <input id="calendar" placeholder="클릭하면 달력이 보입니다." >
  </div>
</template>

<script>
export default {
  mounted() {
    $("#calendar").datepicker();
  }
}
</script>

<style lang="css" scoped>
  #calendar {
    float: right;
    margin: 10px;
    font-size: 0.9rem;
    text-align: right;
  }
</style>
