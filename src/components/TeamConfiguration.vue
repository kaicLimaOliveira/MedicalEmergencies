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
        <p>Enfermeiro: {{ teams.nurses }}</p>
        <p>Socorrista: {{ teams.rescuer }}</p>
        <p>Médico: {{ teams.doctor }}</p>
        <p>Carro: {{ teams.car }}</p>
        <p>Telefone: {{ teams.telephone }}</p>
        <p>Kit de reanimação: {{ teams.resuscitationKit }}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" src="../assets/ambulancias/indefinida.png" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Montar equipe</button>
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
const teams = computed(() => store.state.teams)
</script>
