<template>
  <div>
    <p>test</p>
    <div v-for="item in todoList" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITodoItem } from './models';

const props = defineProps<{
  todoList: ITodoItem;
}>();
</script>
