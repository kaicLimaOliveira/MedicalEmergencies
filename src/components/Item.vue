<template>
  <div class="row">
    <div class="col-1" v-if="props.data.id" v-text="props.data.id"></div>
    <div class="col" v-if="props.data.name" v-html="props.data.name"></div>
    <div class="col-2" v-if="props.data.scale" v-text="props.data.scale"></div>
    <div class="col-2" v-if="props.data.shift" v-text="props.data.shift"></div>
    <div class="col" v-if="props.data.board" v-text="props.data.board"></div>
    <div class="col" v-if="props.data.telephone" v-text="props.data.telephone"></div>
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
    id?: number;
    name?: string;
    shift?: string;
    scale?: string;
    board?: string;
    telephone?: string;
    kit?: string;
  },
  type: string
}

const store = useStore()
const props = defineProps<Props>()

function addItemTeam(): void {
  const item = {
    type: props.type,
    data: props.data,
  }

  store.commit('setItemTeam', item)
}

</script>