<template>
  <div>
    Lista Itens {{ props.type }}
    <br />
    <Item />
  </div>
</template>

<script setup lang="ts">
import Item from "./Item.vue";

const props = defineProps({
  type: String,
});
</script>