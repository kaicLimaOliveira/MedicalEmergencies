<template>
  <div class="row">
    <div class="col-1" v-if="props.data.id" v-text="props.data.id"></div>
    <div class="col" v-if="props.data.name" v-text="props.data.name"></div>
    <div class="col-2" v-if="props.data.scale" v-text="props.data.scale"></div>
    <div class="col-2" v-if="props.data.shift" v-text="props.data.shift"></div>
    <div class="col" v-if="props.data.board" v-text="props.data.board"></div>
    <div class="col" v-if="props.data.phone" v-text="props.data.phone"></div>
    <div class="col" v-if="props.data.kit" v-text="props.data.kit"></div>

    <div class="col-1">
      <Icon icon="square-check" role="button" @click="addItemTeam" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

interface Props {
  data: {
    id: number;
    name: string;
    shift: string;
    scale: string;
    board: string;
    phone: string;
    kit: string;
  },
  type: string
}

const store = useStore()
const props: Props = defineProps({
  data: Object,
  type: String,
})

function addItemTeam() {
  const type = props.type
  const data = props.data

  type == 'nurses' ? store.state.teams.nurses = data.name : null
  type == 'rescuers' ? store.state.teams.rescuer = data.name : null
  type == 'doctors' ? store.state.teams.doctor = data.name : null
  type == 'cars' ? store.state.teams.car = data.board : null
  type == 'telephone' ? store.state.teams.telephone = data.phone : null
  type == 'resuscitationKit' ? store.state.teams.resuscitationKit = data.kit : null
}

</script>