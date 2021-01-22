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
      type: 'time-select',
      row: true,
      span: 12
    },
    {
      label: 'test2',
      prop: 'test2',
      type: 'select',
      options: [
        {
          label: '测试1',
          value: 1
        }
      ],
      row: true,
      span: 12
    }
  ]
}
</script>

<style lang='scss'>

</style>
