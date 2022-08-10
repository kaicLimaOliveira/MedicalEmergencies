<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ store.state.title }}</a>
      </div>
    </nav>

    <div class="container">
      <div class="row mt-5">
        <div class="col-6 p">
          <Professionals />
        </div>

        <div class="col-6">
          <Equipment />
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light p-2">
        <div class="col">
          <TeamConfiguration />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <Teams />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TeamConfiguration from "./TeamConfiguration.vue";
import Equipment from "./Equipment.vue";
import Teams from "./Teams.vue";
import Professionals from "./Professionals.vue";

import { useStore } from "vuex";
const store = useStore()


const props = defineProps({
  msg: String,
});
</script>
