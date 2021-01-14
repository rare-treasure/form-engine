<template>
  <div id="app">
    <form-engine :items="items" style="width: 600px"></form-engine>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  items = [
    {
      label: 'test1',
      prop: 'test1',
      type: 'time-select'
    }
  ]
}
</script>

<style lang='scss'>

</style>
