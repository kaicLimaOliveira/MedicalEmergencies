<template>
  <div>
    <div class="row">
      <div class="col">
        <h5>
          <Icon icon="bag-shopping" />
          Equipamentos
        </h5>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :to="{ name: 'equipment', params: { type: 'cars' } }"
            >
              Carros
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :to="{ name: 'equipment', params: { type: 'telephone' } }"
            >
              Telefones
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :to="{
                name: 'equipment',
                params: { type: 'resuscitationKit' },
              }"
            >
              Kits de Reanimação
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span>
          <RouterView name="equipment" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>