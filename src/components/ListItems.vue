<template>
  <div>
    <div v-if="props.type == 'rescuers'">
      <select class="form-control form-control-sm" v-model="state.shift">
        <option value="">Todos</option>
        <option value="manhã">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>
    </div>
    <Item v-for="(item, index) in items?.value" :key="index" :data="item" :type="props.type" />

    <div v-if="props.type == 'rescuers'">
      Total: {{ totalRescuersPerShift }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStore } from 'vuex';
import Item from "./Item.vue";

const state = reactive({
  shift: ""
})

const props = defineProps({
  type: String,
});

const store = useStore()
const nurses = computed(() => store.state.nurses)
const doctors = computed(() => store.state.doctors)
const cars = computed(() => store.state.equipment.cars)
const phones = computed(() => store.state.equipment.telephone)
const resuscitationKit = computed(() => store.state.equipment.resuscitationKit)

const filterShifts = computed(() => store.getters.rescuersPerShift(state.shift))
const totalRescuersPerShift = computed(() => store.getters.totalRescuersPerShift(state.shift))

const items = computed(() => {
  switch (props.type) {
    case 'nurses': return nurses;
    case 'rescuers': return filterShifts
    case 'doctors': return doctors;
    case 'cars': return cars;
    case 'telephone': return phones;
    case 'resuscitationKit': return resuscitationKit;
  }
})

</script>