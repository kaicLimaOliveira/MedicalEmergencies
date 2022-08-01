<template>
  <div>
    <div class="row">
      <div class="col">
        <h5>
          <Icon icon="clipboard-check" />
          Equipes montadas
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ListItems type="mountedTeams" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListItems from "./ListItems.vue";
</script>