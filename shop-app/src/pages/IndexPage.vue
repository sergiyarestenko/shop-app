<template>
  <q-page class="row items-center justify-evenly">
    <task-list :todo-list="todoList"></task-list>
  </q-page>
</template>

<script setup lang="ts">
import { ITodo, ITodoItem } from 'components/models';
import TaskList from 'components/TaskList.vue';
import { ref } from 'vue';

const taskOne = ref<ITodo[]>([
  {
    id: 'id',
    content: 'content',
    quantity: 2,
    measure: 'kg',
    completed: false,
  },
  {
    id: 'id2',
    content: 'content2',
  },
]);
const taskTwo = ref<ITodo[]>([
  {
    id: '2id',
    content: 'content',
    quantity: 2,
    measure: 'kg',
    completed: false,
  },
  {
    id: '2id2',
    content: 'content2',
  },
]);

const todoList = ref<ITodoItem[]>([
  {
    id: 'kjhlk',
    todos: taskOne.value,
    assignedTo: 'assignedfgsdTo',
    completed: false,
  },
  {
    id: 'kjsdfhlk',
    todos: taskTwo.value,
    assignedTo: 'assignedTo',
    completed: false,
  },
]);
</script>
