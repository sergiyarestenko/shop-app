<script lang="ts" setup>
import { computed } from 'vue';
import SItem from './SItem.vue';
import { IShopItem } from './models';
import { idText } from 'typescript';

const props = defineProps<{ shopItem: IShopItem; }>();

const item = computed(() => {
  const { id, title } = props.shopItem;
  return { id, title };
});
</script>

<template>
  <div>
    <SItem :item="item" />
    <span>{{ shopItem.measure }}</span>
    <input type="checkbox" :checked="shopItem.completed" />
  </div>
</template>
