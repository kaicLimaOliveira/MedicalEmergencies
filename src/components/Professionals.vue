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
            <RouterLink
              class="nav-link"
              :to="{ name: 'professionals', params: { type: 'nurses' } }"
            >
              Enfermeiros
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :to="{ name: 'professionals', params: { type: 'rescuers' } }"
            >
              Socorristas
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :to="{ name: 'professionals', params: { type: 'doctors' } }"
            >
              Médicos
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
</script>
