<template>
  <div>
    <div class="row">
      <div class="col">
        <h5>
          <Icon icon="circle-user" />
          Profissionais
        </h5>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'professionals', params: { type: 'nurses' } }">
              Enfermeiros ({{ store.getters.totalNurses }})
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'professionals', params: { type: 'rescuers' } }">
              Socorristas ({{ store.getters.totalRescuers }})
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'professionals', params: { type: 'doctors' } }">
              Médicos ({{ store.getters.totalDoctors }})
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span>
          <RouterView name="professionals" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore()
</script>
