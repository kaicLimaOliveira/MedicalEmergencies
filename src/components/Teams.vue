<template>
  <div>
    <div class="row">
      <div class="col">
        <h5>
          <Icon icon="clipboard-check" />
          Equipes montadas
          <span>Total de enfermeiros: {{ store.getters.totalNurses }}</span>
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
import { useStore } from 'vuex';
import ListItems from "./ListItems.vue";

const store = useStore()
</script>