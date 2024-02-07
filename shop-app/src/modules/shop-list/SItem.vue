<script lang="ts" setup>
import { IItem } from './models';

defineProps<{
  item: IItem;
}>();
</script>

<template>
  <div>
    <p>{{ item.title }}</p>
  </div>
</template>
