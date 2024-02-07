<script lang="ts" setup>
import { IShopList } from './models';
import SShopItem from './SShopItem.vue';

const props = defineProps<{ shopList: IShopList }>();
</script>

<template>
  <div>
    <p>title: {{ shopList.title }}</p>
    <p>created: {{ shopList.created }}</p>
    <p>status: {{ shopList.status }}</p>
    <SShopItem v-for="item in shopList.items" :key="item.id" :shop-item="item">
    </SShopItem>
  </div>
</template>
