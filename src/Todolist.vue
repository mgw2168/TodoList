<template>
<div>
  <div>
    <div>
      <input type="text" v-model="inputValue">
      <button @click="handleClick">提交</button>
    </div>
    <ul>
      <todo-item v-for="(item, index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="deleteListClick"
        >
      </todo-item>
    </ul>
  </div>
</div>

</template>

<script>
/* eslint-disable */
import TodoItem from './components/TodoItem'
export default {
  // 声明组件
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleClick () {
      if (this.inputValue != '') {
        this.list.push(this.inputValue)
        this.inputValue = ''
      } else {
        alert("输入内容不能为空！")
      }
    },
    deleteListClick (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
