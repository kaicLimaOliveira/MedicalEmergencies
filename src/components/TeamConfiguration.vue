<template>
  <div>
    <div class="row">
      <div class="col">
        <h5>
          <Icon icon="boxes-stacked" />
          Configuração da equipe
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>Enfermeiro: {{ team.nurse }}</p>
        <p>Socorrista: {{ team.rescuer }}</p>
        <p>Médico: {{ team.doctor }}</p>
        <p>Carro: {{ team.car }}</p>
        <p>Telefone: {{ team.telephone }}</p>
        <p>Kit de reanimação: {{ team.resuscitationKit }}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" :src="`../src/assets/ambulancias/${imageAmbulance}`" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button @click="equipMount" type="button" class="btn btn-primary">Montar equipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore()
const team = computed(() => store.state.team)
const imageAmbulance = computed((): string => {
  if (team.value.resuscitationKit)
    return 'uti.png'

  if (team.value.car)
    return 'simples.png'

  return 'indefinida.png'

})

function equipMount() {
  let equip = Object.assign({}, store.state.team)

  store.commit('addTeamInTeams', equip)
}
</script>
